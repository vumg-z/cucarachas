function main(){
    diagonal();
}

function diagonal(){

    let cucaracha = document.getElementById("cucaracha_viva");
    let w = window.innerWidth;
    let h = window.innerHeight;

    let limit_width = (w - (w*.10));
    let limit_height = (h - (h*.20));

    anime({
        targets: cucaracha,
        translateX: function (){
            return anime.random(0,limit_width)
        },
        translateY: getRndInteger(0,limit_height),
        complete: diagonal,
        delay : 100,
        easing: 'easeInOutQuad'
      });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

main();