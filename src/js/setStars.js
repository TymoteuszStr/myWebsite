import { chooseSkills } from './chooseSkills';
import {skillsList}from './domSelector';
import {categoryChecked, skillSetList, skillsChecked} from './skillsList';


const divClassItem ="skills-demo__skills-list__item";
const divClassStar = "skills-demo__skills-list__item--stars";
const divClassName = "skills-demo__skills-list__item--name";
const itemChecked = 'item-checked';
const fullStar =  "fas";
const emptyStar = "far";
const classStar = "fa-star";


export const setStars = (index) =>{
            removeAllSkills();
            addSkills(index); 
            chooseSkills();   
}

const removeAllSkills = () => {
    const skillsListItems = document.querySelectorAll('.skills-demo__skills-list__item');
    skillsListItems.forEach((item)=>{
        item.remove();
    })
}

const addSkills = () => {  
    const category = skillSetList[categoryChecked];
    category.forEach(({ name, lvl },index)=>{
        const newSkill =  document.createElement('div');
        skillsList.appendChild( newSkill );
        newSkill.classList.add( divClassItem );
        if(skillsChecked[categoryChecked][index]) newSkill.classList.add(itemChecked);
        setSkillsNames( newSkill, name );
        setSkillsStars( newSkill, lvl ); 
    });
   
}
    
const setSkillsNames = (parentDiv,name) => {
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
    childDiv.classList.add(divClassName);
    childDiv.innerText = name;
}

const setSkillsStars = (parentDiv,lvl) => {
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
    childDiv.classList.add(divClassStar);
     for(let i=0;i<10;i++){
        const starDiv = document.createElement('div');
        starDiv.style.animation = `showAnim 1s ease forwards ${i/20 + 0.1}s`;
        childDiv.appendChild(starDiv);
        const className = (i<lvl)? fullStar : emptyStar;
        starDiv.classList.add(className);
        starDiv.classList.add(classStar);
    }
}
