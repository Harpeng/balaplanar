import './index.css';
import { container, scrollElements, scrollElement } from '../utils/constants.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { modalConfig } from '../components/constants';
import { openPopup, closePopupByOverlayAndIcon } from '../components/popup';

gsap.registerPlugin(ScrollTrigger);

if (document.documentElement.clientWidth > 1024) {


	gsap.to(scrollElements, {
		xPercent: -100 * (scrollElements.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: container,
			pin: true,
			pinType: 'fixed',
			start: 'top top',
			scrub: 0.5,
			onToggle: () => {
				if (innerWidth >= 1440) {
					gsap.to(
						container, {
						ease: "none",
						delay: 0,
						duration: 0,
						overflow: 'visible'
					})
					gsap.to(
						scrollElements, {
						ease: 'none',
						delay: 0,
						duration: 0,
						backgroundColor: '#AE46FF',
					})
				}
			},
			onEnter: () => {
				gsap.to('.header__scroll', {
					scale: 0.95,
					borderRadius: '66px',
					ease: "none",
					delay: 0,
					duration: 0,
				})
				gsap.to(
					[container, ...scrollElements], {
					ease: 'none',
					delay: 0,
					duration: 0,
					borderRadius: '0',
				})
			},
			onEnterBack: () => {
				gsap.to('.header__scroll', {
					scale: 0.95,
					borderRadius: '66px',
					ease: "none",
					delay: 0,
					duration: 0,
				})
				gsap.to(
					[container, ...scrollElements], {
					ease: 'none',
					delay: 0,
					duration: 1,
					borderRadius: '0',
				})
			},
			onLeave: () => {
				gsap.to('.header__scroll', {
					scale: 1,
					borderRadius: '',
					ease: "none",
					delay: 0,
					duration: 0,
				})
				gsap.to(
					[container, ...scrollElements], {
					ease: 'none',
					delay: 0,
					duration: 1,
					borderRadius: '60px',
				})
			},
			onLeaveBack: () => {
				gsap.to('.header__scroll', {
					scale: 1,
					borderRadius: '',
					ease: "none",
					delay: 0,
					duration: 0,
				})
				gsap.to(
					[container, ...scrollElements], {
					ease: 'none',
					delay: 0,
					duration: 0,
					borderRadius: '60px'
				})
			},
			end: () => `+=${container.offsetHeight * (scrollElements.length - 1)}`
		}
	})
}



// popup
const courseReviewBtn = document.querySelector('.course__review-button');
const courseReviewPopup = document.querySelector('.popup__course');

const partnerLwbLogo = document.querySelector('#partners__logo_lwb');
const partnerOgLogo = document.querySelector('#partners__logo_og');
const partnerHbLogo = document.querySelector('#partners__logo_hb');

const partnerLwbPopup = document.querySelector('#partners__logo_lwb-popup');
const partnerOgPopup = document.querySelector('#partners__logo_og-popup');
const partnerHbPopup = document.querySelector('#partners__logo_hb-popup');


partnerLwbLogo.addEventListener('click', () => { openPopup(partnerLwbPopup) });
partnerOgLogo.addEventListener('click', () => { openPopup(partnerOgPopup) });
partnerHbLogo.addEventListener('click', () => { openPopup(partnerHbPopup) });

const popups = document.querySelectorAll(modalConfig.modalSelector);

courseReviewBtn.addEventListener('click', () => openPopup(courseReviewPopup));

popups.forEach((popup) => {
	popup.addEventListener('click', closePopupByOverlayAndIcon);
});

window.addEventListener('wheel', (e) => {
	if (e.ctrlKey) {
		e.preventDefault()
		return false
	}
}, { passive: false })

// header menu

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
			headerStart.style.opacity = '0';
			headerScroll.style.top = '0';
		} if (last_known_scroll_position !== 0 && window.scrollY == 0) {
			headerStart.style.opacity = '1';
			headerScroll.style.top = '-100%';
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
