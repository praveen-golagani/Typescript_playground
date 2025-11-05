//ex1
//declaration
function feverStatus(degree:number):string;
function feverStatus(status:string):string;
//implementation
function feverStatus(param: number|string){
    if(typeof param==='number'){
        return (`Body temp - ${param}`);
    }else{
         return `patient fever status - ${param}`;
    }
}

console.log(feverStatus(102));
console.log(feverStatus("chill"))
//ex2
//declaration
function sum(a:number,b:number):number;
function sum(c:number,d:number,e:number):number;
//implementation
function sum(a:number,b:number,c?:number):number{
    if (c===undefined){
        return a+b;
    }else{
        return a+b+c;
    }
}
console.log(sum(3,6));
console.log(sum(3,6,8));
//ex3 diff return type
function cart(productName:string):string;
function cart(productCount:number):number;

function cart(product:string|number):string|number{
    if(typeof(product)=="string"){
        return 1;
    }
    return `only water is available`;
}

console.log(cart(4));
console.log(cart('coke'));
//EX4
function employee(name:string):string;
function employee(idNum:number):string;
function employee(inProbation:boolean):string;

function employee(empInfo:string|number|boolean):string{
    if(typeof(empInfo)==='string'){
        return `Entered Name- ${empInfo}`;
    }else if(typeof(empInfo)==='number'){
        return  `Entered Emp ID- ${empInfo}`;
    }else if(typeof(empInfo)==='boolean'){
        let res:string = (empInfo)? "Still in probation":"Completed probation";
        return res;
    }else{
        return "wrong input try later";
    }
}
console.log(employee("Yuvi"));
console.log(employee(12));
console.log(employee(false));