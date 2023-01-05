$(function(){
    $('#player').click(function(){
        $('#playlist').slideToggle();
    })
})

const imgs = document.getElementById('imgs');
const img = document.querySelector("#img img");

let idx = 0

function carrossel() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
        
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);