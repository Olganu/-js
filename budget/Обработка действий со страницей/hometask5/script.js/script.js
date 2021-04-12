let menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    prompts = document.querySelector('#prompt'),
    menuItem = document.querySelectorAll(".menu-item");

    
li.classList.add("menu-item");
menu.appendChild(li);
li.textContent = 'Пятый пункт';
menu.insertBefore(menuItem[2], menuItem[1]);


//const makeChanges = () => {
document.body.style.backgroundImage = 'url("img/apple_true.jpg")';

//}; 
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();
let yourOpinion = prompt('Ваше отношение к технике apple?');
prompts.textContent = yourOpinion;



// let menu = document.getElementsByClassName("menu")[0],
//     menuItem = document.getElementsByClassName("menu-item"),
//     title = document.getElementById("title"),
//     adv = document.getElementsByClassName("adv")[0],
//     promptforApple = document.querySelector("#prompt"),
//     menuItemLi = document.createElement("li");

// menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

// menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
// menuItemLi.textContent = "Пятый элемент";                       
// menu.appendChild(menuItemLi);                                   


// document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


// title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

// adv.remove();                                                   // Удалить рекламу со страницы

// let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
// promptforApple.textContent = yourOpinion;