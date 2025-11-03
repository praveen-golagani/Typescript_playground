function welcomeMsg(website:string,callback:(msg:string)=>void){
    console.log("welcome to ",website);
    callback("Praveen");
}

//callback
function course(name:string):void{
    console.log(name,' is playing with Playwright');
}

welcomeMsg('udemy',course);

//ex2
function sumResult(num1:number,num2:number,callback:(num2:number)=>void){
    let sum = num1+num2;
    console.log(sum);
    square(sum);
}

//callback
function square(num2:number):void{
    console.log(num2*num2);
}

sumResult(3,5,square);
//multicallback
function sumResult2(num1:number,num2:number,callback:(num2:number)=>void,callback2:(num2:number)=>void){
    let sum = num1+num2;
    console.log(sum);
    squareRes(sum);
    cube(sum)
}

//callback
function squareRes(num2:number):void{
    console.log(num2*num2);
}
function cube(num2:number):void{
    console.log(num2*num2*num2);
}

sumResult2(3,5,squareRes,cube);