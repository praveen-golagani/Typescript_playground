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