function main(){
    let ruta = "./assets/muerto.png";
    let cucaracha = document.getElementById("cucaracha_viva");

    cucaracha.addEventListener("click", () => {
        cucaracha.src = ruta;
        cucaracha.id = "null";
    })
}

main();