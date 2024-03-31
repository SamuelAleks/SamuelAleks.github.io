// JavaScript function to handle header visibility
let lastScrollPosition = window.pageYOffset;
const header = document.querySelector("header");
const headerHeight = header.clientHeight;

window.addEventListener("scroll", () => {
	const currentScrollPosition = window.pageYOffset;

	if (currentScrollPosition > lastScrollPosition) {
		// Scrolling down, hide the header
		header.style.top = `-${headerHeight + 200}px`;
	} else {
		// Scrolling up, show the header
		header.style.top = "0";
	}

	lastScrollPosition = currentScrollPosition;
});
