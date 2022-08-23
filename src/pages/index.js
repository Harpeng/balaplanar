import './index.css';
import {
    container, scrollElements, scrollElement
} from '../utils/constants.js'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

