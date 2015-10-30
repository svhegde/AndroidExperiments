/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

window.$ = WLJQ;
PAGE2NS={};

PAGE2NS.init = function() {
	WL.Logger.debug("PAGE2NS::init");
};

PAGE2NS.buttonClick = function() {
	WL.Logger.debug("PAGE2NS::buttonClick");
	WL.SimpleDialog.show("PAGE2NS","Button on Page2 was clicked",[{text:'OK'}]);
};

PAGE2NS.loadPage1 = function(){
	WL.Logger.debug("PAGE2NS::loadPage1");
	WL.Page.load("pages/Page1.html", {
		onComplete: function(){ PAGE1NS.init(); },
		onUnload: function() { PAGE1NS.unload(); } 
	});
};

PAGE2NS.back = function(){
	WL.Logger.debug("PAGE2NS::back");
	WL.Page.back();
};

PAGE2NS.unload = function(){
	WL.Logger.debug("PAGE2NS::unload");
	for (var att in PAGE2NS){
        delete PAGE2NS[att];
    }
};