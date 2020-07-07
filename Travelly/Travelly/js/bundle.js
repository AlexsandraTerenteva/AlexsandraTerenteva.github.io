/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cards() {
    
    class Card {
		constructor (src, alt, price, title, desc, parentSelector) {
			this.src = src;
			this.alt = alt;
			this.price = price;
			this.title = title;
			this.desc = desc;
			this.parent = document.querySelector(parentSelector);
		}
		render() {
			const element = document.createElement('div');
			element.innerHTML = `
				<div class="card">
					<div class="card__img-wrap">
						<img src=${this.src} alt=${this.alt} class="card__img">
						<div class="card__price">${this.price}</div>
					</div>
					<div class="card__title">${this.title}</div>
					<p class="card__desc">${this.desc}</p>
				</div>
			`;
			this.parent.append(element);
		}
	}

	new Card(
		"img/img1.jpg",
		"img",
		'$1,095',
		'Удивительная Австралия',
		'Вдохновитесь путешествием в Австралию. Откройте для себя фантастические вещи и места, чтобы пойти.',
		'.destination__block'
	).render();

	new Card(
		"img/img2.jpg",
		"img",
		'$1,295',
		'древняя южная америка',
		'Вдохновитесь путешествием в Австралию. Откройте для себя фантастические вещи и места, чтобы пойти.',
		'.destination__block'
	).render();

	new Card(
		"img/img3.jpg",
		"img",
		'$695',
		'современная северная америка',
		'Вдохновитесь путешествием в Австралию. Откройте для себя фантастические вещи и места, чтобы пойти.',
		'.destination__block'
	).render();	

	new Card(
		"img/img4.jpg",
		"img",
		'$295',
		'Классическая Европа',
		'Вдохновитесь путешествием в Австралию. Откройте для себя фантастические вещи и места, чтобы пойти.',
		'.destination__block'
	).render();	

}

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/getTicket.js":
/*!*************************************!*\
  !*** ./src/js/modules/getTicket.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function getTicket() {
	let mainForm = document.querySelector('.form_main'),
		inputCityTo = document.querySelector('.form__input_city-to'),
		inputCityFrom = document.querySelector('.form__input_city-from'),
		inputDateDapart = document.querySelector('.form__input_date'),
		dropdownCityFrom = document.querySelector('.dropdown-city-from'),
		dropdownCityTo = document.querySelector('.dropdown-city-to'),
		cheapestTicket = document.querySelector('.information-ticket__choose-date'),
		otherCheapTickets = document.querySelector('.information-ticket__best-price');

	let city = [];

	const citiesApi = 'js/cities.json';
	const apiKey = '8828a95a4d72a0c42c92ddda9dd3bd8d',
		calendar = 'http://min-prices.aviasales.ru/calendar_preload',
        maxCount = 5;
        
   const getData = (url, callback) => {
        const request = new XMLHttpRequest();

        request.open('GET', url);

        request.addEventListener('readystatechange', () => {
            if(request.readyState !== 4) {
                return;
            }

            if(request.status === 200) {
                callback(request.response);
            } else {
                console.error(request.status);
            }
        });

        request.send();
    };

    const showCity = (input, list) => {
        list.textContent = '';

        if (input.value !== '') {

            const filterCity = city.filter((item) => {
                if (item.name) {
                    const fixItem = item.name.toLowerCase();
                    return fixItem.startsWith(input.value.toLowerCase());
                }
            });
                
            filterCity.forEach((item) => {
                const dropdownCityItem = document.createElement('li');
                dropdownCityItem.classList.add('drop-list');

                dropdownCityItem.textContent = item.name;
                list.append(dropdownCityItem);    
            });
        }
    };

    const chooseCity = (e, list, input) => {
        const target = e.target;

        if (target.tagName.toLowerCase() === 'li') {
            input.value = target.textContent;
            list.textContent = '';
        }
    };

    const getNameCity = (code) => {
        const objCity = city.find(item => item.code === code);
        return objCity.name;
    };

    const getDate = (date) => {
        return new Date (date).toLocaleString('ru', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getLinkAviaseles = (data) => {
        let link = 'https://www.aviasales.ru/search/';

        link += data.origin;
        
        const date = new Date(data.depart_date);
        const day = date.getDate();

        link += day < 10 ? '0' + day : day; 

        const month = date.getMonth() + 1;

        link += month < 10 ? '0' + month : month;

        link += data.destination;
        link += '1';

        return link;
    };

    const createCard = (data) => {
		const ticketBlock = document.createElement('div');
		ticketBlock.classList.add('ticket');
		let deep = '';

		if(data) {
			deep = `
			<div class="ticket__wrap">

			<div class="ticket__btn-wrap">
				<a href="${getLinkAviaseles(data)}" target="_blank" class="btn btn_buy">Купить за ${data.value}</a>
			</div>

			<div class="ticket__block">
				<div class="ticket__transfer-wrap">
					<div class="ticket__transfer-name">
						${data.gate}
					</div>
					<div class="logo">
						<span class="icon-plane icon-plane_main-color"></span>
						<a href="#" class="logo__text logo__text_dark">travelly</a>
					</div>
				</div>

				<div class="ticket__info">

					<div class="route route_departure">
						<div class="route__time">
							19:50
						</div>
						<div class="route__city ">
							${getNameCity(data.origin)}
						</div>
						<div class="route__date">
							${getDate(data.depart_date)}
						</div>
					</div>

					<div class="fly-info">
						<div class="fly-info__duration">
							В пути: 1h 30 min
						</div>
						<div class="fly-info__path">
							<div class="fly-info__departure">
								<span class="fly-info__path-icon fly-info__path-icon_dep icon-plane"></span>
								<span class="fly-info__path-airport fly-info__path-airport_dep">${data.origin}</span>
							</div>
							<div class="fly-info__connector"></div>
							<div class="fly-info__arrival">
								<span class="fly-info__path-icon fly-info__path-icon_arrival icon-plane"></span>
								<span class="fly-info__path-airport fly-info__path-airport_arrival">${data.destination}</span>
							</div>
						</div><!--fly-info__path-->
					</div><!--fly-info-->

					<div class="route route_arrival">
						<div class="route__time">
							21:20
						</div>
						<div class="route__city">
							${getNameCity(data.destination)}
						</div>
						<div class="route__date">
							${getDate(data.depart_date)}
						</div>
					</div>      
				</div>
			</div>
		</div>`;
		} else {
			deep = '<h3> Билетов на выбранную дату нет!</h3>';
		}

		ticketBlock.insertAdjacentHTML('beforeend', deep);

		return ticketBlock;
    };
    
        
    const renderCheapDay = (cheapTicket) => {
		const ticket = createCard(cheapTicket[0]);
		cheapestTicket.append(ticket);
	};

	const renderCheapYear = (cheapTickets) => {
		cheapTickets.sort((a, b) => a.value - b.value);

		for (let i = 0; i < cheapTickets.length && i < maxCount; i++) {
			const ticket = createCard(cheapTickets[i]);
			otherCheapTickets.append(ticket);
		}
		console.log(cheapTickets);
	};

	const renderCheap = (data, when) =>{
		const cheapTicketYear = JSON.parse(data).best_prices;
		
		const cheapTicketDay = cheapTicketYear.filter((item) => {
			return item.depart_date === when;
		});
		
		renderCheapDay(cheapTicketDay);
		renderCheapYear(cheapTicketYear);
	
	};
    
    mainForm.addEventListener('submit', (e) => {
		e.preventDefault();
		cheapestTicket.innerHTML = ' <h3 class="title">Самый дешевый билет на выбранную дату</h3>';
		otherCheapTickets.innerHTML =  ' <h3 class="title">Самые дешевые билеты на другие даты</h3>';

		const cityFrom = city.find((item) => {
			return inputCityFrom.value === item.name;
		});
		
		const cityTo = city.find((item) => {
			return inputCityTo.value === item.name;
		});

		const formData = {
			from: cityFrom,
			to: cityTo,
			when: inputDateDapart.value
		};

		if (formData.from && formData.to) {

			const requestData = `?derapt_date=${formData.when}&origin=${formData.from.code}&destination=${formData.to.code}&one_way=true&token${apiKey}`;

			getData(calendar + requestData,(response) => {
				renderCheap(response, formData.when);
			});

		} else {
			cheapestTicket.innerHTML = ' <h3 class="title">Введите корректные данные!</h3>';
			otherCheapTickets.innerHTML =  '';
		}	
	});

    inputCityFrom.addEventListener('input', () => {
        showCity(inputCityFrom, dropdownCityFrom);
    });
    
    inputCityTo.addEventListener('input', () => {
        showCity(inputCityTo, dropdownCityTo);
    });
    
    dropdownCityFrom.addEventListener('click', () => {
        chooseCity(event, dropdownCityFrom, inputCityFrom);
    });
    
    dropdownCityTo.addEventListener('click', () => {
        chooseCity(event, dropdownCityTo, inputCityTo);
    });

    getData(citiesApi, (data) => {
		city = JSON.parse(data);
		city.sort((a, b) => {
			if (a.name > b.name) {
			  return 1;
			}
			if (a.name < b.name) {
			  return -1;
			}
			return 0;
		});
	});
}
/* harmony default export */ __webpack_exports__["default"] = (getTicket);

/***/ }),

/***/ "./src/js/modules/humburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/humburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (humburger);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_humburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/humburger */ "./src/js/modules/humburger.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_getTicket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getTicket */ "./src/js/modules/getTicket.js");




window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	Object(_modules_cards__WEBPACK_IMPORTED_MODULE_1__["default"])();
	Object(_modules_humburger__WEBPACK_IMPORTED_MODULE_0__["default"])('.humburger', '.menu', 'humburger_active', 'menu_active');
	Object(_modules_getTicket__WEBPACK_IMPORTED_MODULE_2__["default"])();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map