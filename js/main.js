const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
    document.body.classList.toggle('no-scroll');
    handleMenuScroll();
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
    document.body.classList.remove('no-scroll');
    handleMenuScroll();
});

function handleMenuScroll() {
    const menuHeight = menuList.scrollHeight;
    const windowHeight = window.innerHeight;

    if (menuHeight > windowHeight) {
        menuList.style.height = '100vh'
        console.log("height on")
    }
    else menuList.style.removeProperty('height');
}

window.addEventListener('resize', handleMenuScroll);