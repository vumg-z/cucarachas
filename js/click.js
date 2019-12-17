let playground = document.getElementById("playground");
let winModal = document.getElementById("winModal");
let loserModal = document.getElementById("loserModal");

const levelDisplay = document.getElementById("level");
const points = document.getElementById("points");
let counter = 0;

var cucaracha;
var animationCucaracha;
var myTimer;

let seconds = localStorage.getItem("secondskey");
var n = localStorage.getItem('on_load_counter');
var level = localStorage.getItem('level_counter');

let display = document.querySelector('#time');

window.onload = function () {
    localStorage.setItem("on_load_counter", n);
    localStorage.setItem("secondskey", seconds);
    localStorage.setItem("level_counter", level);
    if (n === null && seconds === null && level === null) {
        n = 4;
        seconds = 4;
        level = 1;
    }
    createCucaracha();
    this.startTimer(seconds,display);
    main();
};

function main(){
    levelDisplay.innerHTML = level;
    cucaracha = document.querySelectorAll("#cucaracha_viva");
    let ruta = "./assets/muerto.png";
    cucaracha.forEach((cucaracha) => {
        cucaracha.addEventListener("click", () => {
            counterHandler(cucaracha);
            cucaracha.src = ruta;
            cucaracha.id = "null";
            animation.pause;
            animationCucaracha = animation.pause;
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

function createCucaracha(){
    for (var i = 0; i < n; i++) {
        let img = document.createElement("IMG");
        img.setAttribute("src", "assets/vivo.png");
        img.setAttribute("id", "cucaracha_viva");
        img.setAttribute("class", "cucaracha_viva");
        playground.appendChild(img);
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            clearInterval(myTimer);
            animationCucaracha;
            loserModal.style.display = "block";
            tryagain();
        }
    }, 1000);
    
}

function winGame() {
    let cucarachas_vivas = document.getElementsByClassName("cucaracha_viva");
    if(counter === cucarachas_vivas.length){
        seconds++;
        n++;
        level++;
        localStorage.setItem("level_counter", level);
        localStorage.setItem("on_load_counter", n);
        localStorage.setItem("secondskey", seconds);
        winModal.style.display = "block";
        clearInterval(myTimer);
        nextlvl();
    }
}

function nextlvl() {
    const nextlvlbtn = document.getElementById("nextlvl");
    nextlvlbtn.onclick = function() {
        window.location.reload(true);
    };
}

function tryagain() {
    const tryagainbtn = document.getElementById("tryagain");
    tryagainbtn.onclick = function() {
        window.location.reload(true); 
        localStorage.clear();
    };
}