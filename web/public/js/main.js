(function(){
	var searchForm = document.getElementById('searchForm');
	var searchField = document.getElementById('searchField');
	var geolocationButton = document.getElementById('geolocationButton');
	var resultsContainer = document.getElementById('resultsContainer');

	// uses XMLHttpRequest to fetch forecast HTML based on provided parameters 
	// and places the HTML response in the results container
	function getForecast (parameters) {
		var queryString = '';
		if(parameters){
			var conditions = [];
			for(var key in parameters){
				conditions.push(key + '=' + parameters[key]);
			}
			queryString = '?' + conditions.join('&');
		}

		var request = new XMLHttpRequest();
		request.addEventListener('load', function () {
			resultsContainer.innerHTML = this.responseText;
		});
		request.open('GET', '/search' + queryString);
		request.send();
	}

	// listens for form submission (via mouse click or enter key) and fetches a 
	// forecast based on the location field
	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();
		
		if(!searchField.value){
			return;
		}

		getForecast({
			city : searchField.value
		});
	}, false);

	// when geolocation is available set a click handler on the geolocation 
	// button to fetch a forecast based on the current user location
	if ('geolocation' in navigator) {
		// make the button visible/enabled
		document.body.classList.add('has-geolocation');

		geolocationButton.addEventListener('click', function () {
			navigator.geolocation.getCurrentPosition(function (location) {
				getForecast({
					lat : location.coords.latitude,
					lon : location.coords.longitude
				});
			});
		}, false);
	}
})();