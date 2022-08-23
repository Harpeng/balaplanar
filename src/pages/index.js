import './index.css';
import {
    container, scrollElements, scrollElement
} from '../utils/constants.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { modalConfig } from '../components/constants';
import { openPopup, closePopupByOverlayAndIcon } from '../components/popup';

let principlesSection = document.querySelector('.principles')

gsap.registerPlugin(ScrollTrigger);

if (document.documentElement.clientWidth > 1024) {
    gsap.to(scrollElements, {
        xPercent: -100 * (scrollElements.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: container,
            pin: true,
            pinType: 'transform',
            start: "center center",
            scrub: 0.5,
            toggleClass: { className: 'principles__scroll-container_move', targets: container },
            end: () => `+=${container.offsetHeight * (scrollElements.length - 1)}`
        }
    });
}

const courseReviewBtn = document.querySelector('.course__review-button');
const courseReviewPopup = document.querySelector('.popup__course');

const partnerLwbLogo = document.querySelector('#partners__logo_lwb');
const partnerOgLogo = document.querySelector('#partners__logo_og');
const partnerHbLogo = document.querySelector('#partners__logo_hb');

const partnerLwbPopup = document.querySelector('#partners__logo_lwb-popup');
const partnerOgPopup = document.querySelector('#partners__logo_og-popup');
const partnerHbPopup = document.querySelector('#partners__logo_hb-popup');


partnerLwbLogo.addEventListener('click', () => { openPopup(partnerLwbPopup)});
partnerOgLogo.addEventListener('click', () => { openPopup(partnerOgPopup)});
partnerHbLogo.addEventListener('click', () => { openPopup(partnerHbPopup)});

const popups = document.querySelectorAll(modalConfig.modalSelector);

courseReviewBtn.addEventListener('click', () => openPopup(courseReviewPopup));

popups.forEach((popup) => {
	popup.addEventListener('click', closePopupByOverlayAndIcon);
});
