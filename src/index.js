import './pages/index.css';

const headerStart = document.querySelector('.header__start');
const headerScroll = document.querySelector('.header__scroll');

console.log(123);

let last_known_scroll_position = 0;

function addScrollListener() {
window.addEventListener('scroll', function(e){
if(last_known_scroll_position == 0 && window.scrollY !== 0) {
	headerStart.style.display = 'none';
	headerScroll.style.display = 'flex';
} if (last_known_scroll_position !== 0 && window.scrollY == 0) {
	headerStart.style.display = 'flex';
	headerScroll.style.display = 'none';
}
 last_known_scroll_position = window.scrollY;
})
}
addScrollListener();
