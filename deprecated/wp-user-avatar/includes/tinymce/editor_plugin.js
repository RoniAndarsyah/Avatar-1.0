(function(){tinymce.create('tinymce.plugins.wpUserAvatar',{init:function(c,d){c.addCommand('mceWpUserAvatar',function(){c.windowManager.open({file:ajaxurl+'?action=wp_user_avatar_tinymce',width:500,height:360,inline:1},{plugin_url:d})});c.addButton('wpUserAvatar',{title:'Insert User Profile',cmd:'mceWpUserAvatar',image:d+'/../../images/wpua-20x20.png'});c.onNodeChange.add(function(a,b,n){b.setActive('wpUserAvatar',n.nodeName=='IMG')})},createControl:function(n,a){return null},getInfo:function(){return{longname:'Profile Picture — ProfilePress',author:'ProfilePress',authorurl:'https://profilepress.net/',infourl:'https://profilepress.net/'}}});tinymce.PluginManager.add('wpUserAvatar',tinymce.plugins.wpUserAvatar)})();