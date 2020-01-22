function alertControler(message, isVisible, isWin){
    let alert = document.getElementById("alert");
    let alertText = document.getElementById("alert-text")
    let alertImg = document.getElementById("alert-img")

    if(isWin){
        alertImg.src = "./assets/splash.png"
    }else{
        //cambia la ruta a la cucaracha muerta
        alertImg.src = "./assets/muerto.png"
    }

    if(isVisible){
        alert.className = "alert-hide";
    }else{
        alert.className = "alert-show"
        alertText.innerHTML = message
    }
}

export default alertControler;
