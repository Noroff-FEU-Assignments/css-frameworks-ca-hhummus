// container for cards
let cardBody = document.querySelector('.container-of-all-cards');

// cards array
const newsArray = [
	{
		newsImage: '/images/news/news-1.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-2.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-3.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-4.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-5.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-6.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-7.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	},
	{
		newsImage: '/images/news/news-8.jpg',
		newsT: 'Nunc porttitor vel.',
		newsP: 'Nunc malesuada eget est fringilla dapibus.',
		newsMoreButton: 'More'
	}
];

// forEach through array of cards and display in html
newsArray.forEach(function(cardElements) {
	cardBody.innerHTML += `
							<div class='card__container col-sm-4'>
							<div class='card'>
								<img src=${cardElements.newsImage} class= 'card-img-top card-image alt=''>
								
								<div class='card-body card-body-news'>
									<h5 class='card-title'>${cardElements.newsT}</h5>
									<p class='card-text'>${cardElements.newsP}</p>
									<a href='#' class='btn btn-primary card-button'>${cardElements.newsMoreButton}</a>
								</div>
							</div>
							</div>
                    		`;
});
