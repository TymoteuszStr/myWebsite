import {skillCategoryListItem}from './domSelector';

const resetCategoryBg = () =>{

    skillCategoryListItem.forEach(({style})=>{
            style.background = '#fff';
         })
}

export const chooseCategory = () =>{


    skillCategoryListItem.forEach((btn)=>{
       btn.addEventListener('click', ()=>{
           resetCategoryBg();
           btn.style.background= '#72ddd1';
        })
    })
    
};