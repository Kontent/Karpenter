//MooTools More, <http://mootools.net/more>. Copyright (c) 2006-2009 Aaron Newton <http://clientcide.com/>, Valerio Proietti <http://mad4milk.net> & the MooTools team <http://mootools.net/developers>, MIT Style License.

MooTools.More={version:"1.2.5.1",build:"254884f2b83651bf95260eed5c6cceb838e22d8e"};var Asset={javascript:function(f,d){d=$extend({onload:$empty,document:document,check:$lambda(true)},d);
if(d.onLoad){d.onload=d.onLoad;delete d.onLoad;}var b=new Element("script",{src:f,type:"text/javascript"});var e=d.onload.bind(b),a=d.check,g=d.document;
delete d.onload;delete d.check;delete d.document;b.addEvents({load:e,readystatechange:function(){if(["loaded","complete"].contains(this.readyState)){e();
}}}).set(d);if(Browser.Engine.webkit419){var c=(function(){if(!$try(a)){return;}$clear(c);e();}).periodical(50);}return b.inject(g.head);},css:function(b,a){a=a||{};
var c=a.onload||a.onLoad;if(c){a.events=a.events||{};a.events.load=c;delete a.onload;delete a.onLoad;}return new Element("link",$merge({rel:"stylesheet",media:"screen",type:"text/css",href:b},a)).inject(document.head);
},image:function(c,b){b=$merge({onload:$empty,onabort:$empty,onerror:$empty},b);var d=new Image();var a=document.id(d)||new Element("img");["load","abort","error"].each(function(e){var g="on"+e;
var f=e.capitalize();if(b["on"+f]){b[g]=b["on"+f];delete b["on"+f];}var h=b[g];delete b[g];d[g]=function(){if(!d){return;}if(!a.parentNode){a.width=d.width;
a.height=d.height;}d=d.onload=d.onabort=d.onerror=null;h.delay(1,a,a);a.fireEvent(e,a,1);};});d.src=a.src=c;if(d&&d.complete){d.onload.delay(1);}return a.set(b);
},images:function(d,c){c=$merge({onComplete:$empty,onProgress:$empty,onError:$empty,properties:{}},c);d=$splat(d);var a=[];var b=0;return new Elements(d.map(function(f,e){return Asset.image(f,$extend(c.properties,{onload:function(){c.onProgress.call(this,b,e);
b++;if(b==d.length){c.onComplete();}},onerror:function(){c.onError.call(this,b,e);b++;if(b==d.length){c.onComplete();}}}));}));}};