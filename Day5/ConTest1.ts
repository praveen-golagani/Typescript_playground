// char upper/lower
let username:string = "Praveen";
let reqChar:string = username.charAt(1);
console.log(reqChar);
if(reqChar>='A'&& reqChar<='Z'){
console.log(`true - ${reqChar} its in upper case`);
}else{
    console.log(`${reqChar} is in lower case`)
}
// multiple of 12

let inpNum:number = 156;
let multiNum:number = 12;
if(inpNum%multiNum==0){
    console.log(`${inpNum} is a multiple of ${multiNum}`);
}else{
    console.log(`${inpNum} is not a multiple of ${multiNum}`);
}
//teen
let personAge:number = 13;
let result:string = (personAge>=13 && personAge <=19) ? "teenager":"not a teen";
console.log(`the person with age ${personAge} years is a ${result}`);

//
let numericValue:number = 0;
if(numericValue>0){
    console.log(numericValue, "is positive");
}else if(numericValue<0){
    console.log(`${numericValue} is negative`);
}else{
    console.log(`${numericValue} entered`);
}

// pos and eve
let evenOdd:number = 123;
if(evenOdd>0){
    if(evenOdd%2==0){
        console.log(`${evenOdd} is even`);
    }
    else{
    console.log(`${evenOdd} is odd`);
}
}else{
    console.log("entered negative bye!!");
}

//multiple of 5 and 10
let numFiv:number = 5, numTen = 10;
let enterNum:number = 125;
if(enterNum%10==0 && enterNum%5==0){
    console.log(`${enterNum} is a multiple of ${numFiv} and ${numTen}`);
}else if (enterNum%5==0){
    console.log(`${enterNum} is multiple of ${numFiv} only`);
}else if (enterNum%10==0){
    console.log(`${enterNum} is multiple of ${numTen} only`);
}else {
    console.log(`${enterNum} is not a multiple of ${numFiv} and ${numTen}`);}