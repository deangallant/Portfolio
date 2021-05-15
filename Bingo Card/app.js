function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let table = document.querySelector('tbody');
let reset = document.getElementById('reset');
let td= document.querySelectorAll('td');
let b = document.getElementsByClassName('b-column');
let i = document.getElementsByClassName('i-column');
let n = document.getElementsByClassName('n-column');
let g = document.getElementsByClassName('g-column');
let o = document.getElementsByClassName('o-column');
console.log(b)


function dab(e) {
  if (e.target.className != 'dab' && e.target.innerHTML != 'FREE'){
    e.target.classList.toggle('dab')
  }
}

function cardReset(e) {
  for (prop of td) {
    if(prop.className != 'freespace dab')
    prop.classList.remove('dab')
  }
  shuffleCardNumbers()

}

function shuffleCardNumbers() {
  for(prop of b) {
    prop.innerHTML = getRandomInt(1,15)
  }
  for(prop of i) {
    prop.innerHTML = getRandomInt(16,30)
  }
  for(prop of n) {
    prop.innerHTML = getRandomInt(31,45)
  }
  for(prop of g) {
    prop.innerHTML = getRandomInt(46,60)
  }
  for(prop of o) {
    prop.innerHTML = getRandomInt(61,75)
  }
}

table.addEventListener('click', dab);
reset.addEventListener('click', cardReset);
window.addEventListener('DOMContentLoaded', cardReset);
