let s1=document.querySelector(".para2-1");
let s2=document.querySelector(".para2-2");
let s3=document.querySelector(".para2-3");
let video=document.querySelector(".image2");

s1.addEventListener("mousemove",()=>{
    video.src="/images -js/earthquakevideo.mp4";
});

s2.addEventListener("mousemove",()=>{
    video.src="/images -js/floodvideo.mp4";
});

s3.addEventListener("mousemove",()=>{
    video.src="/images -js/droughtvideo.mp4";
});