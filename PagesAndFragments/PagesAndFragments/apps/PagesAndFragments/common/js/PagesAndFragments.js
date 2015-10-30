/*
*  Licensed Materials - Property of IBM
*  5725-G92 (C) Copyright IBM Corp. 2006, 2012. All Rights Reserved.
*  US Government Users Restricted Rights - Use, duplication or
*  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
*/

window.$ = WLJQ;

function wlCommonInit(){

	WL.Page.load("pages/MainPage.html", {
		onComplete: function() { MAINPAGENS.init(); },
		onUnload: function() { MAINPAGENS.unload(); } 
	});
	
}
