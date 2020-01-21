import alert from "./alert_controler.js";

function restartGame(message, isFinished, isWin) {
  let i = 0;
  let id = "#null";
  while(i < 2){
    let cucarachas = document.querySelectorAll(id);
    // Esconder todas las cucarachas vivas o muertas
    Array.prototype.slice
      .call(cucarachas)
      .map(item => (item.style.display = "none"));
    id = "#cucaracha_viva";
    i++;
  }


  alert(message, isFinished);

  setTimeout(() => {
    window.location.reload(true);
  }, 3000);
}

export default restartGame;
