const nav_options = document.querySelector("#additional-nav");
elements = nav_options.querySelectorAll("*");

/*adding the effect to the first element by defualt since that loads by defualt on page load*/
elements[0].classList.add("selected-item");

function clearHighlight() {
  elements.forEach((el) => {
    el.classList.remove("selected-item");
  });
}

elements.forEach((el) => {
  el.addEventListener("click", () => {
    clearHighlight();
    el.classList.add("selected-item");
  });
});
