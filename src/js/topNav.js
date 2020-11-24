import {mainPhoto,aboutMe,myApp,mySkills,footer,navTopLinks,navigationTop} from './domSelector';


const setLinkColor = ()=>{
    navTopLinks.forEach((link)=>{
        link.style.color='#5dc0b8';
    });
}

export const highlightNav = () =>{

    if( ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) < 0.4 &&
        ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) > -0.4 ) {
            navTopLinks[0].style.color='#b9f7f1'; 
        }
    else if( ((myApp.offsetTop - scrollY)/myApp.offsetHeight) < 0.4 &&
    ((myApp.offsetTop - scrollY)/myApp.offsetHeight) > -0.4 ){
         navTopLinks[1].style.color='#b9f7f1';

    }
    else if( ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) < 0.4 &&
    ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) > -0.4 ){
        navTopLinks[2].style.color='#b9f7f1';
    }
    else{
        setLinkColor();

    }     

}



export const showTopNav = () =>{
    
    if(scrollY>window.innerHeight*0.4){
        navigationTop.style.position = 'fixed';
        navigationTop.style.background = "rgba(55, 58, 61, 0.95)";
        navigationTop.style.animation  = 'topNavBarShow 0.5s ease-in'; 
    }
    else{
        navigationTop.style.position = 'absolute';
        navigationTop.style.background = "rgba(55, 58, 61, 0.4)";
        navigationTop.style.animation = '';
    }
}
