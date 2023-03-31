import restartGame from "./restart_game.js";
import playCrackSound from "./audio.js";

// evento global para parar el time-out desde aqui

var pause = new Event('pause');

let playground = document.getElementById("playground");

const points = document.getElementById("points");
let counter = 0;

window.onload = function() {
  createCucaracha();
  main();
};

function main() {
  let cucaracha = document.querySelectorAll("#cucaracha_viva");
  let cucarachaMuerta = "./assets/muerto.png";

  cucaracha.forEach(cucaracha => {
    cucaracha.addEventListener("click", () => {
      if (cucaracha.id !== "null") {
        playCrackSound()
        counterHandler(cucaracha);
        cucaracha.src = cucarachaMuerta;
        cucaracha.id = "null";
        cucaracha.style.pointerEvents = "none";
        winGame();
      }
    });
  });
}

function counterHandler(cucaracha) {
  if (cucaracha.id !== "null") {
    counter++;
    points.innerHTML = counter;
  }
}

function winGame() {
  let cucarachas_vivas = document.getElementsByClassName("cucaracha_viva");
  if (counter === cucarachas_vivas.length) {
    // lanzamos el evento para que el temporizador termine
    window.dispatchEvent(pause);

    setTimeout(() => {
      restartGame("You win!", false, true);
    }, 1000);
  }
}

function createCucaracha() {
  for (var i = 0; i < 5; i++) {
    let img = document.createElement("IMG");
    img.setAttribute("src", "assets/vivo.png");
    img.setAttribute("id", "cucaracha_viva");
    img.setAttribute("class", "cucaracha_viva");
    playground.appendChild(img);
  }
}
