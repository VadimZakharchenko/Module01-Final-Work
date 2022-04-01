//Smoth Scroll
const links = document.querySelectorAll(".banner-arrow, .banner-link");

for (const link of links) {
   link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
   e.preventDefault();
   const href = this.getAttribute("href");

   document.querySelector(href).scrollIntoView({
       behavior: "smooth"
   });
}

// Button Up
 
 window.onscroll = function(){scrollFunction()};

        const upbuttons = document.querySelectorAll(".button-up");

        for (const upbutton of upbuttons) {
           upbutton.addEventListener("click", clickHandler);
        }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }

       function scrollFunction(){
           if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
               document.getElementById('btnUp').className = 'button-up visible';
           } else {
               document.getElementById('btnUp').className = 'button-up hidden';
           }
       }
// POPUP
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фон, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
}
});

//    Menu

function openModal() {
    document.getElementById("modal").style.top = "0px";
}
function closeModal() {
    document.getElementById("modal").style.top = "-500px";
}