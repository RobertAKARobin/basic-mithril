'use strict';

m._boundInput = function(stream, attrs){
	var attrs = (attrs || {});
	attrs.value = stream();
	attrs.oninput = function(event){
		event.redraw = false;
		m.withAttr('value', stream).call(null, event);
	};
	return attrs;
}

var Main = (function(){
	return {
		view: function(){
			return m('p', 'Mithril is here!');
		}
	};
})();

document.addEventListener('DOMContentLoaded', function(){
	m.mount(document.getElementById('header'), Header);
	m.route(document.getElementById('main'), '/', {
		'/': Main
	});
});
