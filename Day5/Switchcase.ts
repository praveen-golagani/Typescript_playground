// break, continue juumping statements
// vowels
let vowelInput:string = 'f';
switch(vowelInput.toLocaleLowerCase()){
    case 'a': console.log(`${vowelInput} is vowel`);
        break;
    case 'e':console.log(`${vowelInput} is vowel`);
        break;
    case 'i':console.log(`${vowelInput} is vowel`);
        break;
    case 'o':console.log(`${vowelInput} is vowel`);
        break;
    case 'u':console.log(`${vowelInput} is vowel`);
        break;
    default:
        console.log(`${vowelInput} is consonent`);  
}

// switch ex
let trafficLight: string = "YELLOW";
switch (trafficLight.toLocaleLowerCase()) {
    case "green":
        console.log("Go");
        break;
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("caution or slowdown");
        break;
    default:
        console.log("free way lets race !!")

}

let day:number = 10;
switch (day) {
    case 1:
        console.log("saturday weekend chill!");
        break;
    case 2:
        console.log("sunday funday");
        break;
    default:
        console.log("monday - friday workday")
}