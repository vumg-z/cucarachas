import restartGame from "./restart_game.js"

// controlando el tiempo en el que las cucarachas aparecen

function displayControl(){

    //el juego en movil va a tener menos segundos 
    var w = window.innerWidth;


    let seconds = 4;

    if(w < 801){
        seconds = 2;
    }


    let display = document.querySelector('#time');
    //el temporizador de aqui abajo se encarga de mostrar las cucarachas despues de 1.450s
    setTimeout(() => {
        let cucarachas = document.querySelectorAll("#cucaracha_viva");
        // al inicio las cucarachas tienen display: none
        Array.prototype.slice.call(cucarachas).map(item => item.style.display = "inline")
        startTimer(seconds,display);
    }, 1000);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        window.addEventListener("pause", (e) => {clearInterval(interval)})

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            //aqui despachamos el evento?
            clearInterval(interval)
            restartGame("Game Over", false, false)
        }
    }, 1000);
}

displayControl()