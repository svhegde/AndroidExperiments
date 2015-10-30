/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

window.$ = WLJQ;
PAGE1NS={};

PAGE1NS.init = function() {
	WL.Logger.debug("PAGE1NS::init");
};

PAGE1NS.buttonClick = function() {
	WL.Logger.debug("PAGE1NS::buttonClick");
	WL.SimpleDialog.show("PAGE1NS","Button on Page1 was clicked",[{text:'OK'}]);
};

PAGE1NS.insertFragment = function() {
	WL.Logger.debug("PAGE1NS::insertFragment");
	WL.Fragment.load('pages/fragment.html', $("#FragmentsDiv")[0], {
		onComplete: function() { },
		onUnload: function() { }
	});
};

PAGE1NS.back = function(){
	WL.Logger.debug("PAGE1NS::back");
	WL.Page.back();
};

PAGE1NS.unload = function(){
	WL.Logger.debug("PAGE1NS::unload");
	for (var att in PAGE1NS){
        delete PAGE1NS[att];
    }
};
