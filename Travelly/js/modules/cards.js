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

export default cards;