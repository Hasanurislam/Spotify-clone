let playsong=document.querySelector('#play-song');
let body=document.querySelectorAll('body');
let span=document.querySelector('span');
let gif=document.querySelectorAll('#gif');

playsong.addEventListener("click",function(e){
    console.log(e.target);
    gif.style.background="url('playGif.gif')";


})