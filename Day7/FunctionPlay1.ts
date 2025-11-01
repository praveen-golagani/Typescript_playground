// void return type, no params
function greetings(): void{
    console.log("Welcome to Praveen's playground");
}

greetings();

// with params and return type

function addNumbers(x:number,y:number,z:number): number{
    return x+y+z;
}

let result:number = addNumbers(7,4,99);
console.log("sum is : ",result);
console.log(typeof(result));
//console.log(addNumbers(5,7));
//... Rest parameters  - Donot restrict the number of values that we pass to a function with the help of array.
//with return type
function productNumbers(...x:number[]): number{
    let sum:number = 1;
    for(let i=0;i<x.length;i++){
        sum*=x[i];
    }
    return sum;
}
console.log('product of the inputs : ',productNumbers(1,4,5,6,8));
//without return
function indivWelcome(...namewel:String[]){
    for (let i=0;i<namewel.length;i++){
    console.log('welcome',namewel[i])
    if(namewel.length==i+1){
      console.log('Jai !!',namewel)  
    }
    }
}
indivWelcome('ram','sita','laxman','hanuma');
