import "./index.css";
import { modalConfig } from '../components/constants';
import { openPopup, closePopupByOverlayAndIcon } from '../components/popup';

const courseReviewBtn = document.querySelector('.course__review-button');
const courseReviewPopup = document.querySelector('.popup__course');

courseReviewBtn.addEventListener('click', () => openPopup(courseReviewPopup));

const popups = document.querySelectorAll(modalConfig.modalSelector);

popups.forEach((popup) => {
	popup.addEventListener('click', closePopupByOverlayAndIcon);
});
