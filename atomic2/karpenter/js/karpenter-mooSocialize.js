/* mooSocialize - bookmark tool ©2008 artViper designstudio - all rights reserved */
/* information about this tool and other widgets: info@artviper.net  */
/* the header 'artViper's social bookmark widget has not to be disposed */
/* same goes for the link to this tool */

window.addEvent('domready',function(){

	$$('.socializer').addEvent('click',function(e){
		if(document.getElementById('containerx') == null){
	
		// define container pos
		var top 	= this.getCoordinates().top.toInt();
		var height	= this.getCoordinates().height.toInt();
		var left	= this.getCoordinates().left.toInt();
		var pos 	= top+height+20;
		var div 	= new Element('div');
		div.setStyle('top',pos+20);
		div.setStyle('left',left);
		div.addClass('soc_container');
		div.setAttribute('id','containerx');
		div.injectInside(document.body);
				
		$(div).addEvent('blur',function(){
			this.dispose();
		})
		
		// close button
		var closeme = new Element('img');
		closeme.src="img/mooSocialize/close.gif";
		closeme.setAttribute('id','close');
		closeme.injectInside(div);
		closeme.addEvent('click',function(){
			div.dispose();
		})
		
		var title= escape(this.title);
		var url  = escape(document.location.href);
	
		var name = new Element('h2');
		name.innerHTML = 'artViper\'s social bookmark widget <a href="http://www.artviper.net/mooSocialize.php"> go and get it</a>';
		name.injectInside(div);
		
		var left = new Element('div');
		left.addClass('soc_left');
		left.injectInside(div);
		
		// blinklist.com
		var img = new Element('img');
		img.alt = 'send to blinklist';
		img.src = 'img/mooSocialize/blinklist.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://blinklist.com/index.php?Action=Blink/addblink.php&Name='+title+'&Url='+url;
		myLink.title = 'send to blinklist';
		myLink.innerHTML = 'blinkllist';
		myLink.injectInside(left);
		
		//bookmark.it
		var img = new Element('img');
		img.alt = 'send to bookmark.it';
		img.src = 'img/mooSocialize/bookmark.gif';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.bookmark.it/bookmark.php?url='+url;
		myLink.title = 'send to bookmark.it';
		myLink.innerHTML = 'bookmark.it';
		myLink.injectInside(left);
		
		// del.icio.us
		var img = new Element('img');
		img.alt = 'send to del.icio.us';
		img.src = 'img/mooSocialize/delicious.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://del.icio.us/post?url='+url+'&title='+title;
		myLink.title = 'send to del.icio.us';
		myLink.innerHTML = 'del.icio.us';
		myLink.injectInside(left);
		
		// digg.com
		var img = new Element('img');
		img.alt = 'send to digg';
		img.src = 'img/mooSocialize/digg.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://digg.com/submit?phase=2&url='+url+'&title='+title;
		myLink.title = 'send to del.icio.us';
		myLink.innerHTML = 'digg';
		myLink.injectInside(left);
		
		// furl.net
		var img = new Element('img');
		img.alt = 'send to furl';
		img.src = 'img/mooSocialize/furl.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://furl.net/storeIt.jsp?t='+title+'&u='+url;
		myLink.title = 'send to furl';
		myLink.innerHTML = 'furl';
		myLink.injectInside(left);
				
		// reddit.com
		var img = new Element('img');
		img.alt = 'send to reddit.com';
		img.src = 'img/mooSocialize/reddit.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://reddit.com/submit?url='+url+'&title='+title;
		myLink.title = 'send to reddit';
		myLink.innerHTML = 'reddit';
		myLink.injectInside(left);
		
		// feedmelinks.com
		var img = new Element('img');
		img.alt = 'send to feedmelinks.com';
		img.src = 'img/mooSocialize/feedmelinks.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://feedmelinks.com/categorize?from=toolbar&op=submit&name='+title+'&url='+url
		myLink.title = 'send to feedmelinks';
		myLink.innerHTML = 'feedmelinks';
		myLink.injectInside(left);
		
		// technorati.com
		var img = new Element('img');
		img.alt = 'send to technorati.com';
		img.src = 'img/mooSocialize/technorati.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.technorati.com/faves?add='+url;
		myLink.title = 'send to technorati';
		myLink.innerHTML = 'technorati';
		myLink.injectInside(left);
		
		// yahoo.com
		var img = new Element('img');
		img.alt = 'send to yahoo.com';
		img.src = 'img/mooSocialize/im_yahoo.gif';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://myweb2.search.yahoo.com/myresults/bookmarklet?u='+url+'&t='+title
		myLink.title = 'send to yahoo';
		myLink.innerHTML = 'yahoo';
		myLink.injectInside(left);
		
		// tipd.com
		var img = new Element('img');
		img.alt = 'send to tipd.com';
		img.src = 'img/mooSocialize/tipd.gif';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://tipd.com/submit.php?url='+url;
		myLink.title = 'send to tipd';
		myLink.innerHTML = 'tipd';
		myLink.injectInside(left);
		
		// netvouz.com
		var img = new Element('img');
		img.alt = 'send to netvouz.com';
		img.src = 'img/mooSocialize/netvouz.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://netvouz.com/action/submitBookmark?url='+url+'&title='+title+'&popup=no'
		myLink.title = 'send to netvouz';
		myLink.innerHTML = 'netvouz';
		myLink.injectInside(left);
		
		// rojo.com
		var img = new Element('img');
		img.alt = 'send to rojo.com';
		img.src = 'img/mooSocialize/rojo.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.rojo.com/add-subscription/?resource='+url;
		myLink.title = 'send to rojo';
		myLink.innerHTML = 'rojo';
		myLink.injectInside(left);
		
		// shadows.com
		var img = new Element('img');
		img.alt = 'send to shadows.com';
		img.src = 'img/mooSocialize/shadows.png';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.shadows.com/shadows.aspx?url='+url;
		myLink.title = 'send to shadows';
		myLink.innerHTML = 'shadows';
		myLink.injectInside(left);
		
		// oneview.de
		var img = new Element('img');
		img.alt = 'send to oneview.de';
		img.src  = 'img/mooSocialize/oneview.gif';
		img.injectInside(left);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.oneview.de/quickadd/neu/addBookmark.jsf?URL=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title);
		myLink.title = 'send to oneview';
		myLink.innerHTML = 'oneview';
		myLink.injectInside(left);
		
		// put in right side container	
		var right = new Element('div');
		right.addClass('soc_left');
		right.injectInside(div);
		
		// dzone.com
		var img = new Element('img');
		img.alt = 'send to google';
		img.src = 'img/mooSocialize/dzone.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.dzone.com/links/add.html?description='+title +'&url='+ url + '&title='+ title;
		myLink.title = 'send to dzone';
		myLink.innerHTML = 'dzone';
		myLink.injectInside(right);
		
		// newsvine.com
		var img = new Element('img');
		img.alt = 'send to newsvine.com';
		img.src = 'img/mooSocialize/newsvine.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.newsvine.com/_wine/save?u='+url+'&h='+title;
		myLink.title = 'send to newsvine';
		myLink.innerHTML = 'newsvine';
		myLink.injectInside(right);
		
		// ma.gnolia.com
		var img = new Element('img');
		img.alt = 'send to ma.gnolia.com';
		img.src = 'img/mooSocialize/magnolia.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://ma.gnolia.com/bookmarklet/add?url='+url+'&title='+title+'&description=';
		myLink.title = 'send to ma.gnolia.com';
		myLink.innerHTML = 'ma.gnolia';
		myLink.injectInside(right);
		
		// stumpleupon.com
		var img = new Element('img');
		img.alt = 'send to stumbleupon';
		img.src = 'img/mooSocialize/stumbleupon.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.stumbleupon.com/refer.php?url='+url+'&title='+title;
		myLink.title = 'send to stumbleupon';
		myLink.innerHTML = 'stumbleupon';
		myLink.injectInside(right);
		
		// google.com
		var img = new Element('img');
		img.alt = 'send to google';
		img.src = 'img/mooSocialize/google.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+url+'&title='+title;
		myLink.title = 'send to google';
		myLink.innerHTML = 'google';
		myLink.injectInside(right);
		
		// squidoo.com
		var img = new Element('img');
		img.alt = 'send to squidoo.com';
		img.src = 'img/mooSocialize/squidoo.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.squidoo.com/lensmaster/bookmark?'+url
		myLink.title = 'send to squidoo';
		myLink.innerHTML = 'squidoo';
		myLink.injectInside(right);
				
		// spurl.net
		var img = new Element('img');
		img.alt = 'send to spurl.net';
		img.src = 'img/mooSocialize/spurl.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.spurl.net/spurl.php?url='+url+'&title='+title+'&blocked=';
		myLink.title = 'send to spurl';
		myLink.innerHTML = 'spurl';
		myLink.injectInside(right);
		
		// blinkbits.com
		var img = new Element('img');
		img.alt = 'send to blinkbits.com';
		img.src = 'img/mooSocialize/blinkbits.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://blinkbits.com/bookmarklets/save.php?v=1&source_url='+url+'&title='+title;
		myLink.title = 'send to blinkbits';
		myLink.innerHTML = 'blinkbits';
		myLink.injectInside(right);
		
		// blogmarks.net
		var img = new Element('img');
		img.alt = 'send to blogmarks.net';
		img.src = 'img/mooSocialize/bmarks.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://blogmarks.net/my/new.php?mini=1&simple=1&url='+url+'&title='+title;
		myLink.title = 'send to blogmarks';
		myLink.innerHTML = 'blogmarks';
		myLink.injectInside(right);
		
		// bloglines.com
		var img = new Element('img');
		img.alt = 'send to bloglines.com';
		img.src = 'img/mooSocialize/bloglines.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.bloglines.com/sub/'+url;
		myLink.title = 'send to bloglines';
		myLink.innerHTML = 'bloglines';
		myLink.injectInside(right);
		
		// co.mments.com
		var img = new Element('img');
		img.alt = 'send to co.mments.com';
		img.src = 'img/mooSocialize/comments.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://co.mments.com/track?url='+url+'&title='+title;
		myLink.title = 'send to co.mments';
		myLink.innerHTML = 'co.mments';
		myLink.injectInside(right);

		// scuttle.org
		var img = new Element('img');
		img.alt = 'send to scuttle.org';
		img.src = 'img/mooSocialize/scuttle.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://www.scuttle.org/bookmarks.php/maxpower?action=add&address='+url+'&title='+title+'&description=';
		myLink.title = 'send to scuttle';
		myLink.innerHTML = 'scuttle';
		myLink.injectInside(right);
		
		// ask.com
		var img = new Element('img');
		img.alt = 'send to ask.com';
		img.src = 'img/mooSocialize/ask.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://mystuff.ask.com/mysearch/QuickWebSave?v=1.2&t=webpages&title='+title+'&url='+url;
		myLink.title = 'send to ask';
		myLink.innerHTML = 'ask';
		myLink.injectInside(right);
		
		// ask.com
		var img = new Element('img');
		img.alt = 'send to slashdot.org';
		img.src = 'img/mooSocialize/slashdot.png';
		img.injectInside(right);
		
		var myLink = new Element('a');
		myLink.href  = 'http://slashdot.org/bookmark.pl?title='+title+'&url='+url;
		myLink.title = 'send to slashdot';
		myLink.innerHTML = 'slashdot';
		myLink.injectInside(right);
		
		// add send to friend		
		var con = new Element('div');
		con.addClass('soc_send_friend');
		con.injectInside(div);
		
		var ptag = new Element('p');
		ptag.innerHTML = 'Send this article to a friend';
		ptag.injectInside(con);
		ptag.setStyle('color','#000');
		ptag.setAttribute('id','returnme');
		
		var form = new Element('form');
		form.setAttribute('name','friendform');
		form.setAttribute('id','friendform');
				
		var inp = new Element('input');
		inp.setAttribute('type','text');
		inp.setAttribute('id','email_friend');
		
		var sendme = new Element('input');
		sendme.setAttribute('type','submit');
		sendme.setAttribute('value',"send to a friend");
		
		form.injectInside(con);
		inp.injectInside(form);		
		sendme.injectAfter(inp);
		
		$('friendform').addEvent('submit',function(el){
				el = new Event(el).stop();
				$(con).addClass('wait');
				var input = inp.value;
				new Request({url: 'send_to_friend.php?email='+input+'&title='+title+'&url='+url,  method:'get', update:$(con), onComplete:function(res){
						$('returnme').set('html',res);
						$(con).removeClass('wait');
				}}).send();
				
				return false;
		})
		
		// fade in
		var eff = new Fx.Morph(div, { duration: 500, wait:true, transition:Fx.Transitions.linear }).chain(function(){
																											 $$('.soc_left').setStyle('visibility','visible');	});
														
		
		eff.start({
				  	'opacity':[0,1]
				  });
		
				
		
	//	div.effect('opacity',{duration:500, wait:true, transition:Fx.Transitions.linear }).chain(function(){
			
	//	}).start(0,1);	
		
		
		
		// open new window via ajax
		$$('.soc_left a').addEvent('click',function(e){
			e = new Event(e).stop();
			
			var address 	= this.href;
			var scTop 		= window.getScrollTop().toInt();
			
			// is it a crap IE ?
			nav = navigator.appName;
	
			if(nav.indexOf('Microsoft') != -1){
				if(navigator.appVersion.indexOf('MSIE 6') != -1 || navigator.appVersion.indexOf('MSIE 7') != -1){
				var	width = document.body.clientWidth;
				}									
				
			}else{
				var	width	= window.innerWidth.toInt();
			}
			
			var left		= (width - 780) /2;
			var wind 		= new Element('div', {
				styles: {
						'top':scTop+20,
						'opacity':'1',
						'width':'780px',
						'left':left + 'px',
						'position':'absolute'						
					    }
				})
				
			wind.addClass('open_window');		
			
			var closeX = new Element('img');
			closeX.src = "img/mooSocialize/close.gif";
			closeX.addClass('close');
			closeX.addEvent('click',function(){
				wind.dispose();
			})
			
			closeX.injectInside(wind);
			var c	 = new Element('iframe');			
			c.src	 = address;	
			c.setStyle('width','780px');
			c.setStyle('height','500px');
			c.setStyle('border','none');
			c.setStyle('margin','0 auto');
			c.injectInside(wind);
			wind.injectInside(document.body);
		})
	  }else{
		var eff = new Fx.Morph('containerx', { duration: 500, wait:true, transition:Fx.Transitions.linear }).chain(function(){
				$('containerx').dispose();
																															});														
		
		eff.start({
				  	'opacity':[0,1]
				  });
		
		
		}
	})
})