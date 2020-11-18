const showMobileNav = () =>{

    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.navigation__menu-list');
    const navLinks = document.querySelectorAll('.navigation__menu-list--link');

    burger.addEventListener('click', ()=>{
        mobileNav.classList.toggle('mobileNavActive');

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



const allFunction = () =>{
    showMobileNav();
}

allFunction();