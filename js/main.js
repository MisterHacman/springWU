let menu_button = document.querySelector("#menu-button");
let fade_layer = document.querySelector("#fade-layer");
let aside = document.querySelector("aside");

menu_button.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	aside.classList.toggle("visible");
});

fade_layer.addEventListener("click", () => {
	fade_layer.classList.toggle("visible");
	aside.classList.toggle("visible");
});