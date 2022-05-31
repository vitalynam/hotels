const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav__items');




burger.onclick = () =>{
    burgerNav.classList.toggle('show');
}