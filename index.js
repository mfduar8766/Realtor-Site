var menu = document.querySelector(".menu");
var list = document.querySelector(".main-nav");

var home1 = function(data) {
  var home = document.querySelector(".home1-img");
  home.setAttribute("src", data);
  return home;
};

var home2 = function(data) {
  var home = document.querySelector(".home2-img");
  home.setAttribute("src", data);
  return home;
};

var home3 = function(data) {
  var home = document.querySelector(".home3-img");
  home.setAttribute("src", data);
  return home;
};

var home4 = function(data) {
  var home = document.querySelector(".home4-img");
  home.setAttribute("src", data);
  return home;
};

var home5 = function(data) {
  var home = document.querySelector(".home5-img");
  home.setAttribute("src", data);
  return home;
};

fetch("homes.json")
  .then(res => res.json())
  .then(data => {
    home1(data[0].image);
    home2(data[1].image);
    home3(data[2].image);
    home4(data[3].image);
    home5(data[4].image);
  })
  .catch(error => console.log(error));

var openClose = function() {
  list.classList.toggle("show");
};

menu.addEventListener("click", openClose);
