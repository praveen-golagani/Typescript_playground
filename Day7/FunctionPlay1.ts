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
// multiple type of params
function studentDetails(...details:(number | string)[]){
    console.log('number of inputs',details.length);
    for(let i=0;i<details.length;i++){
        // incremented just to display count as index starts from 0
        console.log(`Input ${i+1} ${details[i]}`);
    }
    console.log('The details entered are - ' ,details);
}
studentDetails('Praveen', 101, 99, 'Automation','Typescript','Day',7,'play');
//optional params
function cricketScore(score:number,totalOvers:number,wickets:number,team?:string,bastman?:string){
    if(team!=undefined){
        console.log(team);
    }else{
        console.log('Just a Practice match',bastman);
    }
    console.log(`Score: ${score},wic: ${wickets}, Overs: ${totalOvers}`)
}

cricketScore(229,38,3,'India','Yuvi');
cricketScore(229,38,3,undefined,'Yuvi');
cricketScore(330,50,8);
//named function with default params
function maxNum(num1:number,num2=100):void{
    let max = num1>=num2?num1:num2;
    console.log(max, 'is greater number')
}
maxNum(45);
maxNum(300,500);
maxNum(100);