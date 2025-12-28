//  anony  for ..of   -
let vowelCount2 = function(word:string):string{
    let count:number = 0;
    const vowels=['a','e','i','o','u'];
    for(const char of word.toLowerCase()){
        if(vowels.includes(char)){
           count++; 
        }
    }
    return `vowel count in ${word} : ${count}`; 
}
console.log(vowelCount2('apple'));


//named func
function fprac1Month(a:number):string{
    //skipped using break
    switch(a){
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "March";
        case 4:
            return "Apr";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "Aug";
        case 9:
            return "Sept";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
        default:
            console.log("Wrong input - Please enter any from 1-12");
    }
    return "Thank you";
}
//enter 1-12
console.log(fprac1Month(99));

//arrow
let fp1Num:number = 5
let p1Cube=(num:number):number=>num**3;

console.log(`cube of ${fp1Num} : ${p1Cube(fp1Num)}`);

let p1square=(num:number):number=>{
    return num**2;
}
console.log(`square of ${fp1Num} : ${p1square(fp1Num)}`);

