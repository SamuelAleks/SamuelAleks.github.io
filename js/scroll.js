document.addEventListener("DOMContentLoaded", function () {
	var backgroundElement = document.querySelector(".bkg-element");
	var contentSection = document.querySelector(".content-section");

	window.addEventListener("scroll", function () {
		var scrollPos = window.scrollY;
		var sectionPos = contentSection.offsetTop;

		// Decrease opacity as you scroll up
		var opacity = 1 - (scrollPos / window.innerHeight) * 1.8;
		backgroundElement.style.opacity = opacity;

		// Check if the content section is in the viewport
		if (scrollPos > sectionPos - window.innerHeight / 2) {
			contentSection.classList.add("active");
		}
	});
});
