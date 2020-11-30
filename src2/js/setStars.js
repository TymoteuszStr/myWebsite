import {skillCategoryListItem,skillsList}from './domSelector';
import {skillsNameList, skillsStarList} from './skillsList';


const divClassItem ="skills-demo__skills-list__item";
const divClassStar = "skills-demo__skills-list__item--stars";
const divClassName = "skills-demo__skills-list__item--name";
const fullStar = "fas fa-star";
const emptyStar = "far fa-star";


export const setStars = () =>{
    skillCategoryListItem.forEach((btn,index)=>{
        btn.addEventListener('click', ()=>{
            removeAllSkills();
            addSkills(index);
          
        })
    })
    
}

const removeAllSkills = () => {
    const skillsListItems = document.querySelectorAll('.skills-demo__skills-list__item');
    skillsListItems.forEach((item)=>{
        item.remove();
    })
}

const addSkills = (index) => {  
    const category = skillsNameList[index];
    let item;
    for(item in category){
        const newSkill =  document.createElement('div');
        skillsList.appendChild(newSkill);
        newSkill.classList.add(divClassItem);
        setSkillsNames(newSkill,category[item]);
       // setSkillsStars(newSkill,index);
    }; 
}
    
const setSkillsNames = (parentDiv,name) => {
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
    childDiv.classList.add(divClassName);
    childDiv.innerText = name;
}

const setSkillsStars = (parentDiv,i,index) => {
    
    //console.log(i,index);
   // const {name} = skillsStarList[index];
    // const category = skillsStarList[index];
    // const childDiv = document.createElement('div');
    // parentDiv.appendChild(childDiv);
    // childDiv.classList.add(divClassStar);

    // for(stars in category){
    //     const star = document.createElement('div');
    //     childDiv.classList.add(fullStar);
    // }



}
