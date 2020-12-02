import { upArrow } from './domSelector';
import {showTopNav,highlightNav} from './topNav';
import { showUpArrow } from './upArrow';

export const scrollFunctions =() =>{
    window.addEventListener('scroll', _.debounce(()=>{ 
        highlightNav();
        showTopNav();
        showUpArrow();      
    },10));
};

