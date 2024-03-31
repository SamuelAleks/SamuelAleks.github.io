document.addEventListener("DOMContentLoaded", function () {
	var stickyNav = document.querySelector("main > nav");

	function updateStickyNav() {
		var containerHeight = stickyNav.parentElement.clientHeight;

		var scrollPosition = window.scrollY;
		var pageHeight =
			document.documentElement.scrollHeight - window.innerHeight;
		var percentage = (scrollPosition / pageHeight) * 150;

		// Calculate values based on container dimensions
		var inMin = 25;
		var inMax = 100;
		var outMin = 100;
		var outMax = 0;

		// Adjust values based on container width
		inMin *= containerHeight / 10000; // Adjust the base value as needed
		inMax *= containerHeight / 10000; // Adjust the base value as needed

		outMin *= containerHeight / 4000; // Adjust the base value as needed
		outMax *= containerHeight / 1000; // Adjust the base value as needed

		var newPosition = map(percentage, inMin, inMax, outMin, outMax);
		stickyNav.style.top = newPosition + "px";
	}

	window.addEventListener("scroll", updateStickyNav);
	window.addEventListener("resize", updateStickyNav);

	// Function to map values from one range to another
	function map(value, inMin, inMax, outMin, outMax) {
		return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
	}

	// Initial update
	updateStickyNav();
});
