const container = document.querySelector(".container");
const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll("img");

function flowerSelect() {
  const flowertype = this.getAttribute("flowertype");
  for (let j = 0; j < images.length; j++) {
    if (images[j].getAttribute("flowertype") === flowertype || flowertype === "All") {
      images[j].style.display = "block";
    } else {
      images[j].style.display = "none";
    } 
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", flowerSelect);
}
  // Not:Işləmir amma yenə də atdım)
















