document.write('<style>.jsok{display:inherit;}</style>');function load(){document.getElementById('videoControls').innerHTML='<div id=\"playPause\"><div class=\"playButton\" id=\"playButton\"></div></div><div id=\"bar\"><div class=\"statusBar\"><img src=\"unbuffered.png\" id=\"unbuffered\" class=\"unbuffered\"/><img src=\"buffer.png\" id=\"barBuffer\" class=\"barBuffer\"/><img src=\"leftround.png\" class=\"leftRound\"/><img src=\"rightround.png\" class=\"rightRound\"/></div><div id=\"seekBar\" class=\"slider\"><div class=\"knob\" id=\"knob\"></div></div></div><div id=\"volume\"><div id=\"volBar\" class=\"slider2\"><div class=\"knobVol\" id=\"knobVol\"></div></div></div><div id=\"current\">00:00 /&nbsp;</div><div id=\"total\">00:00</div>';var pausedTrack=1;var buffering=1;var bufferInterval=2000;var mouseDown=0;var tracking=0;var vidPos=0;var currentVol=1;var muted=0;var el=$('seekBar');var el2=$('volBar');var player=$('videoPlayer');var controller=$('videoControls');var playbutton=$('playPause');var seekbar=$('bar');var scrubBar=new Slider(el,el.getElement('.knob'),{steps:100,range:[0],onChange:function(value){vidPos=this.step;setPercentage((value));}});var volBar=new Slider(el2,el2.getElement('.knobVol'),{steps:100,range:[0],mode:'vertical',onChange:function(value){player.volume=(1-(this.step/100));if(value>=0){$('volume').style.backgroundPosition="0px -75px";}
if(value>25){$('volume').style.backgroundPosition="0px -50px";}
if(value>75){$('volume').style.backgroundPosition="0px -25px";}
if(value==100){$('volume').style.backgroundPosition="0px 0px";}}});function setPercentage(percentage){var addition=0;if(percentage<100){addition=7;}
if(percentage<75){addition=0;}
if(percentage<25){addition=-7;}
newWidth=(350-(percentage*3.5)+addition)+'px';$('unbuffered').style.width=newWidth;}
function setPercentage2(percentage){if(percentage==100){buffering=0;bufferInterval=3600000;}
newWidth=((percentage*3.5)+'px');$('barBuffer').style.width=newWidth;}
function setOpacity(elid,value){elid.style.filter="alpha(opacity="+value+")";}
function setPlayerTime(timeIn){timeIn=timeIn%3600;var mins=Math.floor(timeIn/60);if(mins.toString().length<2){mins="0"+mins;}
var secs=Math.floor(timeIn%60);if(secs.toString().length<2){secs="0"+secs;}
return mins+":"+secs;}
function extraControl(){mouseDown=0;tracking=0;player.currentTime=(vidPos*(player.duration/100));$('current').innerHTML=setPlayerTime(vidPos*(player.duration/100))+" /&nbsp;";if(pausedTrack){}
else{player.play();}}
setPercentage(0);setPercentage2(0);setOpacity(controller,1);el2.get('tween',{property:'opacity',duration:'instant'}).start(0);player.onmouseover=function(){controller.get('tween',{property:'opacity',duration:'normal'}).start(1);}
player.onmouseout=function(){if(!pausedTrack){controller.get('tween',{property:'opacity',duration:'normal'}).start(.01);}}
controller.onmouseover=function(){controller.get('tween',{property:'opacity',duration:'normal'}).start(1);}
controller.onmouseout=function(){if(!pausedTrack){controller.get('tween',{property:'opacity',duration:'normal'}).start(.01);}}
$('volume').onmouseover=function(){el2.get('tween',{property:'opacity',duration:'short'}).start(1);}
$('volume').onmouseout=function(){el2.get('tween',{property:'opacity',duration:'normal'}).start(0);}
$('knob').onmouseup=function(){mouseDown=0;}
seekbar.onmousedown=function(){mouseDown=1;tracking=1;player.pause();player.currentTime=(vidPos*(player.duration/100));}
seekbar.onmouseup=extraControl;seekbar.onmousemove=function(){if(tracking){player.currentTime=(vidPos*(player.duration/100));}}
player.onmouseup=function(){if(tracking){extraControl();}}
player.onmousemove=function(){if(tracking){player.currentTime=(vidPos*(player.duration/100));}}
controller.onmouseup=function(){if(tracking){extraControl();}}
controller.onmousemove=function(){if(tracking){player.currentTime=(vidPos*(player.duration/100));}}
player.addEventListener('timeupdate',function(){$('total').innerHTML=setPlayerTime(player.duration);$('current').innerHTML=setPlayerTime(player.currentTime)+" /&nbsp;";if(!mouseDown){scrubBar.set(((player.currentTime/player.duration)*100));}
setPercentage2((player.buffered.end()/player.duration)*100);},false);player.addEventListener('play',function(){pausedTrack=0;playbutton.innerHTML='<div class="pauseButton"></div>';},false);player.addEventListener('pause',function(){if(pausedTrack){playbutton.innerHTML='<div class="playButton"></div>';}},false);player.addEventListener('ended',function(){pausedTrack=1;player.currentTime=0;player.pause();playbutton.innerHTML='<div class="playButton"></div>';},false);playbutton.addEventListener('click',function(){if(player.paused){player.play();pausedTrack=0;}
else{if(player.ended){player.currentTime=0;player.play();player.innerHTML='<div class="pauseButton"></div>';}
else{pausedTrack=1;player.pause();}}},false);setInterval(function(){if(buffering&&pausedTrack){setPercentage2(((player.buffered.end()/player.duration)*100));}},bufferInterval);}