const menu = () => {
    
    const menu = document.querySelector('.list'),
    menuItem = document.querySelectorAll('.list__item'),
    hamburger = document.querySelector('.burger-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('burger-menu_active');
        menu.classList.toggle('list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('burger-menu_active');
            menu.classList.toggle('list_active');
        });
    });
};

export default menu;
