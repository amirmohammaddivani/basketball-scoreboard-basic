let homePoints = 0;
let awayPoints = 0;

// document.getElementsByClassName

document.getElementById("home-s").textContent = homePoints;
document.getElementById("away-s").textContent = awayPoints;

function oneHome() {
  homePoints += 1;
  document.getElementById("home-s").textContent = homePoints;
}
function twoHome() {
  homePoints += 2;
  document.getElementById("home-s").textContent = homePoints;
}
function threeHome() {
  homePoints += 3;
  document.getElementById("home-s").textContent = homePoints;
}

function oneAway() {
  awayPoints += 1;
  document.getElementById("away-s").textContent = awayPoints;
}
function twoAway() {
  awayPoints += 2;
  document.getElementById("away-s").textContent = awayPoints;
}
function threeAway() {
  awayPoints += 3;
  document.getElementById("away-s").textContent = awayPoints;
}
