import {showTopNav,highlightNav} from './topNav';

export const scrollFunctions =() =>{
    
    window.addEventListener('scroll', ()=>{ 
        showTopNav();
    });
    window.addEventListener('scroll', _.debounce(()=>{ 
        highlightNav();
    },500));
};