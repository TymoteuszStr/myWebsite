const showMobileNav = () =>{

    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.navigation__menu-list');
    const navLinks = document.querySelectorAll('.navigation__menu-list--link');


    burger.addEventListener('click', ()=>{
        //show mobileNav
        mobileNav.classList.toggle('mobileNavActive');

        // animate only link
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
            link.style.animation=`mobileNavLinkFade 0.5s ease forwards ${index/5 + 0.3}s`;
            }

        });
    });

}

// move greetings 
const hello = () => {
    const hi = document.querySelector('.greeting--hi');
    const tym = document.querySelector('.greeting__wrap');

    hi.style.transform = 'translateX(0)';
    tym.style.transform = 'translateX(0)';

}

const showTopNav = () =>{

    const navTopBar = document.querySelector('.navigation');

    window.addEventListener('scroll', ()=>{

        if( window.innerWidth > 768){

            if(window.pageYOffset>window.innerHeight*0.8){
                navTopBar.style.position = 'fixed';
                navTopBar.style.background = "rgba(55, 58, 61, 0.9)";
                navTopBar.style.animation = 'topNavBarShow 0.5s ease-in';
    
            }
            else{
                navTopBar.style.position = 'absolute';
                navTopBar.style.background = "rgba(55, 58, 61, 0.4)";
                navTopBar.style.animation = '';
    
            }
        }
    });

}


const allFunction = () =>{
    hello();
    showMobileNav();
    showTopNav();
}

allFunction();