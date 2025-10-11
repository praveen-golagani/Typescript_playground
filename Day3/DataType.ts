let age:number = 99;
let price:number = 39.43;
age = "ninety nine";
let username:string = "praveen";
console.log("age is : ",age);
console.log("Datatype is",typeof(age));
console.log('price is',price);
console.log(`person aged ${age} and account balance ${price}`);
console.log(typeof(price));
console.log(typeof age);
console.log(typeof(username));
console.log("hello,",username,price);
let isMarried:boolean = false;
console.log("is praveen married : ",isMarried);
let marritalStatus:string = `is ${username} married ? : ${isMarried}`;
console.log(marritalStatus);
let demoVar:any = "funny";  //any
console.log(typeof demoVar);
demoVar = 22;
console.log(typeof demoVar);
demoVar = true;
console.log(typeof demoVar);
demoVar = 334.66;
console.log(typeof demoVar);

//union
console.log("----union----")
let fast: number | boolean | string;
fast = 100;
console.log(typeof fast);
fast = true;
console.log(typeof fast);
fast = "praveen";
console.log(typeof fast);
// null.undefined
let enemy:null=null;
let enemy2:undefined = undefined;
console.log(enemy);
console.log(enemy2);