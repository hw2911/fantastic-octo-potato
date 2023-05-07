let orangeBtn = document.getElementById("orangeButton");
let blueBtn = document.getElementById("blueButton");
let pinkBtn = document.getElementById("pinkButton");
let whiteBtn = document.getElementById("whiteButton");

function switchToOrange() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "orange";
  body.style.color = "white";
}

function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
  body.style.color = "white";
}

function switchToPink() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "pink";
  body.style.color = "white";
}

function switchToWhite() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }

orangeBtn.addEventListener("click", switchToOrange);
blueBtn.addEventListener("click", switchToBlue);
pinkBtn.addEventListener("click", switchToPink);
whiteBtn.addEventListener("click", switchToWhite);