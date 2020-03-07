// Animation Global SVG
gsap.from("#musicGlobal", { duration: 2, x: 300, opacity: 0, scale: 0.5 });

// Animation BTNPlay
let audio = document.getElementById("audio"),
    btnPlay = document.querySelector("#buttonPlay"),
    btnPause = document.querySelector("#buttonPause"),
    eyeLeft = document.querySelector("#eyeLeft"),
    btnPlayAnimation = gsap.timeline({ repeat: 9});


btnPlayAnimation.from(btnPlay, { scaleX: 1.1, scaleY: 1.1, ease: Elastic.easeOut, repeat: -1, repeatDelay: 5});


btnPlay.addEventListener("click", animationAllMusic);

function animationAllMusic() {

    // Activate music
    gsap.to(btnPlay, { duration: 1, opacity: 0, display: "none",scale: 1, x: 0});
    gsap.to(btnPause, { duration: 2, opacity: 1, display: "block", scale: 0.5,x:100});
    audio.play();

    // Move eyes

    // Eye Left

    gsap.to("#Vector_26", { x: 30, repeat: 100, yoyo: true, repeatDelay:1.2 });
    gsap.to("#Vector_28", { x: 30, repeat: 100, yoyo: true, repeatDelay:1.2 });


    
    
    // Animation Notes Musical

    gsap.to("#noteOne", { duration: 6, y: 20, ease: "bounce" });
    gsap.to("#noteTwo", { duration: 5, y: 20, ease: "bounce" });
    gsap.to("#noteThree", { duration: 4, y: 20, ease: "bounce" });
    gsap.to("#noteFour", { duration: 3, y: 20, ease: "bounce" });
    gsap.to("#noteFive", { duration: 2, y: 20, ease: "bounce" });
    gsap.to("#noteSix", { duration: 1, y: 20, ease: "bounce" });
}

// Pause Animation
gsap.to(btnPause, { duration: 2, opacity: 0 });
btnPause.addEventListener("click",animationAllMusicPause);

function animationAllMusicPause(){
    
    gsap.to(btnPlay, { duration: 1, opacity: 1, display: "block", scale: 1, x: 0 });
    gsap.to(btnPause, { duration: 2, opacity: 0, display: "none", scale: 0.5, x: 100 });
    audio.pause();
   
    
}


