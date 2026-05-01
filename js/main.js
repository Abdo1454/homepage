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