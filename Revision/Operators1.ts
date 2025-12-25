let opInput1:number = 10;
let opInput2:string = '10';
// console.log(opInput1==opInput2);
// console.log(opInput1===opInput2);
// console.log(opInput1!=opInput2);
// console.log(opInput1!==opInput2);
console.log(opInput1**2);
let operInp3:number = 45;
operInp3+=2;
console.log(operInp3);
console.log(++operInp3);
console.log(operInp3++);
//console.log(typeof(opInput1)&&typeof(opInput2));
console.log(opInput1>5 && operInp3>0);
console.log(opInput1<5 && operInp3>0);
console.log(opInput1>5 || operInp3>0);

//ternary

let max:number = opInput1>operInp3?opInput1:operInp3;
console.log(`${max} is the greater.`);