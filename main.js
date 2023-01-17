import '/style.scss';
import { gsap } from 'gsap';

/**PINK FLOWER */
const flowerPinkLayerOne = document.querySelector('#pink-flower-later-one');
const flowerPinkLayerTwo = document.querySelector('#pink-flower-later-two');
const flowerPinkLayerThree= document.querySelector('#pink-flower-later-three');

gsap.to(flowerPinkLayerOne, {rotate: 360, transformOrigin:"50% 50%", duration: 7});
gsap.to(flowerPinkLayerTwo, {rotate: 360, transformOrigin:"50% 50%", duration: 7});
gsap.to(flowerPinkLayerThree, {rotate: 360, transformOrigin:"50% 50%", duration: 7});


/**YELLOW FLOWER */
const flowerYellowLayerOne = document.querySelector('#yellow-flower-layer-one');
const flowerYellowLayerTwo = document.querySelector('#yellow-flower-layer-two');

gsap.to(flowerYellowLayerOne, {rotate: 360, transformOrigin:"50% 50%", duration: 7});
gsap.to(flowerYellowLayerTwo, {rotate: 360, transformOrigin:"50% 50%", duration: 7});

/** FLOWER TEXT */


const flowerTextBg = document.querySelectorAll('.st7');
const letterS = document.querySelector('#letter-s');
const letterW = document.querySelector('#letter-w');

gsap.fromTo(flowerTextBg, {fill: '#fcba03', autoAlpha: 1}, {fill: '#fc03ba', autoAlpha: 1, duration: 6})
gsap.to(letterS, {rotate: 360, duration: 3});
gsap.fromTo(letterW, {x: 100, opacity: 0.4}, {x: 0, duration: 3, opacity: 1} )



