function main(){
    diagonal();
}

function diagonal(){

    let cucaracha = document.querySelectorAll("#cucaracha_viva");
    let w = window.innerWidth;
    let h = window.innerHeight;

    let limit_width = (w - (w*.35));
    let limit_height = (h - (h*.25));

    //responsive
    if(w < 400){
        limit_width = (w - (w*.25));
    }

    animation = anime({
        targets: cucaracha,
        translateX: function (){
            return anime.random(0,limit_width)
        },
        translateY: getRndInteger(0,limit_height),
        complete: diagonal,
        delay : 20,
        easing: 'easeInOutQuad'
      });
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

main();
