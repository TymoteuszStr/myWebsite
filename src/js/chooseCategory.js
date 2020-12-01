import {skillCategoryListItem}from './domSelector';
import {setStars} from './setStars';
import { categoryChecked } from './skillsList';


const resetCategoryBg = () =>{

    skillCategoryListItem.forEach(({style})=>{
            style.background = '#fff';
         })
}

export const chooseCategory = () =>{
    skillCategoryListItem.forEach((btn,index)=>{
        btn.addEventListener('click', ()=>{
           resetCategoryBg();
           categoryChecked = index;
           btn.style.background= '#37a59c';
           setStars();
        })
    })
    
};