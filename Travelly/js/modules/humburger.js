function humburger(humburgerSelector, menuSelector, humburgerActiveClass, menuActiveClass) {

    const humburger = document.querySelector(humburgerSelector),
             menu = document.querySelector(menuSelector),
             menuActive = document.querySelector(menuActiveClass),
             humburgerActive = document.querySelector(humburgerActiveClass);


    humburger.addEventListener('click', () => {
        humburger.classList.toggle(humburgerActive);
        menu.classList.toggle(menuActive);
    });
}

export default humburger;