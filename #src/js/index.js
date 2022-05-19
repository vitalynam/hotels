// -------НАСТРОЙКА СЛАДЙЕРА для Header -------

const headerSlides = document.querySelectorAll('.header-slide'); // Получаем все слайды
      headerDots = document.querySelectorAll('.header-dot');     // Получаем все дотсы (ромбики)

let headerCounter = 0; // Создаем счетчик

//  Функция активный слайд
function headerActiveSlide (num){
    for(slide of headerSlides){
        slide.classList.remove('slide-active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
    }
    headerSlides[num].classList.add('slide-active');  // Добавляем класс ACTIVE нужному элементу
}
// Функция активный дот
function headerActiveDot (num){
    for(dot of headerDots){
        dot.classList.remove('dot-active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
    }
    headerDots[num].classList.add('dot-active'); // Добавляем класс ACTIVE нужному элементу
}

function currentSlide (ind){  // Одной функцией вызываем две
    headerActiveSlide(ind);
    headerActiveDot(ind);
}

//Функция листания бесконечного слайдера
function headerNextSlide(){
    if(headerCounter == headerSlides.length -1){ // если счетчик = длине колличества слайдер
        headerCounter = 0;                      // обнуить его
        currentSlide(headerCounter);             // и запустить слайд 
    }else{
        headerCounter++;
        currentSlide(headerCounter);
    }
}

// Клик по дотсу переключает на нужный слайдер
headerDots.forEach((item, indexDot)=>{
    item.onclick = ()=>{
        headerCounter = indexDot; // присвоить счетчику нужный индекс
        currentSlide(headerCounter); // вызвать функцию
    }
})

setInterval(headerNextSlide, 2500); // Автоматическое листание через каждые 2.5 сек




// -------НАСТРОЙКА СЛАДЙЕРОВ для RECOMENDATION -------
const recomendationSlides = document.querySelectorAll('[data-name = "recomendation_one"]' ); // Получаем все слайды

let recomendationCounter = 0;

function recomendationActiveSlide (num){
    for(slide of recomendationSlides){
        slide.classList.remove('recomendation-active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
    }
    recomendationSlides[num].classList.add('recomendation-active');  // Добавляем класс ACTIVE нужному элементу
}

function recomendationNextSlide(){
    if(recomendationCounter == recomendationSlides.length -1){ // если счетчик = длине колличества слайдер
        recomendationCounter = 0;                      // обнуить его
        recomendationActiveSlide (recomendationCounter);            // и запустить слайд 
    }else{
        recomendationCounter++;
        recomendationActiveSlide (recomendationCounter);
    }
}

 setInterval(recomendationNextSlide, 2000);

 const recomendationSlidesTwo = document.querySelectorAll('[data-name = "recomendation_two"]' ); // Получаем все слайды

let recomendationCounterTwo = 0;

function recomendationActiveSlideTwo (num){
    for(slide of recomendationSlidesTwo){
        slide.classList.remove('recomendation-active'); // циклом проходим по всем элементам и удаляем класс ACTIVE
    }
    recomendationSlidesTwo[num].classList.add('recomendation-active');  // Добавляем класс ACTIVE нужному элементу
}

function recomendationNextSlideTwo(){
    if(recomendationCounterTwo == recomendationSlidesTwo.length -1){ // если счетчик = длине колличества слайдер
        recomendationCounterTwo = 0;                      // обнуить его
        recomendationActiveSlideTwo (recomendationCounterTwo);            // и запустить слайд 
    }else{
        recomendationCounterTwo++;
        recomendationActiveSlideTwo (recomendationCounterTwo);
    }
}

 setInterval(recomendationNextSlideTwo, 2000);












//----------НАСТРОЙКА МЕНЮ БУРГЕРА---------


//----------НАСТРОЙКА МОДАЛКИ--------