const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.nav__wrap');




if(burger){
    burger.onclick = () =>{
        burgerNav.classList.toggle('show');
        document.body.classList.toggle('_lock');
        burger.classList.toggle('_active');
    }
}