// controlando el tiempo en el que las cucarachas aparecen

function displayControl(){
    setTimeout(() => {
        let cucarachas = document.querySelectorAll("#cucaracha_viva");
        Array.prototype.slice.call(cucarachas).map(item => item.style.display = "inline")
        startTimer(seconds,display);
    }, 1450);
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

displayControl()