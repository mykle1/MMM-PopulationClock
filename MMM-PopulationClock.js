/* Magic Mirror
 * Module: MMM-PopulationClock

 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-PopulationClock",{

	defaults: {
		  size: "",
			textColor: "",
	},

	getStyles: function() {
        return ["MMM-PopulationClock.css"];
    },


	getDom: function() {

		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";

		if (this.config.size === "large") {
			iframe.height = "305px";
			iframe.width = "305px";
		  type="text/javascript";
      iframe.src="https://www.theworldcounts.com/counters/shocking_environmental_facts_and_statistics/world_population_clock_live/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=34&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";

  } else if (this.config.size === "medium") {
		iframe.height = "205px";
		iframe.width = "205px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/shocking_environmental_facts_and_statistics/world_population_clock_live/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=24&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";

	} else if (this.config.size === "small") {
		iframe.height = "105px";
		iframe.width = "145px";
		type="text/javascript";
		iframe.src="https://www.theworldcounts.com/counters/shocking_environmental_facts_and_statistics/world_population_clock_live/embed?background_color=black&color=" + this.config.textColor + "&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=14&token=221fff62ddf146b6ccf3e2eb0a3df0553ffd66fc";
  }

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_POPULATION') {
            this.hide(1000);
        }  else if (notification === 'SHOW_POPULATION') {
            this.show(1000);
        }

    },

});
