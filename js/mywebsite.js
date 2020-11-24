const showMobileNav = () =>{

    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.navigation__menu-list');
    const navLinks = document.querySelectorAll('.navigation__menu-list--link');


    burger.addEventListener('click', ()=>{
        //show mobileNav
        mobileNav.classList.toggle('mobileNavActive');
        if(mobileNav.classList.contains('mobileNavActive')) mobileNav.classList.remove('mobileNotNavActive');
        else  mobileNav.classList.add('mobileNotNavActive');

       
    
        // animate only link
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
            link.style.animation=`mobileNavLinkFade 0.5s ease forwards ${index/6 + 0.2}s`;
            }

        });

         // animate burger
         burger.classList.toggle('toggleNavBtn'); 

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
    
    if(scrollY>window.innerHeight*0.4){
        navTopBar.style.position = 'fixed';
        navTopBar.style.background = "rgba(55, 58, 61, 0.95)";
        navTopBar.style.animation  = 'topNavBarShow 0.5s ease-in'; 
    }
    else{
        navTopBar.style.position = 'absolute';
        navTopBar.style.background = "rgba(55, 58, 61, 0.4)";
        navTopBar.style.animation = '';
    }

}



function setLinkColor(){
    const navLinks = document.querySelectorAll('.navigation__menu-list--link');
    navLinks.forEach((link)=>{
        link.style.color='#5dc0b8';
    });
}

const highlightNav = () =>{

    const mainPhoto = document.querySelector('.main-photo');
    const aboutMe = document.querySelector('.about-me');
    const myApp = document.querySelector('.my-app');
    const mySkills = document.querySelector('.my-skills');
    const footer = document.querySelector('.footer');
    const navLink = document.querySelectorAll('.navigation__menu-list--link');



    window.addEventListener('scroll', _.debounce(()=>{

    if( ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) < 0.4 &&
        ((aboutMe.offsetTop - scrollY)/aboutMe.offsetHeight) > -0.4 ) {
            navLink[0].style.color='#b9f7f1'; 
        }
    else if( ((myApp.offsetTop - scrollY)/myApp.offsetHeight) < 0.4 &&
    ((myApp.offsetTop - scrollY)/myApp.offsetHeight) > -0.4 ){
         navLink[1].style.color='#b9f7f1';

    }
    else if( ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) < 0.4 &&
    ((mySkills.offsetTop - scrollY)/mySkills.offsetHeight) > -0.4 ){
        navLink[2].style.color='#b9f7f1';
    }
    else{
        setLinkColor();

    }     
            
     },500));


}


const drawGraph = ()=>{
    const canvas = document.querySelector('#skillsGraph');
    const context = canvas.getContext("2d");
    
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth/2-10;
     
    const rad3 = Math.pow(3,0.5);
    const p = [ {x:2, y:0.5}, {x:2+rad3/2, y:1}, {x:2+rad3/2, y:2}, {x:2, y:2.5}, {x:2-rad3/2,  y:2}, {x:2-rad3/2, y:1} ];
    const size = window.innerWidth/8;

    context.beginPath();
	p.forEach(({x,y})=>{
        context.lineTo(x*size,y*size);
    });
    context.closePath();
    context.fillStyle='rgba(93, 192, 184, 0.4)';
    context.fill();
    context.strokeStyle='rgba(93, 192, 184)';
    context.stroke();
    // DO NAPRAWY ! jedna funkcja robi wsztstko !
    context.beginPath();
    context.lineTo(p[0].x*size, p[0].y*size + 50);
    context.lineTo(p[1].x*size-10, p[1].y*size + 10);
    context.lineTo(p[2].x*size-20, p[2].y*size - 10);
    context.lineTo(p[3].x*size, p[3].y*size - 10);
    context.lineTo(p[4].x*size+10, p[4].y*size - 10);
    context.lineTo(p[5].x*size+10, p[5].y*size +10);
    context.closePath();
    context.fillStyle='rgba(63, 162, 154, 0.4)';
    context.fill();
    context.strokeStyle='rgba(63, 162, 154,1)';
    context.stroke();
     
    context.fillStyle = 'black';
    context.font = "20px   'Teko', sans-serif";
    context.fillText("Java Script", p[0].x*size-30, p[0].y*size-10);
    context.fillText("HTML", p[1].x*size, p[1].y*size-5);
    context.fillText("CSS", p[2].x*size, p[2].y*size+15);
    context.fillText("C++", p[3].x*size-8, p[3].y*size+15);
    context.fillText("SCSS", p[4].x*size-25, p[4].y*size+15);
    context.fillText("English", p[5].x*size-35, p[5].y*size-5);


}
const canvasSkillsGraph = () =>{
    window.addEventListener('load',()=>{
        drawGraph();
    });

    window.addEventListener('resize',()=>{
        drawGraph();
    });

}


const allFunction = () =>{
    hello();
    showMobileNav();
    //showTopNav();
    canvasSkillsGraph();
    highlightNav();
}

window.addEventListener('scroll', ()=>{

    showTopNav();

});

allFunction();