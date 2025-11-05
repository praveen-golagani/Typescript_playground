//arrow with no params and return type
//no name
let team1 = ()=>{
    console.log("India");
}
team1();
//arrow with param and return type
let comicData1 = (bookName:string,bookCount:number): string=>{
    return `The 
    Comic name - ${bookName}, required stock  - ${bookCount}`;
}
console.log(comicData1('Wings of fire',500));
//arrow with implicit return- single return
let max=(num1:number,num2:number):number=>(num1>=num2)?num1:num2;
let prod=(num3:number,num4:number):number=>num3*num4;
console.log(`max num - ${max(3,8)}`);
console.log('prod - ',prod(5,9));
//arrow with optional params
let patientData1 = (name:string,bloodGroup:string,billAmount?:number)=>
{
    if(billAmount!==undefined){
        console.log(`Patient Bill - ${billAmount}`)
    }
    console.log(`Patient name - ${name}, blood group ${bloodGroup}`);
}
patientData1("Wolvaardt",'O-ve');
patientData1('Dercksen','A+ve',95.88);

let emp1=(name:string,idNum:number,place?:string):string=> `welcome ${name} has id ${idNum} comes from ${place}`;
console.log(emp1("virat",18));
console.log(emp1("virat",18,"Delhi"));
//arrow default params
let min = (num1:number,num2:number=1):number=>(num1<=num2)?num1:num2;
console.log(min(-4));
console.log(min(-8,7));
console.log(min(100));
console.log(min(100,5));
//arrow with restparams
let squad=(...player:(number|string)[]):void=>{
    console.log(player.length);
    for(let i=0;i<player.length;i++){
        console.log(`player data: ${player[i]} ${player[i+1]}`)
        i++;
    }
}
squad('virat',18,'Dhoni',7,18,'smriti',);