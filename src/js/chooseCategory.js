import {skillCategoryListItem}from './domSelector';

const resetCategoryBg = () =>{

    const border = '1px solid $my-grey';
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