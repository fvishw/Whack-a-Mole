let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;
window.onload = () => {
  setGame();
};
function getRandomNum() {
  return Math.floor(Math.random() * 9).toString();
}
function setGame() {
  //set up the grid for the game board in html
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").append(tile);
  }
  setInterval(setPlant, 1500);
  setInterval(setMole, 1500);
}
function setMole() {
  if (gameOver) {
    return;
  }
  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "/images/monty-mole.png";

  let num = getRandomNum();
  if (currentPlantTile && currentPlantTile.id == num) {
    return;
  }
  currentMoleTile = document.getElementById(num);
  currentMoleTile.append(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currentPlantTile) {
    currentPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");
  plant.src = "/images/piranha-plant.png";

  let num = getRandomNum();
  if (currentMoleTile && currentMoleTile.id == num) {
    return;
  }
  currentPlantTile = document.getElementById(num);
  currentPlantTile.append(plant);
}
function selectTile() {
  if (this == currentMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currentPlantTile) {
    document.getElementById(
      "score"
    ).innerText = `Game over , Score is:${score.toString()}`;
    gameOver = true;
  }
}
