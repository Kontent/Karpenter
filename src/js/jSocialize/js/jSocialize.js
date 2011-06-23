/* jSocialize - bookmark tool ©2008 artViper designstudio - all rights reserved */
/* information about this tool and other widgets: info@artviper.net  */
/* the header 'artViper's social bookmark widget has not to be removed */
/* same goes for the link to this tool */
/* add these lines to your document, to make this script work: */
/* <script language="javascript" type="text/ecmascript" src="js/jquery.js"></script>
<script language="javascript" type="text/ecmascript" src="js/jquery.dimensions.js"></script>
<script language="javascript" type="text/ecmascript" src="js/jSocialize.js"></script>
*/

 $(document).ready(function() {
		$(".socializer").click(function (e) { 
			if(document.getElementById('containerx') == null){							 
				
				var top 	= $(".socializer").offset().top;
				var height	= $(".socializer").height();
				var left	= $(".socializer").offset().left;
				var pos 	= top+height+20;
				
				var div = document.createElement("div");
				$(div).hide();
				$(div).addClass("soc_container");
				$(document.body).prepend(div);
					
				var closeme = document.createElement('img');
				
				$(closeme).attr({ id: "close", src: "images/close.gif"});
				$(closeme).addClass('close');
				$(div).append(closeme);
				
				$(closeme).click(function(){
					$(div).remove();
				})
				
				var title= $(".socializer").attr("title");
				var url  = document.location.href;  //$(".socializer").attr("alt");  --> use this if you wish to define an url in the alt tag 
				
				var name = document.createElement('h2');
				$(name).html('artViper\'s social bookmark widget <a href="http://www.artviper.net/mooSocialize.php"> go and get it</a>');
				$(div).prepend(name);
				
				var left = document.createElement('div');
				$(left).addClass('soc_left');
				$(div).append(left);
				
				//bookmark.it
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to bookmark.it', src: "images/bookmark.gif"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs = "http://www.bookmark.it/bookmark.php?url=" + url;
				$(myLink).attr({ href: hrefs , title: 'send to bookmark.it' });
				$(myLink).html("bookmark.it");
				$(left).append(myLink);
				
				// del.icio.us
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to delicious', src: "images/delicious.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs = "http://del.icio.us/post?url=" + url;
				$(myLink).attr({ href: hrefs , title: 'send to del.icio.us' });
				$(myLink).html("del.icio.us");
				$(left).append(myLink);
				
				// digg
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to digg', src: "images/digg.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs = 'http://digg.com/submit?phase=2&url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to digg' });
				$(myLink).html("digg");
				$(left).append(myLink);
				
				// furl
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to digg', src: "images/furl.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs = 'http://furl.net/storeIt.jsp?t='+title+'&u='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to furl' });
				$(myLink).html("furl");
				$(left).append(myLink);
				
				// blinklist
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to blinklist', src: "images/blinklist.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs = 'http://blinklist.com/index.php?Action=Blink/addblink.php&Name='+title+'&Url='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to blinklist' });
				$(myLink).html("blinklist");
				$(left).append(myLink);
				
				// reddit
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to reddit', src: "images/reddit.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://reddit.com/submit?url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to reddit' });
				$(myLink).html("reddit");
				$(left).append(myLink);
				
				// feedmelinks
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to feedmelinks', src: "images/feedmelinks.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://feedmelinks.com/categorize?from=toolbar&op=submit&name='+title+'&url='+encodeURIComponent(url)
				$(myLink).attr({ href: hrefs , title: 'send to feedmelinks' });
				$(myLink).html("feedmelinks");
				$(left).append(myLink);
				
				// technorati
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to technorati', src: "images/technorati.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.technorati.com/faves?add='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to technorati' });
				$(myLink).html("technorati");
				$(left).append(myLink);
				
				// yahoo
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to yahoo', src: "images/im_yahoo.gif"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://myweb2.search.yahoo.com/myresults/bookmarklet?u='+encodeURIComponent(url)+'&t='+title;
				$(myLink).attr({ href: hrefs , title: 'send to yahoo' });
				$(myLink).html("yahoo");
				$(left).append(myLink);
				
				// rawsugar
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to rawsugar', src: "images/rawsugar.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.rawsugar.com/tagger/?turl='+encodeURIComponent(url)+'&tttl='+title;
				$(myLink).attr({ href: hrefs , title: 'send to rawsugar' });
				$(myLink).html("rawsugar");
				$(left).append(myLink);
				
				// netvous
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to netvouz', src: "images/netvouz.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://netvouz.com/action/submitBookmark?url='+encodeURIComponent(url)+'&title='+title+'&popup=no';
				$(myLink).attr({ href: hrefs , title: 'send to netvouz' });
				$(myLink).html("netvouz");
				$(left).append(myLink);
				
				// rojo
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to rojo', src: "images/rojo.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.rojo.com/add-subscription/?resource='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to rojo' });
				$(myLink).html("rojo");
				$(left).append(myLink);
				
				// shadows
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to shadows', src: "images/shadows.png"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.shadows.com/shadows.aspx?url='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to shadows' });
				$(myLink).html("shadows");
				$(left).append(myLink);
				
				// shadows
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to gabbr', src: "images/gabbr.gif"  });
				$(left).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.gabbr.com/submit/?bookurl='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to gabbr' });
				$(myLink).html("gabbr");
				$(left).append(myLink);
				
				// put in right container
				var right = document.createElement('div');
				$(right).addClass('soc_left');
				$(div).append(right);
				
				//dzone
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to dzone', src: "images/dzone.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.dzone.com/links/add.html?description='+title +'&url='+ url;
				$(myLink).attr({ href: hrefs , title: 'send to dzone' });
				$(myLink).html("dzone");
				$(right).append(myLink);
				
				//newsvine
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to newsvine', src: "images/newsvine.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.newsvine.com/_wine/save?u='+encodeURIComponent(url)+'&h='+title;
				$(myLink).attr({ href: hrefs , title: 'send to newsvine' });
				$(myLink).html("newsvine");
				$(right).append(myLink);
				
				//ma.gnolia.com
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to ma.gnolia.com', src: "images/magnolia.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://ma.gnolia.com/bookmarklet/add?url='+encodeURIComponent(url)+'&title='+title+'&description=';
				$(myLink).attr({ href: hrefs , title: 'send to ma.gnolia.com' });
				$(myLink).html("ma.gnolia");
				$(right).append(myLink);
				
				//stumbleupon
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to ma.gnolia.com', src: "images/stumbleupon.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.stumbleupon.com/refer.php?url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to stumbleupon' });
				$(myLink).html("stumbleupon");
				$(right).append(myLink);
				
				//google
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to google', src: "images/google.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to google' });
				$(myLink).html("google");
				$(right).append(myLink);
				
				//squidoo
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to squidoo', src: "images/squidoo.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.squidoo.com/lensmaster/bookmark?'+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to squidoo' });
				$(myLink).html("squidoo");
				$(right).append(myLink);
				
				// spurl.net
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to spurl', src: "images/spurl.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.spurl.net/spurl.php?url='+encodeURIComponent(url)+'&title='+title+'&blocked=';
				$(myLink).attr({ href: hrefs , title: 'send to spurl' });
				$(myLink).html("spurl");
				$(right).append(myLink);
				
				// blinkbits
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to blinkbits', src: "images/blinkbits.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://blinkbits.com/bookmarklets/save.php?v=1&source_url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to blinkbits' });
				$(myLink).html("blinkbits");
				$(right).append(myLink);
				
				// blogmarks
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to blogmarks', src: "images/bmarks.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://blogmarks.net/my/new.php?mini=1&simple=1&url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to blogmarks' });
				$(myLink).html("blogmarks");
				$(right).append(myLink);
				
				// bloglines
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to bloglines', src: "images/bloglines.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.bloglines.com/sub/'+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to bloglines' });
				$(myLink).html("bloglines");
				$(right).append(myLink);
				
				// co.mments
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to co.mments', src: "images/comments.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://co.mments.com/track?url='+encodeURIComponent(url)+'&title='+title;
				$(myLink).attr({ href: hrefs , title: 'send to co.mments' });
				$(myLink).html("co.mments");
				$(right).append(myLink);
				
				// scuttle
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to scuttle', src: "images/scuttle.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://www.scuttle.org/bookmarks.php/maxpower?action=add&address='+encodeURIComponent(url)+'&title='+title+'&description=';
				$(myLink).attr({ href: hrefs , title: 'send to scuttle' });
				$(myLink).html("scuttle");
				$(right).append(myLink);
				
				// ask
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to ask.com', src: "images/ask.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://mystuff.ask.com/mysearch/QuickWebSave?v=1.2&t=webpages&title='+title+'&url='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to ask' });
				$(myLink).html("ask");
				$(right).append(myLink);
								
				// slashdot
				var img = document.createElement('img');
				$(img).attr({ alt: 'send to slashdot', src: "images/slashdot.png"  });
				$(right).append(img);
				
				var myLink = document.createElement('a');
				var hrefs =  'http://slashdot.org/bookmark.pl?title='+title+'&url='+encodeURIComponent(url);
				$(myLink).attr({ href: hrefs , title: 'send to slashdot' });
				$(myLink).html("slashdot");
				$(right).append(myLink);
				
//				$(".soc_container").css("visibility","visible");
				$(".soc_container").fadeIn(500);
					
				// ajax window	
				$('.soc_left a').bind("click",function(e){
					e.preventDefault();
					var address 	= this;
					var scTop 		= $(window).scrollTop();
                    var width		= 0;									
					
					if(jQuery.browser.msie){
						width = document.body.clientWidth;
					}else{
						width	= window.innerWidth;
					}
				
					var left		= (width - 980) /2;
					var wind 		= document.createElement("div");
			        var cssObj;
					
					if(jQuery.browser.msie){
						 cssObj = {
							top:0,
							width:'980px',
							position:'absolute',
							left: 0,
							border: '1px solid #ccc',
							visibility:'visible'
			
						 }
					}else{
						 cssObj = {
							top:scTop+20,
							width:'980px',
							position:'absolute',
							left: left + 'px'
			
						 }
					}
						
					$(wind).css(cssObj);
					$(wind).addClass('open_window');		
				
					var closeX = document.createElement('img');
					$(closeX).attr({ src:"images/close.gif", position:'absolute',top:"0",right:"0" });
					$(closeX).addClass('close');
					
					$(closeX).click(function(){
						$(wind).remove();											
					})
					
					$(wind).prepend(closeX);
					$(div).append(wind);
					
					var cssObj2 = {
        				width:'980px',
						height:'500px',
						border: 'none',
						position:'absolute',
						overflow:'auto',
						display:'block'
     				 }
					
					var c	 = document.createElement('iframe');		
					$(c).attr("src",this);
					$(c).css(cssObj2);
					$(wind).prepend(c);
					
	       })				
		}			
	})		
 })