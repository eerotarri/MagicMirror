/* local Tram Stop Monitoring module */

/* MagicMirror²
 * Module: Tram
 *
 * By Eero Tarri
 * MIT Licensed.
 */

Module.register("tram", {
	// Default module config.
	defaults: {
		text: "waltti",
		updateInterval: 15 * 1000, // every 15 seconds
		animationSpeed: 15 * 1000,
		fadeSpeed: 2000,
	},

	getDom: function() {

		var wrapper = document.createElement("div");

		// Find expected arrival times from xml
		const parser = new DOMParser();

		fetch('./modules/default/tram/resp.xml')
		.then(function(res) {
		  return res.text();
		})
		.then(data => parser.parseFromString(data, 'text/xml'))
		.then(function (xmlText) {
			let onwardCalls = xmlText.querySelectorAll('OnwardCall');

			var inputList = Array.prototype.slice.call(onwardCalls);


			// Arrivaltimes are set here
			// Set HTML for widget
			wrapper.innerHTML = `<dl>`;

			inputList.forEach(call => {
			  let stopPoint = call.querySelector('StopPointRef');
			  let toa = call.querySelector('ExpectedArrivalTime');

			  if (stopPoint.innerHTML === '0835') {
				wrapper.innerHTML += `<dt><h1 class="bright large">${toa.innerHTML.slice(11, 16)}</h1></dt>`
			  }

			});

			wrapper.innerHTML += `</dl>`;
			return wrapper;
		})
		.catch(function (err) {
			console.error(err);
		});

		// Return empty div if something went wrong
		return wrapper;
	},

	// Start the tram module.
	start: function () {
		var self = this;
		setInterval(function() {
			self.updateDom(4 * 1000); // 4 second fadespeed
		}, 60 * 1000); //perform every 1000 milliseconds.
	},

	// Select the template depending on the display type.
	getTemplate: function () {
		return "tram.njk";
	},

	// Add all the data to the template.
	getTemplateData: function () {
		return this.data;
	},
});
