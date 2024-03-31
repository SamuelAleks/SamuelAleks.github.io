// JavaScript function to control the white bar
function moveWhiteBar(linkElement) {
	const whiteBar = document.getElementById("white-bar");
	const linkPosition = linkElement.getBoundingClientRect();
	whiteBar.style.width = linkPosition.width + "px";
	whiteBar.style.left = linkPosition.left + "px";
}

// JavaScript function to reset the white bar position to the active link (CV)
function resetWhiteBar() {
	const cvLink = document.querySelector(".nav-item .active");
	if (cvLink) {
		moveWhiteBar(cvLink);
	}
}

// Add an event listener to each link to handle mouseover event
document.querySelectorAll(".nav-item a").forEach((link) => {
	link.addEventListener("mouseover", function () {
		moveWhiteBar(link);
	});
});

// Add an event listener to reset the white bar when not hovering over links
document.querySelectorAll(".nav-item a").forEach((link) => {
	link.addEventListener("mouseout", function () {
		resetWhiteBar();
	});
});

// Add an event listener for the initial active link (CV)
window.addEventListener("DOMContentLoaded", () => {
	const cvLink = document.querySelector(".nav-item.active");
	if (cvLink) {
		moveWhiteBar(cvLink);
	}
});
