import	humburger from './modules/humburger';
import	cards from './modules/cards';
import getTicket from './modules/getTicket';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	cards();
	humburger('.humburger', '.menu', 'humburger_active', 'menu_active');
	getTicket();

});