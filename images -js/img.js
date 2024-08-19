let s1=document.querySelector(".para2-1");
let s2=document.querySelector(".para2-2");
let s3=document.querySelector(".para2-3");
let video=document.querySelector(".video");

s1.addEventListener("mouseenter",()=>{
    video.src="/images -js/earthquakevideo.mp4";
});

s2.addEventListener("mouseenter",()=>{
    video.src="/images -js/floodvideo.mp4";
    video.load();
});

s3.addEventListener("mouseenter",()=>{
    video.src="/images -js/droughtvideo.mp4";
});