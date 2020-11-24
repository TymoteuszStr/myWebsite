const maxLvl = 10;


const translateXY = (lvl,index) => {
    switch(index){
        case 0: return {xt:-1*((maxLvl-lvl)*0.1),yt: 0}; break;
        case 1: return {xt:2,yt: 0}; break;
        case 2: return {xt:-1*((maxLvl-lvl)*0.1),yt: 0}; break;
        case 3: return {xt:-1*((maxLvl-lvl)*0.1),yt: 0}; break;
        case 4: return {xt:-1*((maxLvl-lvl)*0.1),yt: 0}; break;
        case 5: return {xt:-1*((maxLvl-lvl)*0.1),yt: 0}; break;
        default: return {xt:0, y:0}; break;
    } 
}

// test('should reaturn {x , y } translated', 
// ()=>{
//     expect(translateXY(10,0)).toStrictEqual({xt:0,yt:0});
// })