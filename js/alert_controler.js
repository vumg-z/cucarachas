function alertControler(message, isVisible, isWin){
    let alert = document.getElementById("alert");
    let alertText = document.getElementById("alert-text")
    let alertImg = document.getElementById("alert-img")

    let messages_win = ["You win", "You are awesome!", "Fantastic", "OH GOD!", "No way Jose!!!", "Verlo"]
    let messages_fail = ["HORRIBLE", "Please quit", "Trash", "You can do it better", "Really?", "Not even close!"]

    if(isWin){
        alertImg.src = "./assets/splash.png"
        message = messages_win[Math.floor(Math.random()*messages_win.length)]
    }else{
        //cambia la ruta a la cucaracha muerta
        alertImg.src = "./assets/muerto.png"
        message = messages_fail[Math.floor(Math.random()*messages_fail.length)]
    }

    if(isVisible){
        alert.className = "alert-hide";
    }else{
        alert.className = "alert-show"
        alertText.innerHTML = message
    }
}

export default alertControler;
