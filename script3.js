console.log("connected 3");

// get attributes
const division = document.querySelector("div");
console.log(division.getAttribute("class"));
console.log(division);
division.removeAttribute('id');
console.log(division);

const title2 = document.getElementById('title-2');
title2.setAttribute('class', 'dom-title-2');
console.log(title2);
