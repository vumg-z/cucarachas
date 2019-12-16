let playground = document.getElementById("playground");

const points = document.getElementById("points");
let counter = 0;

let seconds = 4;
let nextSeconds = localStorage.getItem("secondskey");
let display = document.querySelector('#time');

window.onload = function () {
    createCucaracha();
    startTimer(nextSeconds, display);
    main();
};

function main(){
    let cucaracha = document.querySelectorAll("#cucaracha_viva");
    let ruta = "./assets/muerto.png";
    cucaracha.forEach((cucaracha) => {
        cucaracha.addEventListener("click", () => {
            counterHandler(cucaracha);
            cucaracha.src = ruta;
            cucaracha.id = "null";
            animation.pause;
            winGame();
        });
    });
}

function counterHandler(cucaracha){

    if(cucaracha.id != "null"){
        counter++;
        points.innerHTML = counter;
    }
}

function winGame() {
    let cucarachas_vivas = document.getElementsByClassName("cucaracha_viva");
    if(counter === cucarachas_vivas.length){
        seconds--;
        localStorage.setItem("secondskey", seconds);
        window.location.reload(true);
        alert("you win");
        clearInterval(timer);
    }
}

function createCucaracha(){
    for (var i = 0; i < 4; i++) {
        let img = document.createElement("IMG");
        img.setAttribute("src", "assets/vivo.png");
        img.setAttribute("id", "cucaracha_viva");
        img.setAttribute("class", "cucaracha_viva");
        playground.appendChild(img);
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Game Over");
            window.location.reload(true); 
        }
    }, 1000);
}
