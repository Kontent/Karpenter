Accessible MooDropMenu
===========

This widget provides an accessible version of the MooDropMenu. You can create an unlimited nested menu,
build by the HTML tags <code>ul</code> and <code>li</code>. The menu can be controlled by the keyboard 
and supports common screen reading software.
	
Widget based on <a href="http://mootools.net/forge/p/moodropmenu" title="MooDropMenu on Mootools Forge">MooDropMenu</a> by Arian Stolwijk! 


How to use
----------

Just include MooDropMenu.js or MooDropMenu-min.js and the MooDropMenu.css to your HTML:

	#HTML
	<script type="text/javascript" src="/js/MooDropMenu-min.js"></script>
	<link  href="/css/MooDropMenu.css" rel="stylesheet" type="text/css" media="screen" />

And the menu structure

	#HTML
<div id="nav_wrapper">
                    <ul id="nav">
                    	<li><div><span>Info</span></div>
                    		<ul>
                    			<li><div><span>Test</span></div>
                    				<ul>
                    					<li><div><span>Problem 1</span></div></li>
                    					<li><div><span>Problem 2</span></div></li>
                    					<li><div><span>Problem 3</span></div></li>
                    				</ul>
                    			</li>
                    		</ul>
                    	</li>
                        <li>
                            <div><span>Projects</span></div>
                            <ul>
                                <li>
                                    <div><span>Websites</span></div>
                                    <ul>
                                        <li>
                                            <div><span>Website 1</span></div>
                                        </li>
                                        <li>
                                            <div><span>Website 2</span></div>
                                        </li>
                                        <li>
                                            <div><span>Website 3</span></div>
                                        </li>
                                        <li>
                                            <div><span>Website 4</span></div>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div><span>Website design</span></div>
                                </li>
                                <li>
                                    <div><span>Javascript</span></div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


And then initialize the menu

	#JS
	window.addEvent('domready',function(){


		// The simple way
		$('nav').MooDropMenu();



		// The more advanced way
		$('nav').MooDropMenu({
			onOpen: function(el){
				el.fade('in')
			},
			onClose: function(el){
				el.fade('out');
			},
			onInitialize: function(el){
				el.fade('hide').set('tween',{duration:1000});
			}
		});


		// Using the MooDropMenuClass
		var dropMenu = new MooDropMenu($('nav'),{
			onOpen: function(el){
				el.fade('in')
			},
			onClose: function(el){
				el.fade('out');
			},
			onInitialize: function(el){
				el.fade('hide').set('tween',{duration:1000});
			}
		});

	}

Documentation
-------------

## Class: MooDropMenu ##

### Syntax ###

	#JS
	var dropMenu = new MooDropMenu(element, [options]);

#### Arguments ####
1. element - (element,string) An Element or the string id of an Element to apply the drop menu to.
2. options - (object,optional) An object with options for the drop menu. See below

#### Options ####
- mouseoutDelay - (number: defaults to 200) The time (delay) before the onClose event get fired
- mouseoverDelay - (number: defaults to 0) The time (delay) before the onOpen event get fired
- listSelector - (string: defaults to `ul`) The list tagname
- itemSelector - (string: defaults to `li`) The items tagname
- openEvent - (string: defaults to 'mouseenter') The event name when the menu should open
- closeEvent - (string: defaults to 'mouseleave') The event name when the menu should close

#### Events ####
- open - (function) The function which opens a part of the menu
- close - (function) The function which close a menu
- initialize - (function) The function which to execute when the menu part (ul) get initialized

## Native: Element.MooDropMenu ##


### Syntax ###

	#JS
	$('myElement').MooDropMenu([options]);

### Arguments ###
1. options - (object,optional) An object with options for the drop menu. See the MooDropMenu options

### Returns ###
- (object) This Element.


License
-------
MIT-style license.
