import { Navbar } from "./templates/navbar.js";
import { WordCarousel } from "./templates/word-carousel.js";


Navbar;
WordCarousel;

var wordCarousels = document.getElementsByTagName('ic-word-carousel');

var wordCarousel1 = wordCarousels[0] as WordCarousel;
var wordCarousel2 = wordCarousels[1] as WordCarousel;
var wordCarousel3 = wordCarousels[2] as WordCarousel;


window.addEventListener('load', (ev: Event) => {

    const timestep = 2000;

    const intervalID1 = setInterval(() => wordCarousel1.next(), timestep); 
})


const testButton = document.getElementById('test') as HTMLButtonElement;

testButton.addEventListener('click', (ev: MouseEvent) => {

    wordCarousel1.next();
})