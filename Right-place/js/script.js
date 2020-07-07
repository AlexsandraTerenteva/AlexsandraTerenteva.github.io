require('es6-promise').polyfill();

import menu from './modules/menu';
import tabs from './modules/tabs';
import popup from './modules/popup';
import forms from './modules/forms';
import slider from './modules/slider';
import feedbackSlider from './modules/feedbackSlider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    menu();
    tabs('.catalog__item', '.catalog__list', '.catalog__content', 'catalog__item_active');
    popup();
    forms();
    slider('.carusel-wrap_fast-food','.carusel_fast-food');
    slider('.carusel-wrap_drink','.carusel_drink');
    slider('.carusel-wrap_chiken','.carusel_chiken');
    slider('.carusel-wrap_rice','.carusel_rice');
    feedbackSlider();
});