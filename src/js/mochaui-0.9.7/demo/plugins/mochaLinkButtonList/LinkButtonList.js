/*

Script: LinkButtonList.js
	

Copyright:
	Copyright (c) 2010 Chris Doty, <http://polaropposite.com/>.

License:
	MIT-style license.

*/

MUI.files[MUI.path.plugins + 'mochaLinkButtonList/LinkButtonList.js'] = 'loaded';

MUI.LinkButtonList = new Class({
Implements: [Events, Options],
options: {
     id: null,
     cssClass: 'formIndexer',
     List: null,
     selected: '',
     onClick: $empty
},

initialize: function(options)
{   
    this.setOptions(options);
    if(options) { this.fromJSON(options); }  
},

toDOM: function() {
    var o=this;
    var list=o.options.List;
    list=list.replace(new RegExp(/,,/g),'%%%%');
    list=list.split(',');
    
    var div=new Element('div',{'id':o.options.id});
    div.set('class',o.options.cssClass);
    o.DOM = div;

    var ul=new Element('ul',{'id':o.options.id+'_ul'});
    div.appendChild(ul);    
    
    var selected=o.options.selected;
    list.each(function(itm) {
        itm=itm.replace(new RegExp(/\%\%\%\%/g),',');
        var li=new Element('li',{'text':itm});
        li.addEvent('click',function(e) { o.clicked(e); });
        if(itm==selected) li.set('class','C');
        ul.appendChild(li);
    });
    
    return div;
},
           
clicked: function(e)
{
    e.stopPropagation();
    var o=this;
    var t=$(e.target).textContent;
    if(!t) t=$(e.target).innerText;
    if($type(o.options.ArgScript)=='function') t+='#'+o.options.ArgScript(o);
    o.fireEvent('onClick',t);
}

});                        
