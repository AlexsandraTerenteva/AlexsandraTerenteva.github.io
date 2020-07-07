const feedbackSlider = () => {
    const slides = document.querySelectorAll('.clients__block'),
        nameClient = document.querySelectorAll('.reviews__name'),
        slideContent = document.querySelectorAll('.reviews__text'),
        prev = document.querySelector('.prev-arrow'),
        next = document.querySelector('.next-arrow');
    let slideIndex = 1;

    const showSlide = (n) => {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        
        const hidden = (selector) => {
            selector.forEach(item => {
                item.style.display = 'none';
            });
        };
        const show = (selector) => {
            selector[slideIndex - 1].style.display = 'block';
        };

        hidden(slides);
        hidden(nameClient);
        hidden(slideContent);

        show(slides);
        show(nameClient);
        show(slideContent);
    };

    showSlide(slideIndex);

    const pluseSlide = (n) => {
        showSlide(slideIndex += n);
    };

    next.addEventListener('click', () => {
       pluseSlide(1);
    });
    
    prev.addEventListener('click', () => {
        pluseSlide(-1);
    });

};

export default feedbackSlider;