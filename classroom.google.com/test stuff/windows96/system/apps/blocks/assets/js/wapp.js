window.winit = function(wnd) {
	document.body.onclick = function() {
		wnd.activate();
		wnd.wndObject.ownerDocument.body.onclick({ srcElement: wnd.wndObject });
	}
}