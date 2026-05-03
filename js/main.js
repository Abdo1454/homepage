let statue = 2;
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");
let controlShow = document.querySelector(".control-show");
arrowLeft.addEventListener("click", () => {
  if (statue == 1) {
    statue = 3;
  } else {
    statue--;
  }
console.log(statue);
sliderChange();
  
});
arrowRight.addEventListener("click", () => {
  if (statue == 3) {
    statue = 1;
  } else {
    statue++;
  }
console.log(statue);
sliderChange();
sliderContentChange();

});
function sliderChange() {
  controlShow.classList.remove("case-1", "case-2");

  if (statue == 1) {
    controlShow.classList.add("case-1");
  } else if (statue == 3) {
    controlShow.classList.add("case-2");
  }
}
sliderChange();
console.log(statue);
// navbar
let menuIcon = document.getElementById("menu-icon");
let navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
let contentImage = document.getElementById("content-image");
function sliderContentChange() {
  if (statue == 1) {
    contentImage.innerHTML = "Discover innovative <br /> Ways to decorate";
  } else if (statue == 2) {
    contentImage.innerHTML = "We are available all <br /> across the globe";
  } else if (statue == 3) {
    contentImage.innerHTML = "Discover innovative <br /> Ways to decorate";
  }
}
sliderContentChange();