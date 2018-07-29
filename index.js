var home1Img = document.querySelector('.home1-img');
var home2Img = document.querySelector('.home2-img');
var home3Img = document.querySelector('.home3-img');
var home4Img = document.querySelector('.home4-img');
var home5Img = document.querySelector('.home5-img');
var menu = document.querySelector('.menu');
var list = document.querySelector('.nav-list')

window.onload = function() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'homes.json', true);
    xml.onload = function() {
        if(this.status === 200) {
            var homes = JSON.parse(this.response);
            home1Img.setAttribute('src', homes[0].image);
            home2Img.setAttribute('src', homes[1].image);
            home3Img.setAttribute('src', homes[2].image);
            home4Img.setAttribute('src', homes[3].image);
            home5Img.setAttribute('src', homes[4].image);
        }    
    }
    xml.send();
}

var openClose = function() {
    list.classList.toggle('show');
};

menu.addEventListener('click', openClose);
