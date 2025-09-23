let num1:number = 100;
let num2:number = 20;


console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1%num2);
console.log(num1/num2);
console.log(num1**num2);

//num1+=3;
let res:number=num1+=3;
console.log(res);
console.log(num2-=21);
console.log(num1-=14);
console.log(num1*=3);
console.log(num1/=2);
console.log(num1++);
console.log(++num1);
let maniRoll:number=33;
let maniRollStr:string="33";
// console.log(maniRoll==maniRollStr);
// console.log(maniRoll===maniRollStr);
// console.log(maniRoll!==maniRollStr);
//ternary
let age:number = 3;
let eligibility:boolean = age>=18?true:false;
console.log(eligibility);

//&&,||, !
let marks:number = 33;
let grade:String = marks>=35 && marks<=100? "pass":"fail"; 
console.log(grade);
let price:number = 590;
grade = (price>=80 && price<=100) || (price>=60 && price<=80)? "5 percent discount":"no discount"; 
console.log(grade);


