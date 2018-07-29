var menu = document.querySelector('.menu');
var list = document.querySelector('.nav-list')

var openClose = function() {
    list.classList.toggle('show');
}

menu.addEventListener('click', openClose);

