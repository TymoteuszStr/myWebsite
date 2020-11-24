import './style/main.scss';
import {hello} from './js/animations';
import {showMobileNav} from './js/mobileNav';
import {scrollFunctions} from './js/scroll';
import {drawHexagon} from './js/canvas';



const runFuncions = () =>{
    hello();
    showMobileNav();
    scrollFunctions();
    drawHexagon();
}

runFuncions();