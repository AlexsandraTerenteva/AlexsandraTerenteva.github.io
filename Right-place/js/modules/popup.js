const popup = () => {
    const btnSubmit = document.querySelector('.form__btn'),
        btnRequest = document.querySelector('.button'),
        btnDelivery = document.querySelector('.delivery-link'),
        modalConsultaition = document.querySelector('#consultaition'),
        input = document.querySelector('.form__input'),
        thanksModal = document.querySelector('#thanks'),
        close = document.querySelectorAll('.modal__close'),
        overlay = document.querySelector('.overlay'),
        scroll = calcScroll();

    const showModal = (modal) => {
        overlay.style.display = 'block';
        modal.style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    };

    const closeModal = (modal) => {
        close.forEach(item => {
            item.addEventListener('click', () => {
                overlay.style.display = 'none';
                modal.style.display = 'none';
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            });
        });

        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) {
                overlay.style.display = 'none';
                modal.style.display = 'none';
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            }
        });
    };

    const showModalByTime = (modal, time) => {
        setTimeout(() => {
            showModal(modal);
            closeModal(modal);
        }, time);

    };

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = "50px";
        div.style.height = "50px";
        div.style.overflow = "scroll";
        div.style.visibility = "hidden";

        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    btnSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        input.textContent = '';


        showModal(thanksModal);
        closeModal(thanksModal);
    });

    btnDelivery.addEventListener('click', (e) => {
        e.preventDefault();

        showModal(modalConsultaition);
        closeModal(modalConsultaition);
    }); 

    btnRequest.addEventListener('submit', (e) => {
        e.preventDefault();

        showModal(thanksModal);
        closeModal(thanksModal);
    });
    
    showModalByTime(modalConsultaition, 10000);

};

export default popup;