MUI.files[MUI.path.plugins+"MUI/Window/Windows-from-html.js"]="loaded";MUI.extend({NewWindowsFromHTML:function(){$$(".mocha").each(function(el){if(Browser.Engine.presto||Browser.Engine.trident5){el.hide()}var title=el.getElement("h3.mochaTitle");if(Browser.Engine.presto){el.show()}var elDimensions=el.getStyles("height","width");var properties={id:el.getProperty("id"),height:elDimensions.height.toInt(),width:elDimensions.width.toInt(),x:el.getStyle("left").toInt(),y:el.getStyle("top").toInt()};if(title){properties.title=title.innerHTML;title.destroy()}properties.content=el.innerHTML;el.destroy();new MUI.Window(properties,true)}.bind(this))}});