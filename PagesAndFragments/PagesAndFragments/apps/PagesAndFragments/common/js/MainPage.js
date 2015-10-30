/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

MAINPAGENS = {};

MAINPAGENS.init = function(){
		WL.Logger.debug("MAINPAGENS::init");
};
	
MAINPAGENS.loadPage = function(pageIndex){
	WL.Logger.debug("MAINPAGENS::loadPage::pageIndex: "+pageIndex);
	switch (pageIndex){
		case 1:
			WL.Page.load("pages/Page1.html", {
				onComplete: function(){ PAGE1NS.init(); },
				onUnload: function() { PAGE1NS.unload(); } 
			});
			break;
		case 2:
			WL.Page.load("pages/Page2.html", {
				onComplete: function(){ PAGE2NS.init(); },
				onUnload: function() { PAGE2NS.unload(); } 
			});
			break;
	}
};

MAINPAGENS.unload = function(){
	WL.Logger.debug("MAINPAGENS::unload");
	for (var att in MAINPAGENS){
        delete MAINPAGENS[att];
    }
};