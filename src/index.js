import './style/main.scss';
import {hello} from './js/animations';
import {showMobileNav} from './js/mobileNav';
import {scrollFunctions} from './js/scroll';
import {drawHexagons} from './js/canvas';



const runFuncions = () =>{
    hello();
    showMobileNav();
    scrollFunctions();
    drawHexagons();
}


window.addEventListener('resize',()=>{
    drawHexagons();
});


runFuncions();