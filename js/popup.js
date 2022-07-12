const popupBtn = document.querySelectorAll('.popup-click'); // элемент по которому произведен клик
const popupItem = document.querySelectorAll('.popup__img'); // основной контент внутри попапа
const popupClose = document.querySelector('.popup__close'); // кнопка закрытия попапа
const popupWrap = document.querySelector('.popup'); // фон (оверлей) попапа

if(popupBtn.length === popupItem.length){
    for(let i = 0; i<popupBtn.length; i++){

        popupBtn[i].onclick = () =>{
            document.body.classList.add('_lock');
            popupWrap.classList.add('active');
            popupItem[i].classList.add('active');
        }
    }
    popupClose.onclick = () =>{
        document.body.classList.remove('_lock');
        popupWrap.classList.remove('active');
        for (const elem of popupItem) {
            elem.classList.remove('active');        
        }
    }
}


