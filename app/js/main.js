$(function(){

});

// document.addEventListener('DOMContentLoaded', () => {

//   //Mobile Menu
//   const burger = document.querySelector('.burger'); //наша кнопка
//   const mobileMenu = document.querySelector('.menu'); //мобильное меню
//   const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

//   burger.addEventListener('click', () => {
//     mobileMenu.classList.toggle('menu--active'); //когда меню открыто
//     if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
//       burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
//       bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
//     } else { //Когда нету активного класса у меню
//       burger.classList.remove('burger--active'); //Возвращает в исходное состояние
//       bodyLock.classList.remove('lock'); //Разрешаем скроллить
//     }
//   });
// });