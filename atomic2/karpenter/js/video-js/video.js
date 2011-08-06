(function(c,d){var a=c.document;(function(){var e=false,f=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;this.JRClass=function(){};JRClass.extend=function(k){var i=this.prototype;e=true;var h=new this();e=false;for(var g in k){h[g]=typeof k[g]=="function"&&typeof i[g]=="function"&&f.test(k[g])?(function(l,m){return function(){var o=this._super;this._super=i[l];var n=m.apply(this,arguments);this._super=o;return n}})(g,k[g]):k[g]}function j(){if(!e&&this.init){this.init.apply(this,arguments)}}j.prototype=h;j.constructor=j;j.extend=arguments.callee;return j}})();var b=JRClass.extend({init:function(f,e){if(typeof f=="string"){this.video=a.getElementById(f)}else{this.video=f}this.video.player=this;this.values={};this.elements={};this.options={autoplay:false,preload:true,useBuiltInControls:false,controlsBelow:false,controlsAtStart:false,controlsHiding:true,defaultVolume:0.85,playerFallbackOrder:["html5","flash","links"],flashPlayer:"htmlObject",flashPlayerVersion:false};if(typeof b.options=="object"){_V_.merge(this.options,b.options)}if(typeof e=="object"){_V_.merge(this.options,e)}if(this.getPreloadAttribute()!==d){this.options.preload=this.getPreloadAttribute()}if(this.getAutoplayAttribute()!==d){this.options.autoplay=this.getAutoplayAttribute()}this.box=this.video.parentNode;this.linksFallback=this.getLinksFallback();this.hideLinksFallback();this.each(this.options.playerFallbackOrder,function(g){if(this[g+"Supported"]()){this[g+"Init"]();return true}});this.activateElement(this,"player");this.activateElement(this.box,"box")},behaviors:{},newBehavior:function(e,f,g){this.behaviors[e]=f;this.extend(g)},activateElement:function(e,f){if(typeof e=="string"){e=a.getElementById(e)}this.behaviors[f].call(this,e)},errors:[],warnings:[],warning:function(e){this.warnings.push(e);this.log(e)},history:[],log:function(f){if(!f){return}if(typeof f=="string"){f={type:f}}if(f.type){this.history.push(f.type)}if(this.history.length>=50){this.history.shift()}try{console.log(f.type)}catch(g){try{opera.postError(f.type)}catch(g){}}},setLocalStorage:function(f,g){if(!localStorage){return}try{localStorage[f]=g}catch(h){if(h.code==22||h.code==1014){this.warning(b.warnings.localStorageFull)}}},getPreloadAttribute:function(){if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("preload")){var e=this.video.getAttribute("preload");if(e===""||e==="true"){return"auto"}if(e==="false"){return"none"}return e}},getAutoplayAttribute:function(){if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("autoplay")){var e=this.video.getAttribute("autoplay");if(e==="false"){return false}return true}},bufferedPercent:function(){return(this.duration())?this.buffered()[1]/this.duration():0},each:function(e,h){if(!e||e.length===0){return}for(var g=0,f=e.length;g<f;g++){if(h.call(this,e[g],g)){break}}},extend:function(f){for(var e in f){if(f.hasOwnProperty(e)){this[e]=f[e]}}}});b.player=b.prototype;b.player.extend({flashSupported:function(){if(!this.flashElement){this.flashElement=this.getFlashElement()}if(this.flashElement&&this.flashPlayerVersionSupported()){return true}else{return false}},flashInit:function(){this.replaceWithFlash();this.element=this.flashElement;this.video.src="";var e=b.flashPlayers[this.options.flashPlayer];this.extend(b.flashPlayers[this.options.flashPlayer].api);(e.init.context(this))()},getFlashElement:function(){var g=this.video.children;for(var f=0,e=g.length;f<e;f++){if(g[f].className=="vjs-flash-fallback"){return g[f]}}},replaceWithFlash:function(){if(this.flashElement){this.box.insertBefore(this.flashElement,this.video);this.video.style.display="none"}},flashPlayerVersionSupported:function(){var e=(this.options.flashPlayerVersion)?this.options.flashPlayerVersion:b.flashPlayers[this.options.flashPlayer].flashPlayerVersion;return b.getFlashVersion()>=e}});b.flashPlayers={};b.flashPlayers.htmlObject={flashPlayerVersion:9,init:function(){return true},api:{width:function(e){if(e!==d){this.element.width=e;this.box.style.width=e+"px";this.triggerResizeListeners();return this}return this.element.width},height:function(e){if(e!==d){this.element.height=e;this.box.style.height=e+"px";this.triggerResizeListeners();return this}return this.element.height}}};b.player.extend({linksSupported:function(){return true},linksInit:function(){this.showLinksFallback();this.element=this.video},getLinksFallback:function(){return this.box.getElementsByTagName("P")[0]},hideLinksFallback:function(){if(this.linksFallback){this.linksFallback.style.display="none"}},showLinksFallback:function(){if(this.linksFallback){this.linksFallback.style.display="block"}}});b.merge=function(h,g,f){for(var e in g){if(g.hasOwnProperty(e)&&(!f||!h.hasOwnProperty(e))){h[e]=g[e]}}return h};b.extend=function(e){this.merge(this,e,true)};b.extend({setupAllWhenReady:function(e){b.options=e;b.DOMReady(b.setup)},DOMReady:function(e){b.addToDOMReady(e)},setup:function(g,e){var k=false,j=[],h;if(!g||g=="All"){g=b.getVideoJSTags()}else{if(typeof g!="object"||g.nodeType==1){g=[g];k=true}}for(var f=0;f<g.length;f++){if(typeof g[f]=="string"){h=a.getElementById(g[f])}else{h=g[f]}j.push(new b(h,e))}return(k)?j[0]:j},getVideoJSTags:function(){var g=a.getElementsByTagName("video"),e=[],k;for(var h=0,f=g.length;h<f;h++){k=g[h];if(k.className.indexOf("video-js")!=-1){e.push(k)}}return e},browserSupportsVideo:function(){if(typeof b.videoSupport!="undefined"){return b.videoSupport}b.videoSupport=!!a.createElement("video").canPlayType;return b.videoSupport},getFlashVersion:function(){if(typeof b.flashVersion!="undefined"){return b.flashVersion}var f=0,i;if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"){i=navigator.plugins["Shockwave Flash"].description;if(i&&!(typeof navigator.mimeTypes!="undefined"&&navigator.mimeTypes["application/x-shockwave-flash"]&&!navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)){f=parseInt(i.match(/^.*\s+([^\s]+)\.[^\s]+\s+[^\s]+$/)[1],10)}}else{if(typeof c.ActiveXObject!="undefined"){try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(g){f=parseInt(g.GetVariable("$version").match(/^[^\s]+\s(\d+)/)[1],10)}}catch(h){}}}b.flashVersion=f;return b.flashVersion},isIE:function(){return !+"\v1"},isIPad:function(){return navigator.userAgent.match(/iPad/i)!==null},isIPhone:function(){return navigator.userAgent.match(/iPhone/i)!==null},isIOS:function(){return b.isIPhone()||b.isIPad()},iOSVersion:function(){var e=navigator.userAgent.match(/OS (\d+)_/i);if(e&&e[1]){return e[1]}},isAndroid:function(){return navigator.userAgent.match(/Android/i)!==null},androidVersion:function(){var e=navigator.userAgent.match(/Android (\d+)\./i);if(e&&e[1]){return e[1]}},warnings:{videoNotReady:"Video is not ready yet (try playing the video first).",localStorageFull:"Local Storage is Full"}});if(b.isIE()){a.createElement("video")}c.VideoJS=c._V_=b;b.player.extend({html5Supported:function(){if(b.browserSupportsVideo()&&this.canPlaySource()){return true}else{return false}},html5Init:function(){this.element=this.video;this.fixPreloading();this.supportProgressEvents();this.volume((localStorage&&localStorage.volume)||this.options.defaultVolume);if(b.isIOS()){this.options.useBuiltInControls=true;this.iOSInterface()}else{if(b.isAndroid()){this.options.useBuiltInControls=true;this.androidInterface()}}if(!this.options.useBuiltInControls){this.video.controls=false;if(this.options.controlsBelow){_V_.addClass(this.box,"vjs-controls-below")}this.activateElement(this.video,"playToggle");this.buildStylesCheckDiv();this.buildAndActivatePoster();this.buildBigPlayButton();this.buildAndActivateSpinner();this.buildAndActivateControlBar();this.loadInterface();this.getSubtitles()}},canPlaySource:function(){if(this.canPlaySourceResult){return this.canPlaySourceResult}var h=this.video.children;for(var g=0,f=h.length;g<f;g++){if(h[g].tagName.toUpperCase()=="SOURCE"){var e=this.video.canPlayType(h[g].type)||this.canPlayExt(h[g].src);if(e=="probably"||e=="maybe"){this.firstPlayableSource=h[g];this.canPlaySourceResult=true;return true}}}this.canPlaySourceResult=false;return false},canPlayExt:function(g){if(!g){return""}var e=g.match(/\.([^\.]+)$/);if(e&&e[1]){var f=e[1].toLowerCase();if(b.isAndroid()){if(f=="mp4"||f=="m4v"){return"maybe"}}else{if(b.isIOS()){if(f=="m3u8"){return"maybe"}}}}return""},forceTheSource:function(){this.video.src=this.firstPlayableSource.src;this.video.load()},fixPreloading:function(){if(typeof this.video.hasAttribute=="function"&&this.video.hasAttribute("preload")&&this.video.preload!="none"){this.video.autobuffer=true}else{this.video.autobuffer=false;this.video.preload="none"}},supportProgressEvents:function(f){_V_.addListener(this.video,"progress",this.playerOnVideoProgress.context(this))},playerOnVideoProgress:function(e){this.setBufferedFromProgress(e)},setBufferedFromProgress:function(f){if(f.total>0){var e=(f.loaded/f.total)*this.duration();if(e>this.values.bufferEnd){this.values.bufferEnd=e}}},iOSInterface:function(){if(b.iOSVersion()<4){this.forceTheSource()}if(b.isIPad()){this.buildAndActivateSpinner()}},androidInterface:function(){this.forceTheSource();_V_.addListener(this.video,"click",function(){this.play()});this.buildBigPlayButton();_V_.addListener(this.bigPlayButton,"click",function(){this.play()}.context(this));this.positionBox();this.showBigPlayButtons()},loadInterface:function(){if(!this.stylesHaveLoaded()){if(!this.positionRetries){this.positionRetries=1}if(this.positionRetries++<100){setTimeout(this.loadInterface.context(this),10);return}}this.hideStylesCheckDiv();this.showPoster();if(this.video.paused!==false){this.showBigPlayButtons()}if(this.options.controlsAtStart){this.showControlBars()}this.positionAll()},buildAndActivateControlBar:function(){this.controls=_V_.createElement("div",{className:"vjs-controls"});this.box.appendChild(this.controls);this.activateElement(this.controls,"controlBar");this.activateElement(this.controls,"mouseOverVideoReporter");this.playControl=_V_.createElement("div",{className:"vjs-play-control",innerHTML:"<span></span>"});this.controls.appendChild(this.playControl);this.activateElement(this.playControl,"playToggle");this.progressControl=_V_.createElement("div",{className:"vjs-progress-control"});this.controls.appendChild(this.progressControl);this.progressHolder=_V_.createElement("div",{className:"vjs-progress-holder"});this.progressControl.appendChild(this.progressHolder);this.activateElement(this.progressHolder,"currentTimeScrubber");this.loadProgressBar=_V_.createElement("div",{className:"vjs-load-progress"});this.progressHolder.appendChild(this.loadProgressBar);this.activateElement(this.loadProgressBar,"loadProgressBar");this.playProgressBar=_V_.createElement("div",{className:"vjs-play-progress"});this.progressHolder.appendChild(this.playProgressBar);this.activateElement(this.playProgressBar,"playProgressBar");this.timeControl=_V_.createElement("div",{className:"vjs-time-control"});this.controls.appendChild(this.timeControl);this.currentTimeDisplay=_V_.createElement("span",{className:"vjs-current-time-display",innerHTML:"00:00"});this.timeControl.appendChild(this.currentTimeDisplay);this.activateElement(this.currentTimeDisplay,"currentTimeDisplay");this.timeSeparator=_V_.createElement("span",{innerHTML:" / "});this.timeControl.appendChild(this.timeSeparator);this.durationDisplay=_V_.createElement("span",{className:"vjs-duration-display",innerHTML:"00:00"});this.timeControl.appendChild(this.durationDisplay);this.activateElement(this.durationDisplay,"durationDisplay");this.volumeControl=_V_.createElement("div",{className:"vjs-volume-control",innerHTML:"<div><span></span><span></span><span></span><span></span><span></span><span></span></div>"});this.controls.appendChild(this.volumeControl);this.activateElement(this.volumeControl,"volumeScrubber");this.volumeDisplay=this.volumeControl.children[0];this.activateElement(this.volumeDisplay,"volumeDisplay");this.fullscreenControl=_V_.createElement("div",{className:"vjs-fullscreen-control",innerHTML:"<div><span></span><span></span><span></span><span></span></div>"});this.controls.appendChild(this.fullscreenControl);this.activateElement(this.fullscreenControl,"fullscreenToggle")},buildAndActivatePoster:function(){this.updatePosterSource();if(this.video.poster){this.poster=a.createElement("img");this.box.appendChild(this.poster);this.poster.src=this.video.poster;this.poster.className="vjs-poster";this.activateElement(this.poster,"poster")}else{this.poster=false}},buildBigPlayButton:function(){this.bigPlayButton=_V_.createElement("div",{className:"vjs-big-play-button",innerHTML:"<span></span>"});this.box.appendChild(this.bigPlayButton);this.activateElement(this.bigPlayButton,"bigPlayButton")},buildAndActivateSpinner:function(){this.spinner=_V_.createElement("div",{className:"vjs-spinner",innerHTML:"<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>"});this.box.appendChild(this.spinner);this.activateElement(this.spinner,"spinner")},buildStylesCheckDiv:function(){this.stylesCheckDiv=_V_.createElement("div",{className:"vjs-styles-check"});this.stylesCheckDiv.style.position="absolute";this.box.appendChild(this.stylesCheckDiv)},hideStylesCheckDiv:function(){this.stylesCheckDiv.style.display="none"},stylesHaveLoaded:function(){if(this.stylesCheckDiv.offsetHeight!=5){return false}else{return true}},positionAll:function(){this.positionBox();this.positionControlBars();this.positionPoster()},positionBox:function(){if(this.videoIsFullScreen){this.box.style.width="";this.element.style.height="";if(this.options.controlsBelow){this.box.style.height="";this.element.style.height=(this.box.offsetHeight-this.controls.offsetHeight)+"px"}}else{this.box.style.width=this.width()+"px";this.element.style.height=this.height()+"px";if(this.options.controlsBelow){this.element.style.height=""}}},getSubtitles:function(){var f=this.video.getElementsByTagName("TRACK");for(var g=0,e=f.length;g<e;g++){if(f[g].getAttribute("kind")=="subtitles"&&f[g].getAttribute("src")){this.subtitlesSource=f[g].getAttribute("src");this.loadSubtitles();this.buildSubtitles()}}},loadSubtitles:function(){_V_.get(this.subtitlesSource,this.parseSubtitles.context(this))},parseSubtitles:function(g){var f=g.split("\n"),e="",k,m,n;this.subtitles=[];this.currentSubtitle=false;this.lastSubtitleIndex=0;for(var l=0;l<f.length;l++){e=_V_.trim(f[l]);if(e){k={id:e,index:this.subtitles.length};e=_V_.trim(f[++l]);m=e.split(" --> ");k.start=this.parseSubtitleTime(m[0]);k.end=this.parseSubtitleTime(m[1]);n=[];for(var h=l;h<f.length;h++){e=_V_.trim(f[++l]);if(!e){break}n.push(e)}k.text=n.join("<br/>");this.subtitles.push(k)}}},parseSubtitleTime:function(e){var g=e.split(":"),f=0;f+=parseFloat(g[0])*60*60;f+=parseFloat(g[1])*60;var h=g[2].split(/\.|,/);f+=parseFloat(h[0]);ms=parseFloat(h[1]);if(ms){f+=ms/1000}return f},buildSubtitles:function(){this.subtitlesDisplay=_V_.createElement("div",{className:"vjs-subtitles"});this.box.appendChild(this.subtitlesDisplay);this.activateElement(this.subtitlesDisplay,"subtitlesDisplay")},addVideoListener:function(f,e){_V_.addListener(this.video,f,e.rEvtContext(this))},play:function(){this.video.play();return this},onPlay:function(e){this.addVideoListener("play",e);return this},pause:function(){this.video.pause();return this},onPause:function(e){this.addVideoListener("pause",e);return this},paused:function(){return this.video.paused},currentTime:function(g){if(g!==d){try{this.video.currentTime=g}catch(f){this.warning(b.warnings.videoNotReady)}this.values.currentTime=g;return this}return this.video.currentTime},onCurrentTimeUpdate:function(e){this.currentTimeListeners.push(e)},duration:function(){return this.video.duration},buffered:function(){if(this.values.bufferStart===d){this.values.bufferStart=0;this.values.bufferEnd=0}if(this.video.buffered&&this.video.buffered.length>0){var e=this.video.buffered.end(0);if(e>this.values.bufferEnd){this.values.bufferEnd=e}}return[this.values.bufferStart,this.values.bufferEnd]},volume:function(e){if(e!==d){this.values.volume=Math.max(0,Math.min(1,parseFloat(e)));this.video.volume=this.values.volume;this.setLocalStorage("volume",this.values.volume);return this}if(this.values.volume){return this.values.volume}return this.video.volume},onVolumeChange:function(e){_V_.addListener(this.video,"volumechange",e.rEvtContext(this))},width:function(e){if(e!==d){this.video.width=e;this.box.style.width=e+"px";this.triggerResizeListeners();return this}return this.video.offsetWidth},height:function(e){if(e!==d){this.video.height=e;this.box.style.height=e+"px";this.triggerResizeListeners();return this}return this.video.offsetHeight},supportsFullScreen:function(){if(typeof this.video.webkitEnterFullScreen=="function"){if(!navigator.userAgent.match("Chrome")&&!navigator.userAgent.match("Mac OS X 10.5")){return true}}return false},html5EnterNativeFullScreen:function(){try{this.video.webkitEnterFullScreen()}catch(f){if(f.code==11){this.warning(b.warnings.videoNotReady)}}return this},enterFullScreen:function(){if(this.supportsFullScreen()){this.html5EnterNativeFullScreen()}else{this.enterFullWindow()}},exitFullScreen:function(){if(this.supportsFullScreen()){}else{this.exitFullWindow()}},enterFullWindow:function(){this.videoIsFullScreen=true;this.docOrigOverflow=a.documentElement.style.overflow;_V_.addListener(a,"keydown",this.fullscreenOnEscKey.rEvtContext(this));_V_.addListener(c,"resize",this.fullscreenOnWindowResize.rEvtContext(this));a.documentElement.style.overflow="hidden";_V_.addClass(this.box,"vjs-fullscreen");this.positionAll()},exitFullWindow:function(){this.videoIsFullScreen=false;a.removeEventListener("keydown",this.fullscreenOnEscKey,false);c.removeEventListener("resize",this.fullscreenOnWindowResize,false);a.documentElement.style.overflow=this.docOrigOverflow;_V_.removeClass(this.box,"vjs-fullscreen");this.positionAll()},onError:function(e){this.addVideoListener("error",e);return this},onEnded:function(e){this.addVideoListener("ended",e);return this}});b.player.newBehavior("player",function(e){this.onError(this.playerOnVideoError);this.onPlay(this.playerOnVideoPlay);this.onPlay(this.trackCurrentTime);this.onPause(this.playerOnVideoPause);this.onPause(this.stopTrackingCurrentTime);this.onEnded(this.playerOnVideoEnded);this.trackBuffered();this.onBufferedUpdate(this.isBufferFull)},{playerOnVideoError:function(e){this.log(e);this.log(this.video.error)},playerOnVideoPlay:function(e){this.hasPlayed=true},playerOnVideoPause:function(e){},playerOnVideoEnded:function(e){this.currentTime(0);this.pause()},trackBuffered:function(){this.bufferedInterval=setInterval(this.triggerBufferedListeners.context(this),500)},stopTrackingBuffered:function(){clearInterval(this.bufferedInterval)},bufferedListeners:[],onBufferedUpdate:function(e){this.bufferedListeners.push(e)},triggerBufferedListeners:function(){this.isBufferFull();this.each(this.bufferedListeners,function(e){(e.context(this))()})},isBufferFull:function(){if(this.bufferedPercent()==1){this.stopTrackingBuffered()}},trackCurrentTime:function(){if(this.currentTimeInterval){clearInterval(this.currentTimeInterval)}this.currentTimeInterval=setInterval(this.triggerCurrentTimeListeners.context(this),100);this.trackingCurrentTime=true},stopTrackingCurrentTime:function(){clearInterval(this.currentTimeInterval);this.trackingCurrentTime=false},currentTimeListeners:[],triggerCurrentTimeListeners:function(e,f){this.each(this.currentTimeListeners,function(g){(g.context(this))(f||this.currentTime())})},resizeListeners:[],onResize:function(e){this.resizeListeners.push(e)},triggerResizeListeners:function(){this.each(this.resizeListeners,function(e){(e.context(this))()})}});b.player.newBehavior("mouseOverVideoReporter",function(e){_V_.addListener(e,"mousemove",this.mouseOverVideoReporterOnMouseMove.context(this));_V_.addListener(e,"mouseout",this.mouseOverVideoReporterOnMouseOut.context(this))},{mouseOverVideoReporterOnMouseMove:function(){this.showControlBars();clearInterval(this.mouseMoveTimeout);this.mouseMoveTimeout=setTimeout(this.hideControlBars.context(this),4000)},mouseOverVideoReporterOnMouseOut:function(f){var e=f.relatedTarget;while(e&&e!==this.box){e=e.parentNode}if(e!==this.box){this.hideControlBars()}}});b.player.newBehavior("box",function(e){this.positionBox();_V_.addClass(e,"vjs-paused");this.activateElement(e,"mouseOverVideoReporter");this.onPlay(this.boxOnVideoPlay);this.onPause(this.boxOnVideoPause)},{boxOnVideoPlay:function(){_V_.removeClass(this.box,"vjs-paused");_V_.addClass(this.box,"vjs-playing")},boxOnVideoPause:function(){_V_.removeClass(this.box,"vjs-playing");_V_.addClass(this.box,"vjs-paused")}});b.player.newBehavior("poster",function(e){this.activateElement(e,"mouseOverVideoReporter");this.activateElement(e,"playButton");this.onPlay(this.hidePoster);this.onEnded(this.showPoster);this.onResize(this.positionPoster)},{showPoster:function(){if(!this.poster){return}this.poster.style.display="block";this.positionPoster()},positionPoster:function(){if(!this.poster||this.poster.style.display=="none"){return}this.poster.style.height=this.height()+"px";this.poster.style.width=this.width()+"px"},hidePoster:function(){if(!this.poster){return}this.poster.style.display="none"},updatePosterSource:function(){if(!this.video.poster){var e=this.video.getElementsByTagName("img");if(e.length>0){this.video.poster=e[0].src}}}});b.player.newBehavior("controlBar",function(e){if(!this.controlBars){this.controlBars=[];this.onResize(this.positionControlBars)}this.controlBars.push(e);_V_.addListener(e,"mousemove",this.onControlBarsMouseMove.context(this));_V_.addListener(e,"mouseout",this.onControlBarsMouseOut.context(this))},{showControlBars:function(){if(!this.options.controlsAtStart&&!this.hasPlayed){return}this.each(this.controlBars,function(e){e.style.display="block"})},positionControlBars:function(){this.updatePlayProgressBars();this.updateLoadProgressBars()},hideControlBars:function(){if(this.options.controlsHiding&&!this.mouseIsOverControls){this.each(this.controlBars,function(e){e.style.display="none"})}},onControlBarsMouseMove:function(){this.mouseIsOverControls=true},onControlBarsMouseOut:function(e){this.mouseIsOverControls=false}});b.player.newBehavior("playToggle",function(e){if(!this.elements.playToggles){this.elements.playToggles=[];this.onPlay(this.playTogglesOnPlay);this.onPause(this.playTogglesOnPause)}this.elements.playToggles.push(e);_V_.addListener(e,"click",this.onPlayToggleClick.context(this))},{onPlayToggleClick:function(e){if(this.paused()){this.play()}else{this.pause()}},playTogglesOnPlay:function(e){this.each(this.elements.playToggles,function(f){_V_.removeClass(f,"vjs-paused");_V_.addClass(f,"vjs-playing")})},playTogglesOnPause:function(e){this.each(this.elements.playToggles,function(f){_V_.removeClass(f,"vjs-playing");_V_.addClass(f,"vjs-paused")})}});b.player.newBehavior("playButton",function(e){_V_.addListener(e,"click",this.onPlayButtonClick.context(this))},{onPlayButtonClick:function(e){this.play()}});b.player.newBehavior("pauseButton",function(e){_V_.addListener(e,"click",this.onPauseButtonClick.context(this))},{onPauseButtonClick:function(e){this.pause()}});b.player.newBehavior("playProgressBar",function(e){if(!this.playProgressBars){this.playProgressBars=[];this.onCurrentTimeUpdate(this.updatePlayProgressBars)}this.playProgressBars.push(e)},{updatePlayProgressBars:function(f){var e=(f!==d)?f/this.duration():this.currentTime()/this.duration();if(isNaN(e)){e=0}this.each(this.playProgressBars,function(g){if(g.style){g.style.width=_V_.round(e*100,2)+"%"}})}});b.player.newBehavior("loadProgressBar",function(e){if(!this.loadProgressBars){this.loadProgressBars=[]}this.loadProgressBars.push(e);this.onBufferedUpdate(this.updateLoadProgressBars)},{updateLoadProgressBars:function(){this.each(this.loadProgressBars,function(e){if(e.style){e.style.width=_V_.round(this.bufferedPercent()*100,2)+"%"}})}});b.player.newBehavior("currentTimeDisplay",function(e){if(!this.currentTimeDisplays){this.currentTimeDisplays=[];this.onCurrentTimeUpdate(this.updateCurrentTimeDisplays)}this.currentTimeDisplays.push(e)},{updateCurrentTimeDisplays:function(e){if(!this.currentTimeDisplays){return}var f=(e)?e:this.currentTime();this.each(this.currentTimeDisplays,function(g){g.innerHTML=_V_.formatTime(f)})}});b.player.newBehavior("durationDisplay",function(e){if(!this.durationDisplays){this.durationDisplays=[];this.onCurrentTimeUpdate(this.updateDurationDisplays)}this.durationDisplays.push(e)},{updateDurationDisplays:function(){if(!this.durationDisplays){return}this.each(this.durationDisplays,function(e){if(this.duration()){e.innerHTML=_V_.formatTime(this.duration())}})}});b.player.newBehavior("currentTimeScrubber",function(e){_V_.addListener(e,"mousedown",this.onCurrentTimeScrubberMouseDown.rEvtContext(this))},{onCurrentTimeScrubberMouseDown:function(e,f){e.preventDefault();this.currentScrubber=f;this.stopTrackingCurrentTime();this.videoWasPlaying=!this.paused();this.pause();_V_.blockTextSelection();this.setCurrentTimeWithScrubber(e);_V_.addListener(a,"mousemove",this.onCurrentTimeScrubberMouseMove.rEvtContext(this));_V_.addListener(a,"mouseup",this.onCurrentTimeScrubberMouseUp.rEvtContext(this))},onCurrentTimeScrubberMouseMove:function(e){this.setCurrentTimeWithScrubber(e)},onCurrentTimeScrubberMouseUp:function(e){_V_.unblockTextSelection();a.removeEventListener("mousemove",this.onCurrentTimeScrubberMouseMove,false);a.removeEventListener("mouseup",this.onCurrentTimeScrubberMouseUp,false);if(this.videoWasPlaying){this.play();this.trackCurrentTime()}},setCurrentTimeWithScrubber:function(f){var g=_V_.getRelativePosition(f.pageX,this.currentScrubber);var e=g*this.duration();this.triggerCurrentTimeListeners(0,e);if(e==this.duration()){e=e-0.1}this.currentTime(e)}});b.player.newBehavior("volumeDisplay",function(e){if(!this.volumeDisplays){this.volumeDisplays=[];this.onVolumeChange(this.updateVolumeDisplays)}this.volumeDisplays.push(e);this.updateVolumeDisplay(e)},{updateVolumeDisplays:function(){if(!this.volumeDisplays){return}this.each(this.volumeDisplays,function(e){this.updateVolumeDisplay(e)})},updateVolumeDisplay:function(f){var e=Math.ceil(this.volume()*6);this.each(f.children,function(h,g){if(g<e){_V_.addClass(h,"vjs-volume-level-on")}else{_V_.removeClass(h,"vjs-volume-level-on")}})}});b.player.newBehavior("volumeScrubber",function(e){_V_.addListener(e,"mousedown",this.onVolumeScrubberMouseDown.rEvtContext(this))},{onVolumeScrubberMouseDown:function(e,f){_V_.blockTextSelection();this.currentScrubber=f;this.setVolumeWithScrubber(e);_V_.addListener(a,"mousemove",this.onVolumeScrubberMouseMove.rEvtContext(this));_V_.addListener(a,"mouseup",this.onVolumeScrubberMouseUp.rEvtContext(this))},onVolumeScrubberMouseMove:function(e){this.setVolumeWithScrubber(e)},onVolumeScrubberMouseUp:function(e){this.setVolumeWithScrubber(e);_V_.unblockTextSelection();a.removeEventListener("mousemove",this.onVolumeScrubberMouseMove,false);a.removeEventListener("mouseup",this.onVolumeScrubberMouseUp,false)},setVolumeWithScrubber:function(e){var f=_V_.getRelativePosition(e.pageX,this.currentScrubber);this.volume(f)}});b.player.newBehavior("fullscreenToggle",function(e){_V_.addListener(e,"click",this.onFullscreenToggleClick.context(this))},{onFullscreenToggleClick:function(e){if(!this.videoIsFullScreen){this.enterFullScreen()}else{this.exitFullScreen()}},fullscreenOnWindowResize:function(e){this.positionControlBars()},fullscreenOnEscKey:function(e){if(e.keyCode==27){this.exitFullScreen()}}});b.player.newBehavior("bigPlayButton",function(e){if(!this.elements.bigPlayButtons){this.elements.bigPlayButtons=[];this.onPlay(this.bigPlayButtonsOnPlay);this.onEnded(this.bigPlayButtonsOnEnded)}this.elements.bigPlayButtons.push(e);this.activateElement(e,"playButton")},{bigPlayButtonsOnPlay:function(e){this.hideBigPlayButtons()},bigPlayButtonsOnEnded:function(e){this.showBigPlayButtons()},showBigPlayButtons:function(){this.each(this.elements.bigPlayButtons,function(e){e.style.display="block"})},hideBigPlayButtons:function(){this.each(this.elements.bigPlayButtons,function(e){e.style.display="none"})}});b.player.newBehavior("spinner",function(e){if(!this.spinners){this.spinners=[];_V_.addListener(this.video,"loadeddata",this.spinnersOnVideoLoadedData.context(this));_V_.addListener(this.video,"loadstart",this.spinnersOnVideoLoadStart.context(this));_V_.addListener(this.video,"seeking",this.spinnersOnVideoSeeking.context(this));_V_.addListener(this.video,"seeked",this.spinnersOnVideoSeeked.context(this));_V_.addListener(this.video,"canplay",this.spinnersOnVideoCanPlay.context(this));_V_.addListener(this.video,"canplaythrough",this.spinnersOnVideoCanPlayThrough.context(this));_V_.addListener(this.video,"waiting",this.spinnersOnVideoWaiting.context(this));_V_.addListener(this.video,"stalled",this.spinnersOnVideoStalled.context(this));_V_.addListener(this.video,"suspend",this.spinnersOnVideoSuspend.context(this));_V_.addListener(this.video,"playing",this.spinnersOnVideoPlaying.context(this));_V_.addListener(this.video,"timeupdate",this.spinnersOnVideoTimeUpdate.context(this))}this.spinners.push(e)},{showSpinners:function(){this.each(this.spinners,function(e){e.style.display="block"});clearInterval(this.spinnerInterval);this.spinnerInterval=setInterval(this.rotateSpinners.context(this),100)},hideSpinners:function(){this.each(this.spinners,function(e){e.style.display="none"});clearInterval(this.spinnerInterval)},spinnersRotated:0,rotateSpinners:function(){this.each(this.spinners,function(e){e.style.WebkitTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)";e.style.MozTransform="scale(0.5) rotate("+this.spinnersRotated+"deg)"});if(this.spinnersRotated==360){this.spinnersRotated=0}this.spinnersRotated+=45},spinnersOnVideoLoadedData:function(e){this.hideSpinners()},spinnersOnVideoLoadStart:function(e){this.showSpinners()},spinnersOnVideoSeeking:function(e){},spinnersOnVideoSeeked:function(e){},spinnersOnVideoCanPlay:function(e){},spinnersOnVideoCanPlayThrough:function(e){this.hideSpinners()},spinnersOnVideoWaiting:function(e){this.showSpinners()},spinnersOnVideoStalled:function(e){},spinnersOnVideoSuspend:function(e){},spinnersOnVideoPlaying:function(e){this.hideSpinners()},spinnersOnVideoTimeUpdate:function(e){if(this.spinner.style.display=="block"){this.hideSpinners()}}});b.player.newBehavior("subtitlesDisplay",function(e){if(!this.subtitleDisplays){this.subtitleDisplays=[];this.onCurrentTimeUpdate(this.subtitleDisplaysOnVideoTimeUpdate);this.onEnded(function(){this.lastSubtitleIndex=0}.context(this))}this.subtitleDisplays.push(e)},{subtitleDisplaysOnVideoTimeUpdate:function(h){if(this.subtitles){if(!this.currentSubtitle||this.currentSubtitle.start>=h||this.currentSubtitle.end<h){var g=false,e=(this.subtitles[this.lastSubtitleIndex].start>h),f=this.lastSubtitleIndex-(e)?1:0;while(true){if(e){if(f<0||this.subtitles[f].end<h){break}if(this.subtitles[f].start<h){g=f;break}f--}else{if(f>=this.subtitles.length||this.subtitles[f].start>h){break}if(this.subtitles[f].end>h){g=f;break}f++}}if(g!==false){this.currentSubtitle=this.subtitles[g];this.lastSubtitleIndex=g;this.updateSubtitleDisplays(this.currentSubtitle.text)}else{if(this.currentSubtitle){this.currentSubtitle=false;this.updateSubtitleDisplays("")}}}}},updateSubtitleDisplays:function(e){this.each(this.subtitleDisplays,function(f){f.innerHTML=e})}});b.extend({addClass:function(e,f){if((" "+e.className+" ").indexOf(" "+f+" ")==-1){e.className=e.className===""?f:e.className+" "+f}},removeClass:function(f,e){if(f.className.indexOf(e)==-1){return}var g=f.className.split(/\s+/);g.splice(g.lastIndexOf(e),1);f.className=g.join(" ")},createElement:function(f,e){return this.merge(a.createElement(f),e)},blockTextSelection:function(){a.body.focus();a.onselectstart=function(){return false}},unblockTextSelection:function(){a.onselectstart=function(){return true}},formatTime:function(f){var g=Math.round(f);var e=Math.floor(g/60);e=(e>=10)?e:"0"+e;g=Math.floor(g%60);g=(g>=10)?g:"0"+g;return e+":"+g},getRelativePosition:function(f,e){return Math.max(0,Math.min(1,(f-this.findPosX(e))/e.offsetWidth))},findPosX:function(e){var f=e.offsetLeft;while(e=e.offsetParent){f+=e.offsetLeft}return f},getComputedStyleValue:function(e,f){return c.getComputedStyle(e,null).getPropertyValue(f)},round:function(e,f){if(!f){f=0}return Math.round(e*Math.pow(10,f))/Math.pow(10,f)},addListener:function(e,g,f){if(e.addEventListener){e.addEventListener(g,f,false)}else{if(e.attachEvent){e.attachEvent("on"+g,f)}}},removeListener:function(e,g,f){if(e.removeEventListener){e.removeEventListener(g,f,false)}else{if(e.attachEvent){e.detachEvent("on"+g,f)}}},get:function(e,g){if(typeof XMLHttpRequest=="undefined"){XMLHttpRequest=function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(j){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(i){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(h){}throw new Error("This browser does not support XMLHttpRequest.")}}var f=new XMLHttpRequest();f.open("GET",e);f.onreadystatechange=function(){if(f.readyState==4&&f.status==200){g(f.responseText)}}.context(this);f.send()},trim:function(e){return e.toString().replace(/^\s+/,"").replace(/\s+$/,"")},bindDOMReady:function(){if(a.readyState==="complete"){return b.onDOMReady()}if(a.addEventListener){a.addEventListener("DOMContentLoaded",b.DOMContentLoaded,false);c.addEventListener("load",b.onDOMReady,false)}else{if(a.attachEvent){a.attachEvent("onreadystatechange",b.DOMContentLoaded);c.attachEvent("onload",b.onDOMReady)}}},DOMContentLoaded:function(){if(a.addEventListener){a.removeEventListener("DOMContentLoaded",b.DOMContentLoaded,false);b.onDOMReady()}else{if(a.attachEvent){if(a.readyState==="complete"){a.detachEvent("onreadystatechange",b.DOMContentLoaded);b.onDOMReady()}}}},DOMReadyList:[],addToDOMReady:function(e){if(b.DOMIsReady){e.call(a)}else{b.DOMReadyList.push(e)}},DOMIsReady:false,onDOMReady:function(){if(b.DOMIsReady){return}if(!a.body){return setTimeout(b.onDOMReady,13)}b.DOMIsReady=true;if(b.DOMReadyList){for(var e=0;e<b.DOMReadyList.length;e++){b.DOMReadyList[e].call(a)}b.DOMReadyList=null}}});b.bindDOMReady();Function.prototype.context=function(f){var g=this,e=function(){return g.apply(f,arguments)};return e};Function.prototype.evtContext=function(f){var g=this,e=function(){var h=this;return g.call(f,arguments[0],h)};return e};Function.prototype.rEvtContext=function(g,e){if(this.hasContext===true){return this}if(!e){e=g}for(var f in e){if(e[f]==this){e[f]=this.evtContext(g);e[f].hasContext=true;return e[f]}}return this.evtContext(g)};if(c.jQuery){(function(e){e.fn.VideoJS=function(f){this.each(function(){b.setup(this,f)});return this};e.fn.player=function(){return this[0].player}})(jQuery)}c.VideoJS=c._V_=b})(window);