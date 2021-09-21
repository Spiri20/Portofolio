var slider = document.getElementById('slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');

line1.onclick = function(){
    slider.style.transform = 'translateX(0)';
    active.style.top = '0px';
}

line2.onclick = function(){
    slider.style.transform = 'translateX(-33%)';
    active.style.top = '100px';
}

line3.onclick = function(){
    slider.style.transform = 'translateX(-66%)';
    active.style.top = '200px';
}


var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');




