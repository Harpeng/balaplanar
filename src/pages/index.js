import "./index.css";
import { modalConfig } from '../components/constants';
import { openPopup, closePopupByOverlayAndIcon } from '../components/popup';

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
