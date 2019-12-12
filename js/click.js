let cucaracha = document.querySelectorAll("#cucaracha_viva");
let ruta = "./assets/muerto.png";
let cucarachas_vivas = document.getElementsByClassName("cucaracha_viva").length;

console.log(cucarachas_vivas)

const points = document.getElementById("points");
let counter = 0;

let seconds = 10;
let display = document.querySelector('#time');

window.onload = function () {
    startTimer(seconds, display);
    main();
};

function main(){
    cucaracha.forEach((cucaracha) => {
        cucaracha.addEventListener("click", () => {
            cucaracha.src = ruta;
            cucaracha.id = "null";
            cucaracha.className = "cucaracha_muerta";
            animation.pause;

            counter++;
            points.innerHTML = counter;
        });
    });
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
