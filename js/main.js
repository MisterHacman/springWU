let wrapper = document.querySelector("#wrapper");
let fade_layer = document.querySelector("#fade-layer");
let nav = document.querySelector("nav");
let menu_button = document.querySelector("#menu-button");

menu_button.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	nav.classList.toggle("visible");
});

fade_layer.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	if (nav.classList.contains("visible"))
		nav.classList.remove("visible");
});