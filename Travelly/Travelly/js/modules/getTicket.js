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
export default getTicket;