const animateItems = document.querySelectorAll('._animate-items');

if(animateItems.length > 0){
    function animateOnScroll(){
        for(let i = 0; i < animateItems.length; i++){
            window.addEventListener('scroll', animateOnScroll );
            const animateItem = animateItems[i];
            const animateItemHeight = animateItem.offsetHeight;
            const animateItemOffset = offset(animateItem).top;
            animateStart = 4;
            
            let animateItemPoint = window.innerHeight - animateItemHeight / animateStart;

            if(animateItemHeight > window.innerHeight){
                animateItemPoint = window.innerHeight - window.innerHeight / animateStart;
            }
            if(scrollY > (animateItemOffset - animateItemPoint) && scrollY < (animateItemOffset + animateItemHeight)){
                animateItem.classList.add('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    animateOnScroll();
}