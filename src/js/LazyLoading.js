var LazyLoad = new Class({

  Implements: [Options,Events],

  /* additional options */
  options: {
    range: 200,
    image: 'blank.gif',
    resetDimensions: true,
    elements: 'img',
    container: window,
    fireScroll: true,
    mode: 'vertical'
  },

  /* initialize */
  initialize: function(options) {
  
    /* vars */
    this.setOptions(options);
    this.container = document.id(this.options.container);
    this.elements = $$(this.options.elements);
    var axis = (this.options.mode == 'vertical' ? 'y': 'x');
    this.containerDimension = this.container.getSize()[axis];
    this.start = 0;

    /* find elements remember and hold on to */
    this.elements = this.elements.filter(function(el) {
      /* reset image src IF the image is below the fold and range */
      if(el.getPosition(this.container)[axis] > this.containerDimension + this.options.range) {
        el.store('oSRC',el.get('src')).set('src',this.options.image);
        if(this.options.resetDimensions) {
          el.store('oWidth',el.get('width')).store('oHeight',el.get('height')).set({'width':'','height':''});
        }
        return true;
      }
    },this);
  
    /* create the action function */
    var action = function() {
      var cpos = this.container.getScroll()[axis];
      if(cpos > this.start) {
        this.elements = this.elements.filter(function(el) {
          if((this.container.getScroll()[axis] + this.options.range + this.containerDimension) >= el.getPosition(this.container)[axis]) {
            if(el.retrieve('oSRC')) { el.set('src',el.retrieve('oSRC')); }
            if(this.options.resetDimensions) {
              el.set({
                width: el.retrieve('oWidth'),
                height: el.retrieve('oHeight') 
              });
            }
            this.fireEvent('load',[el]);
            return false;
          }
          return true;
        },this);
        this.start = cpos;
      }
      this.fireEvent('scroll');
      /* remove this event IF no elements */
      if(!this.elements.length) {
        this.container.removeEvent('scroll',action);
        this.fireEvent('complete');
      }
    }.bind(this);
  
    /* listen for scroll */
    this.container.addEvent('scroll',action);
    if(this.options.fireScroll) { this.container.fireEvent('scroll'); }
  }
});

/* usage */
window.addEvent('domready',function() {
  var lazyloader = new LazyLoad();
});