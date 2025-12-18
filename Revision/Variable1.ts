function var1Welcome():void{
    if(true){
        let greet1:string = "Day ! SDET";
        const welcome1:string = "Good";
        console.log(` Hey${welcome1} ${greet1} `);
       // console.log(flag);
    }
    //console.log(` Hey${welcome1} ${greet1} `);
    let flag:boolean = true;
    const v1Num:number = 5;
    console.log('hey const - '+v1Num+", flag status - "+flag);
}

var1Welcome();

let v1Code:any = 'fun';
v1Code = 55;
//any disables type check -avoid
console.log(v1Code);
//union -flexibility
let v1Count:string|number = 2 ;
console.log(v1Count);
v1Count = "two";
console.log(v1Count);