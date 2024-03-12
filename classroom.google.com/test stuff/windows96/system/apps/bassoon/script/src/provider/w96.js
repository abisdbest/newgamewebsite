var ModulesPl = function(){
	var me = {};

	var apiUrl = "https://www.stef.be/bassoontracker/api/mpl/";
	var proxyUrl = "https://www.stef.be/bassoontracker/api/modules.pl/";
	var genres = [];
	var artists = [];

	me.get = function(url,next){
		console.trace(url, next);
	}

	return me;
}();