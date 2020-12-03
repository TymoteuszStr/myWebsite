import { warning } from "./domSelector";
import { generateNewGraph } from "./generateNewGraph";
import { categoryChecked, checkedCounter, skillsChecked } from "./skillsList";
const MaxSkills = 6;
const itemChecked = 'item-checked';

export const chooseSkills = () =>{
    const items = document.querySelectorAll('.skills-demo__skills-list__item');
    items.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            (item.classList.contains(itemChecked))? uncheckItem(item,index) : checkItem(item,index);
            generateNewGraph();
        });
    });
    
};

const checkItem = ({classList},index)=>{
    const currentCategory = skillsChecked[categoryChecked];
    const {style} = warning;
    if(checkedCounter<MaxSkills){
        classList.add(itemChecked);
        checkedCounter++;
        currentCategory.splice(index,1,1);
    }
    else{
       warning.style.display="block";
       //warning.style.animation = "fade 1s ease forwards"
        setTimeout(()=>{
            style.animation = "fade 1s ease forwards"
            setTimeout(()=>{ 
                style.animation = "showAnim 1s ease-in-out"
                style.display = "none"
            },1000);
        },2000)
    }
}
const uncheckItem = ({classList},index)=>{
    const currentCategory = skillsChecked[categoryChecked];
    classList.remove(itemChecked);
    checkedCounter--;
    currentCategory.splice(index,1,0);
}