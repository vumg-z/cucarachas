function crackSound(){
    var sound = new Howl({
      src: ["../assets/crack.mp3"]
    });
    
    sound.play();
}

export default crackSound;
