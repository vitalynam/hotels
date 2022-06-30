const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav__wrap');
const pageContent = document.querySelector('main');





if(burger){
    burger.onclick = () =>{
        burgerNav.classList.toggle('show');
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
        pageContent.classList.toggle('_lock');
    }
}