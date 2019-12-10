
function main(){
    let ruta = "./assets/muerto.png";
    let cucaracha = document.querySelectorAll("#cucaracha_viva");

    cucaracha.forEach((cucaracha) => {
        cucaracha.addEventListener("click", () => {
            cucaracha.src = ruta;
            cucaracha.id = "null";
            animation.pause;
        })
    })
}

main();