// let h1 = document.getElementsByTagName('h1')

// h1[0].innerText ="Modified";

//Selection properties:
// //1. ID Selector
// let h1ID = document.getElementById('hello');
// console.log(h1ID.innerText);
// console.log(h1ID.innerHTML);
// h1ID.innerText = "Hello <span>Demo</span>";
// console.log(h1ID.innerText);
// h1ID.innerHTML = "Hello <span class=\"demo\">Demo</span>";
// console.log(h1ID.innerHTML);

//2. Class Selector
let h1Class = document.getElementsByClassName('hell')
console.log(h1Class)
//3.Element Selector
let h1 = document.getElementsByTagName('h1');

//4.Query Selector
h1ID = document.querySelector('#hello')

h1Class = document.querySelectorAll('.hell')

h1 = document.querySelector('h1')
varad = document.querySelectorAll('div[data-varad="921"]')
console.log(varad) 