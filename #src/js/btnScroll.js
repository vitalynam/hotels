//----------КНОПКА СКРОЛЛА НАВЕРХ---------
const btnScrollUp = document.querySelector('.btn__up');   // --- Находим кнопку на странице по классу

window.onscroll = () => {                                 // --- При скролле страницы....
   if(window.scrollY > 300){                              // --- Если высота больше 300... 
       btnScrollUp.style.opacity = 1;                     // --- сделать кнопку видимой через стили (opacity = 1) изначально присвоено 0
   } else if(window.scrollY < 300){                       // --- Если высота меньше 300...
       btnScrollUp.style.opacity = 0;                     // --- скрыть кнопку задав ей стиль (opacity = 0)
   }
}

btnScrollUp.onclick = () =>{                              // --- При клике на кнопку
    window.scrollTo( 0, 0);                               // --- Прокрутить в самый верх страницы
}
