
window.addEventListener('DOMContentLoaded', () => {
'use stict';
    // Mobile menu
    const burger = document.querySelector('.burger'),
        menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('nav__menu_active');
    });

    // Seach header 
    const search = document.querySelector('.icon-search'),
        searchInput = document.querySelector('.search-block__input');

    search.addEventListener('click', () => {
        searchInput.classList.toggle('search-block__input_active');
    });

    $(document).ready(function(){
        $('.carousel__wrap-inner').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow:  '<button type="button" class="slick-next"></button>',
            responsive: [

                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            
        });
    });
});

