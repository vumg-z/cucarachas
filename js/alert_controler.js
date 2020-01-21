function alertControler(message, isVisible){
    let alert = document.getElementById("alert");
    let alertText = document.getElementById("alert-text")

    if(isVisible){
        alert.className = "alert-hide";
    }else{
        alert.className = "alert-show"
        alertText.innerHTML = message
    }
}

export default alertControler;
