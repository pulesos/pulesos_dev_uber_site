window.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu (Mobile)
    let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    //Modal (Subheader Btn)

    let btnSubheader = document.querySelector('.subheader_btn'),
        modalSubheader = document.querySelector('.modal'),
        closeSubheader = document.querySelector('.modal_close');

    btnSubheader.addEventListener('click', () => {
        modalSubheader.style.display = 'block';
    });
    closeSubheader.addEventListener('click', () => {
        modalSubheader.style.display = 'none';
    });
    modalSubheader.addEventListener('click', (e) => {
        if (e.target === modalSubheader) {
            modalSubheader.style.display = 'none';
        }
    });

    //Modal (Promo Btn)

    let btnPromo = document.querySelector('.promo_btn'),
        modalPromo = document.querySelector('.modal'),
        closePromo = document.querySelector('.modal_close');

    btnPromo.addEventListener('click', () => {
        modalPromo.style.display = 'block';
    });
    closePromo.addEventListener('click', () => {
        modalPromo.style.display = 'none';
    });
    modalPromo.addEventListener('click', (e) => {
        if (e.target === modalPromo) {
            modalPromo.style.display = 'none';
        }
    });
});