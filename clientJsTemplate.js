(function() {
	var DATA = #experimentdata;

	document.addEventListener("DOMContentLoaded", function(event) {
		DATA = DATA[location.href];
		for(var selector in DATA) {
			let selectorAttributes = DATA[selector];

			for(var attribute in selectorAttributes) {
				let element = document.querySelector(selector)
				if(element) {
					element.setAttribute(attribute, selectorAttributes[attribute]);
				}
			}
		}
	});
})();