/* Declare variables below to save the different sections (divs) of your story*/
let pickthelock = document.querySelector(".option-one");
let stealkey = document.querySelector(".option-two");
let pickthelockscreen = document.querySelector(".option-one-screen");
let stealthekeyscreen = document.querySelector(".option-two-screen");
let optiononeend = document.querySelector(".option-one-end");
let optiontwoend = document.querySelector(".option-two-end");
let goIntoTheHole = document.querySelector(".go-into-the-hole");
let scream = document.querySelector(".scream");
let goleft = document.querySelector(".go-left");
let goright = document.querySelector(".go-right");
let jello = document.querySelector(".jello");
let jellotext = document.querySelector(".jellotext");
let gorightdiv = document.querySelector(".go-right-end");


console.log(pickthelock);


pickthelock.onclick = function() {
    pickthelockscreen.style.display = "block";
};
stealkey.onclick = function() {
    stealthekeyscreen.style.display = "block";
};
pickthelockscreen.onclick = function() {
    pickthelockscreen.style.display = "block";
};
stealthekeyscreen.onclick = function() {
    stealthekeyscreen.style.display = "block";
};

goIntoTheHole.onclick = function() {
    optiontwoend.style.display = "block";
};
scream.onclick = function() {
    optiononeend.style.display = "block";
};
goleft.onmouseover = function() {
    jello.style.display = "block";
    jellotext.style.display = "block";
    gorightdiv.style.display = "none";
};
goright.onmouseover = function() {
    jello.style.display = "none";
    jellotext.style.display = "none";
    gorightdiv.style.display = "block";

};