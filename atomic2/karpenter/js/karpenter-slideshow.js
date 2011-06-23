/*
---

name: "SlideShow"

description: "Extensible mid-level class that manages transitions of elements that share the same space, typically for slideshows, tabs, and galleries."

license: "MIT-style license."

authors: "Ryan Florence <http://ryanflorence.com>"

requires:
  - Core/Fx.Tween
  - Core/Slick.Parser
  - Loop/Loop

provides:
  - SlideShow

...
*/

;(function(){

var SlideShow = this.SlideShow = new Class({

	Implements: [Options, Events, Loop],

	options: {
		/*
		onShow: function(){},
		onShowComplete: function(){},
		onReverse: function(){},
		onPlay: function(){},
		onPause: function(){},
		*/
		delay: 7000,
		transition: 'crossFade',
		duration: 500,
		autoplay: false,
		dataAttribute: 'data-slideshow',
		selector: '> *',
		initialSlideIndex: 0
	},

	transitioning: false,
	reversed: false,

	initialize: function(element, options, noSetup){
		this.element = document.id(element);
		this.setOptions(options);
		if (!noSetup) this.setup();
	},

	setup: function(options){
		if (options) this.setOptions(options);
		this.slides = this.element.getElements(this.options.selector);
		this.setupElement().setupSlides();
		this.current = this.current || this.slides[this.options.initialSlideIndex];
		this.index = this.current.retrieve('slideshow-index');
		this.setLoop(this.show.pass(this.reversed ? 'previous' : 'next', this), this.options.delay);
		if (this.options.autoplay) this.play();
		return this;
	},

	show: function(slide, options){
		if (slide == 'next' || slide == 'previous') slide = this[slide + 'Slide']();
		if (typeof slide == 'number') slide = this.slides[slide];
		if (slide == this.current || this.transitioning) return this;

		this.transitioning = true;
		this.current.store('slideshow:oldStyles', this.current.get('style'));

		var transition = (options && options.transition) ? options.transition : slide.retrieve('slideshow-transition'),
			duration = (options && options.duration) ? options.duration : slide.retrieve('slideshow-duration'),
			previous = this.current.setStyle('z-index', 1),
			next = this.reset(slide).setStyle('z-index', 0),
			nextIndex = this.index = next.retrieve('slideshow-index')
			slideData = {
				previous: { element: previous, index: previous.retrieve('slideshow-index') },
				next:     { element: next,     index: nextIndex }
			};

		this.fireEvent('show', slideData);

		SlideShow.transitions[transition]({
			previous: previous,
			next: next,
			duration: duration,
			instance: this
		});

		(function(){
			previous.setStyle('display', 'none');
			this.fireEvent('showComplete', slideData);
			this.transitioning = false;
		}).bind(this).delay(duration);

		this.current = next;
		return this;
	},

	play: function(){
		this.startLoop();
		this.fireEvent('play');
		return this;
	},

	pause: function(){
		this.stopLoop();
		this.fireEvent('pause');
		return this;
	},

	reverse: function(){
		this.setLoop(this.show.pass(this.reversed ? 'next' : 'previous', this), this.options.delay);
		this.reversed = !this.reversed;
		this.fireEvent('reverse');
		return this;
	},

	setupElement: function(){
		this.storeData(this.element);
		this.options.duration = this.element.retrieve('slideshow-duration');
		this.options.transition = this.element.retrieve('slideshow-transition');
		this.options.delay = this.element.retrieve('slideshow-delay');
		if (this.element.getStyle('position') == 'static') this.element.setStyle('position', 'relative');
		return this;
	},

	setupSlides: function(){
		this.slides.each(function(slide, index){
			slide.store('slideshow-index', index).store('slideshow:oldStyles', slide.get('style'));
			this.storeData(slide);
			slide.setStyle('display', (this.current || index == this.options.initialSlideIndex) ? '' : 'none');
		}, this);
		return this;
	},

	storeData: function(element){
		var ops = this.options;
		// default options
		element.store('slideshow-transition', ops.transition);
		element.store('slideshow-duration', ops.duration);
		if (element == this.element) element.store('slideshow-delay', ops.delay);
		// override from data attribute
		var data = element.get(this.options.dataAttribute);
		if (!data) return this;
		Slick.parse(data).expressions[0].each(function(option){
			element.store('slideshow-' + option.tag, option.pseudos[0].key);
		});
		return this;
	},

	reset: function(slide){
		return slide.set('style', slide.retrieve('slideshow:oldStyles'));
	},

	nextSlide: function(){
		return this.slides[this.index + 1] || this.slides[0];
	},

	previousSlide: function(){
		return this.slides[this.index - 1] || this.slides.getLast();
	},

	toElement: function(){
		return this.element;
	}

});

SlideShow.transitions = {};

SlideShow.defineTransition = function(name, fn){
	SlideShow.transitions[name] = fn;
};

SlideShow.defineTransitions = function(transitions){
	Object.each(transitions, function(item, index){
		SlideShow.defineTransition(index, item);
	});
};

})();

// element extensions

Element.Properties.slideshow = {

	set: function(options){
		this.get('slideshow').setup(options);
		return this;
	},

	get: function(){
		var instance = this.retrieve('slideshow');
		if (!instance){
			instance = new SlideShow(this, {}, true);
			this.store('slideshow', instance);
		}
		return instance;
	}

};

Element.implement({

	playSlideShow: function(options){
		this.get('slideshow').setup(options).play();
		return this;
	},

	pauseSlideShow: function(){
		this.get('slideshow').pause();
		return this;
	}

});

// 19 transitions :D
SlideShow.defineTransitions({

	none: function(data){
		data.previous.setStyle('display', 'none');
		return this;
	},

	fade: function(data){
		data.previous.set('tween', {duration: data.duration}).fade('out');
		return this;
	},

	crossFade: function(data){
		data.previous.set('tween', {duration: data.duration}).fade('out');
		data.next.set('tween', {duration: data.duration}).fade('in');
		return this;
	},

	fadeThroughBackground: function(data){
		var half = data.duration / 2;
		data.next.set('tween', {duration: half}).fade('hide');
		data.previous.set('tween',{
			duration: half,
			onComplete: function(){ data.next.fade('in'); }
		}).fade('out');
		return this;
	}

});

(function(){

	function getStyles(direction){
		return {
			property: (direction == 'left' || direction == 'right') ? 'left' : 'top',
			inverted: (direction == 'left' || direction == 'up') ? 1 : -1
		};
	}

	function go(type, styles, data){
		var tweenOptions = {duration: data.duration, unit: '%'};
		if (type == 'blind') {
			data.next.setStyle('z-index', 2);
		}
		if (type != 'slide') {
			data.next
			    .set('tween', tweenOptions)
			    .setStyle(styles.property, 100 * styles.inverted + '%');
			data.next.tween(styles.property, 0);
		}
		if (type != 'blind'){
			data.previous
			    .set('tween', tweenOptions)
			    .tween(styles.property, -(100 * styles.inverted));
		}
	}

	['left', 'right', 'up', 'down'].each(function(direction){

		var capitalized = direction.capitalize(),
		    blindName = 'blind' + capitalized,
		    slideName = 'slide' + capitalized;

		[
			['push' + capitalized, (function(){
				var styles = getStyles(direction);
				return function(data){
					go('push', styles, data);
				}
			}())],

			[blindName, (function(){
				var styles = getStyles(direction);
				return function(data){
					go('blind', styles, data);
				}
			}())],

			[slideName, (function(){
				var styles = getStyles(direction);
				return function(data){
					go('slide', styles, data);
				}
			}())],

			[blindName + 'Fade', function(data){
				this.fade(data)[blindName](data);
				return this;
			}]
		].each(function(transition){
			SlideShow.defineTransition(transition[0], transition[1]);
		});
	});

})();
