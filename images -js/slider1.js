let play=document.querySelector(".gg-play-button-o");
let pause=document.querySelector(".gg-play-pause");
let slide=document.querySelector(".slide");
let slider=document.querySelector(".slider");

play.addEventListener("click",()=>{
    slide.classList.remove("paused");
    slider.classList.remove("paused");
});
pause.addEventListener("click",()=>{
    slide.classList.add("paused");
    slider.classList.add("paused");
});