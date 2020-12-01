import { checkedCounter, skillsChecked, skillSetList} from "./skillsList";
import { resetGraphButton } from "./domSelector";
import { updateSkillLvl, updateSkillTitle} from "./canvas";


export const generateNewGraph = () => {
        const arrLvl = [];
        const arrNames = [];
        for(let i = 0; i<4; i++){
            const currentCat = skillSetList[i];
            currentCat.forEach(({lvl,name},index)=>{
                if(skillsChecked[i][index]){
                     arrLvl.push(lvl); 
                     arrNames.push(name);  
                }        
            });
        }
        updateSkillTitle(arrNames);
        updateSkillLvl(arrLvl);

}

export const resetGrapt = () => {
    resetGraphButton.addEventListener('click', ()=>{
        const arrLvl = [0,0,0,0,0,0,];
        const arrNames = ['','','','','',''];
        for(let i=0; i<4; i++)
           skillsChecked[i].forEach((el, index)=>{
                skillsChecked[i].splice(index,1,0);
           })
        checkedCounter = 0;
        updateSkillTitle(arrNames);
        updateSkillLvl(arrLvl); 
        const itemChecked = document.querySelectorAll('.item-checked');  
        itemChecked.forEach(({classList})=>{
            classList.remove('item-checked');
            })
        });
}