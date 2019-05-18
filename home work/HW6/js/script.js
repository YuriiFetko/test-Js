let menu = document.querySelector('.menu');
let menuItem = menu.querySelectorAll('.menu-item');
let fiveItem = document.createElement('li');
let body = document.querySelector('body');
let title = document.querySelector('#title');
let adv = document.querySelector('.adv');
let promptUser = prompt('Ваше отношение к технике apple?', ''); 
let questions = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

fiveItem.classList.add('menu-item');
fiveItem.textContent = 'Пятый пункт';
menu.appendChild(fiveItem);

body.style.background = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

adv.remove();

questions.textContent = promptUser;