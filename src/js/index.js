//import './style/main.scss';
import {hello} from './animations';
import {showMobileNav} from './mobileNav';
import {scrollFunctions} from './scroll';
import {drawHexagon} from './canvas';



const runFuncions = () =>{
    hello();
    showMobileNav();
    scrollFunctions();
    drawHexagon();
}

runFuncions();