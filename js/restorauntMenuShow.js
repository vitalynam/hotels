const btnMore = document.querySelector('.btn-more');            // Получаем кнопку "Показать меню"
const btnLess = document.querySelector('.btn-less');            // Получаем кнопку "Скрыть меню"
const menuItems = document.querySelectorAll('.show-items');

let menuCounter = 0;    // Создаем счетчик

btnMore.onclick = () =>{ // при клике на кнопку "больше"
    
    btnLess.removeAttribute('disabled'); // удалить у кнопки "скрыть" атрибут "disabled"
    btnLess.style.opacity = '1'; // Установить опасити 1
    btnLess.style.cursor = 'pointer'; // и курсор поинтер
    


    for( let i = 0; i < menuItems.length-1; i++){ 
            menuItems[menuCounter].classList.remove('hidden');
    }
    menuCounter++;

    if(menuCounter > menuItems.length-1){
        btnMore.setAttribute('disabled', true);
        btnMore.style.opacity = '0.5';
        btnMore.style.cursor = 'not-allowed';
    }
}

btnLess.onclick = () =>{

    btnMore.removeAttribute('disabled');
    btnMore.style.opacity = '1';
    btnMore.style.cursor = 'pointer';
   


    menuCounter--;
    for( let i = 0; i < menuItems.length-1; i++){
        menuItems[menuCounter].classList.add('hidden');
    }

    if(menuCounter == 0 ){
        btnLess.setAttribute('disabled', true);
        btnLess.style.opacity = '0.5';
        btnLess.style.cursor = 'not-allowed';
    }
}

