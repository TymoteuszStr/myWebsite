import {canvas} from './domSelector';

// needed variables
const size = window.innerWidth/8;
const fillHexColor= 'rgba(93, 192, 184, 0.4)';
const strokeHexColor ='rgba(93, 192, 184)';
const fillSubHexColor = 'rgba(63, 162, 154, 0.4)';
const strokeSubHexColor = 'rgba(63, 162, 154,1)';
const rad3 = Math.pow(3,0.5);
const basePoints = [ {x:2, y:0.5}, {x:2+rad3/2, y:1}, {x:2+rad3/2, y:2}, {x:2, y:2.5}, {x:2-rad3/2,  y:2}, {x:2-rad3/2, y:1} ];
const skillLvl = [9,6,8,7,5,7];
const maxLvl = 10;



const drawHex = (points,fillColor,strokeColor,ctx) =>{

    ctx.beginPath();
    points.forEach(({x,y})=>{
        ctx.lineTo(x*size,y*size);
    });

    ctx.closePath();
    ctx.fillStyle=fillColor;
    ctx.fill();
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

        newSubHexPoints.push({
            x:x+xt,
            y:y+yt
        });
    });

    return newSubHexPoints;
}

export const drawHexagons = ()=>{
    //set the context and size of canvas
    const context = canvas.getContext("2d");
    canvas.height= window.innerHeight;
    canvas.width = window.innerWidth/2-10;

    drawHex(basePoints,fillHexColor,strokeHexColor,context);

    const subHexPoints = createNewSubPoints(basePoints,skillLvl);

    drawHex(subHexPoints,fillSubHexColor,strokeSubHexColor,context);
    console.log(subHexPoints);



     context.fillStyle = 'black';
     context.font = "20px 'Teko', sans-serif";
   
}


const canvasSkillsGraph = () =>{
    window.addEventListener('load',()=>{
        drawGraph();
    });

    window.addEventListener('resize',()=>{
        drawGraph();
    });

}
