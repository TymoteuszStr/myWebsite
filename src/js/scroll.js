import {showTopNav,highlightNav} from './topNav';

export const scrollFunctions =() =>{
    window.addEventListener('scroll', _.debounce(()=>{ 
        highlightNav();
        showTopNav();
    },50));
};