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
<<<<<<< HEAD
           categoryChecked = index;
           btn.style.background= '#37a59c';
           setStars();
=======
           btn.style.background= '#72ddd1';
>>>>>>> parent of f8b8eba (finished my skill section)
        })
    })
    
};