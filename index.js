window.onload = function() {
    var http = new XMLHttpRequest();

    //Listen to request state changes
    http.onreadystatechange = function() {
        if(http.readyState === 4 && http.status === 200) {
            console.log(JSON.parse(http.response));
        }
    } 
    
    //Set up request Request type, URL, if its async:true or sync:false
    http.open("GET", "homes.json", true);

     //Send(): To grab the data
    http.send();
};

var menu = document.querySelector('.menu');
var list = document.querySelector('.nav-list')

var openClose = function() {
    list.classList.toggle('show');
};

menu.addEventListener('click', openClose);

