import { upArrow } from "./domSelector";

export const showUpArrow = ()=>{
    (scrollY>window.innerHeight*0.4)? 
        upArrow.style.display="block": 
        upArrow.style.display="none";
}

export const upArrowClick = () =>{
    upArrow.addEventListener('click',()=>{
       window.scrollTo(0, 0);        
    })
}