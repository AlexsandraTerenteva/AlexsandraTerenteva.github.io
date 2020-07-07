const tabs = (tabSelector, wrapSelector, contentSelector, activeClass) => {

    const tab = document.querySelectorAll(tabSelector),
        wrapTab = document.querySelector(wrapSelector),
        content = document.querySelectorAll(contentSelector);

    const hiddenTabContent = () => {
        content.forEach(item => {
            item.style.display = 'none';
        });
        
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });

    };

    const showTabContent = (i = 0) => {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);
    };  

    hiddenTabContent();
    showTabContent();

    wrapTab.addEventListener('click', (e) => {
        const target = e.target;

        if(target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item,i) => {
                if (target == item || target.parentNode == item) {
                    hiddenTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
};

export default tabs;