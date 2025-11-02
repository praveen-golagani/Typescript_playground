//no name ,param and return type
let normalWelcome = function(){
    console.log("welcome");
}
normalWelcome();
// no name, param with return
let greet = function():string{
    return "Good day";
}
console.log(greet());

//with params
let sumNum = function(num1:number,num2:number,msg:string){
    console.log(num1+num2,'hai');
}
sumNum(5,4,'praveen');