
import {burger,navMenu,navTopLinks} from './domSelector';

export const showMobileNav = () =>{

    burger.addEventListener('click', ()=>{
        //show mobileNav
        const mobileClassOn= 'mobileNavActive';
        const mobileClassOff= 'mobileNotNavActive';
        navMenu.classList.toggle(mobileClassOn);
        navMenu.classList.contains(mobileClassOn) ? navMenu.classList.remove(mobileClassOff):navMenu.classList.add(mobileClassOff);
         // animate burger
         burger.classList.toggle('toggleNavBtn'); 
        // animate only link
        navTopLinks.forEach(({style},index)=>{
            style.animation ? style.animation = '' :
            style.animation = `showAnim 0.5s ease forwards ${index/6 + 0.2}s`;
        });
    });

}
