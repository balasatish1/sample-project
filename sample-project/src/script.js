'use strict';

const submitBtnClickEvent = () => {
  const name = document.querySelector('.name-input').value;
  const paraElement = document.createElement('p');
  paraElement.innerText='I love you ' + name;
  mainContainer = document.querySelector('main').appendChild(paraElement);
}

const main = function() {  
  const submitBtn =document.querySelector('.submit-btn');
  submitBtn.addEventListener('click', submitBtnClickEvent);
}

window.onload = main;