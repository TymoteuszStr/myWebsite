import './style/main.scss';
import {hello} from './js/animations';
import {showMobileNav} from './js/mobileNav';
import {scrollFunctions} from './js/scroll';
import {drawHexagons} from './js/canvas';
import {chooseCategory} from './js/chooseCategory';
import {chooseSkills} from './js/chooseSkills'
import { resetGrapt } from './js/generateNewGraph';


const runFuncions = () =>{
    hello();
    showMobileNav();
    scrollFunctions();
    drawHexagons();
    chooseCategory();
    chooseSkills();
    resetGrapt();
}


window.addEventListener('resize',_.debounce(()=>{
    drawHexagons();
},50));


runFuncions();