let container = document.getElementById("container");
let box = document.getElementById("box");

let containerWidth = 1000;
let containerHeight = 400;
let boxWidth= 50;
let boxHeight = 50;

container.style.width = containerWidth + "px";
container.style.height = containerHeight + "px";
box.style.width = boxWidth + "px";
box.style.height = boxHeight + "px";
box.setAttribute("title", "top: 0, left: 0");

function moveBox(){
  let moveTop = parseInt(Math.random() * (containerHeight - boxHeight));
  let moveLeft = parseInt(Math.random() * (containerWidth - boxWidth));
  box.style.top = moveTop + "px";
  box.style.left = moveLeft + "px";
  box.setAttribute("title", "top: " + moveTop + ", " + "left: " + moveLeft);
}
box.addEventListener("click", moveBox);

box.addEventListener("mouseover", function() {
  box.style.backgroundColor = "yellow";
});

box.addEventListener("mouseout", function() {
  box.style.backgroundColor = "darkgray";
})