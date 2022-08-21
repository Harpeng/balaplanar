import './pages/index.css';

const headerStart = document.querySelector('.header__start');
const headerScroll = document.querySelector('.header__scroll');
const buttonMenuStart = headerStart.querySelector('.header__menu');
const buttonMenuScroll = headerScroll.querySelector('.header__menu');
const headerMobile = document.querySelector('.header__mobile');
const buttonExit = document.querySelector('.button-exit');


let last_known_scroll_position = 0;

function addScrollListener() {
	window.addEventListener('scroll', function (e) {
		if (last_known_scroll_position == 0 && window.scrollY !== 0) {
			//headerStart.style.display = 'none';
			headerScroll.style.display = 'flex';
		} if (last_known_scroll_position !== 0 && window.scrollY == 0) {
			//headerStart.style.display = 'flex';
			headerScroll.style.display = 'none';
		}
		last_known_scroll_position = window.scrollY;
	})
}
addScrollListener();

buttonMenuStart.addEventListener('click', function (e) {
	headerMobile.style.top = 0;
})

buttonMenuScroll.addEventListener('click', function (e) {
	headerMobile.style.top = 0;
})

buttonExit.addEventListener('click', function (e) {
	headerMobile.style.top = '-100%';
})