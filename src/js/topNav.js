import {aboutMe,myApp,mySkills,footer,navTopLinks,navigationTop} from './domSelector';

const normalColor ='#37a59c';
const lightColor = '#72ddd1';

const setDefaultLinkColor = ()=>{
    navTopLinks.forEach(({style})=>{
        style.color= normalColor;
    });
}

export const highlightNav = () =>{
  
    if( ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) < 0.4 &&
        ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) > -0.4 ) {
            setDefaultLinkColor();
            navTopLinks[0].style.color=lightColor; 
        }
    else if( ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) < 0.4 &&
             ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) > -0.4 ){
        setDefaultLinkColor();
        navTopLinks[1].style.color=lightColor;
    }
    else if(scrollY>mySkills.offsetTop+mySkills.offsetHeight/3){
        setDefaultLinkColor();
        navTopLinks[2].style.color=lightColor;
    }
    else{
        setDefaultLinkColor();
    }     
}



export const showTopNav = () =>{
    const {style} = navigationTop;

    if(scrollY>window.innerHeight*0.4){
        style.position = 'fixed';
        style.background = "rgba(55, 58, 61, 0.95)";
        style.animation  = 'topNavBarShow 0.5s ease-in'; 
    }
    else{
        style.position = 'absolute';
        style.background = "rgba(55, 58, 61, 0.4)";
        style.animation = '';
    }
}
