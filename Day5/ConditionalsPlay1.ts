let charInput = '@';
charInput = charInput.toLocaleLowerCase();
let vowelArray:string[] = ['a','e','i','o'];
if(vowelArray.includes(charInput)){
    console.log(`${charInput} is vowel`);
}else if(charInput >= 'a' && charInput<= 'z'){
    console.log(`${charInput} is consonant`);
}else{
    console.log(`${charInput} is not an alphabet`);
}


let familySize:number = 2;
let plannedDistanceToDrive:number = 100;

function recommendedCar(famSize:number, planDistDrive:number) {
if (famSize<=4){
   return (planDistDrive<200) ?  'Tesla': 'Toyota Camry';      
   }
return 'Minivan';
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));