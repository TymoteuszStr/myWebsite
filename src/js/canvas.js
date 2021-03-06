import {canvas,skillsDemo} from './domSelector';

// needed variables
const context = canvas.getContext("2d");
const fillHexColor= 'rgba(93, 192, 184, 0.4)';
const strokeHexColor ='rgba(93, 192, 184)';
const fillSubHexColor = 'rgba(55, 165, 156, 0.6)';
const strokeSubHexColor = 'rgba(63, 162, 154,1)';
const rad3 = Math.pow(3,0.5);
const basePoints = [ {x:2, y:0.3}, {x:2+rad3/2, y:0.8}, {x:2+rad3/2, y:1.8}, {x:2, y:2.3}, {x:2-rad3/2,  y:1.8}, {x:2-rad3/2, y:0.8} ];
const maxLvl = 10;
let skillsLvl = [0,0,0,0,0,0]; 
let skillTitle = ['','','','','',''];
let fontStyle= "20px 'Teko', sans-serif";


const drawHex = (points,fillColor,strokeColor,ctx,size) =>{

    ctx.beginPath();
    points.forEach(({x,y})=>{
        ctx.lineTo(x*size,y*size);
    });
    ctx.closePath();
    ctx.fillStyle=fillColor;
    ctx.fill()
    ctx.strokeStyle=strokeColor;
    ctx.stroke();
}


const translateXY = (lvl,index) => {
    const trans = (maxLvl-lvl)/maxLvl;
    const cos60 = Math.cos(Math.PI/3);
    const sin60 = Math.sin(Math.PI/3);

    switch(index){
        case 0: return { xt:0, yt: trans }; break;
        case 1: return { xt: -1*sin60*trans, yt: cos60*trans }; break;
        case 2: return { xt: -1*sin60*trans, yt: -1*cos60*trans }; break;
        case 3: return { xt:0, yt: -1*trans }; break;
        case 4: return { xt: sin60*trans, yt: -1*cos60*trans  }; break;
        case 5: return { xt: sin60*trans, yt: cos60*trans }; break;
        default: return {xt:0, y:0}; break;
    } 
}

export const createNewSubPoints= (baseHexPoints,lvl) =>{
    const newSubHexPoints = [];
    baseHexPoints.forEach(({x,y},index) =>{
        const {xt,yt} = translateXY(lvl[index],index);
        newSubHexPoints.push({ x:x+xt, y:y+yt });
        
    });
    return newSubHexPoints;
}

export const drawHexagons = ()=>{
    const width = skillsDemo.offsetWidth;
    changeFontStyle(width);
    canvas.width =  width-5;
    canvas.height=  width*.7 ;
    setSkillTitle(width/4);
    const subHexPoints = createNewSubPoints(basePoints,skillsLvl);
    drawHex(basePoints,fillHexColor,strokeHexColor,context,width/4);
    drawHex(subHexPoints,fillSubHexColor,strokeSubHexColor,context,width/4);
}

export const updateSkillLvl = (newSet) =>{
    for(let i = 0 ; i<6 ; i++){
        skillsLvl.splice(i,1,(newSet[i] || 0));
    }
    drawHexagons();
}

const setSkillTitle = (size) => {
    context.fillStyle = '#303030';
    context.font = fontStyle;
    console.log(fontStyle);
    for(let i = 0 ; i<6 ; i++){
        const {x, y} = setTitlePoints()[i];
        context.fillText(skillTitle[i], x*size,y*size);
    }   
}
const changeFontStyle = (size) => {
    if(size > 500) fontStyle = "20px 'Teko', sans-serif";
    else fontStyle = "17px 'Teko', sans-serif";
}
const setTitlePoints = () => {
    const titleBasePoints = createNewSubPoints(basePoints,[11,11,11,12,12,12]);
    const titlePoints = [];
    for(let i = 0 ; i<6 ; i++){
        let leng = skillTitle[i].length;
        const {x, y} = titleBasePoints[i];
        if(i == 1 || i == 2) leng=0;
        titlePoints.push({ x:x-leng/40, y:y });
    }

    return titlePoints;
}

export const updateSkillTitle = (title) => {
    for(let i = 0 ; i<6 ; i++){
        skillTitle.splice(i,1,(title[i] || ''));
    }
    
}