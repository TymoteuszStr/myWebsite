import './style/main.scss';
import {hello} from './js/animations';
import {showMobileNav} from './js/mobileNav';
import {scrollFunctions} from './js/scroll';
import {drawHexagons} from './js/canvas';
import {chooseCategory} from './js/chooseCategory';



const runFuncions = () =>{
    hello();
    showMobileNav();
    scrollFunctions();
    drawHexagons();
    chooseCategory();
}


window.addEventListener('resize',_.debounce(()=>{
    drawHexagons();
},50));


runFuncions();