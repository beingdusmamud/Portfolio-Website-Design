// script.js
// Copyright 2024 Dus Mamud. All Rights Reserved.

/** creating button click show hide navbar **/
var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

// Typed.js for text animation
var typed = new Typed(".input", {
    strings: ["Frontend Developer", "UX Designer", "Web Developer"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true
});
