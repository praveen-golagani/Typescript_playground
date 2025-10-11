// var let const
/*  var is function scope
 let is block scope
 const is block and global scope 
select code lines and alt+shift+a multi line comment*/

function funTask(){
    if(true){
        let hostelFood1:string = "South Special";  // block scope
        var hostelFood2:string = "Sambar idli"; //func scope
        const hostelRating:number = 2; //block scope
        console.log(`Our daily menu is : ${hostelFood2} and ${hostelFood1} , my rating out of 5 is : ${hostelRating}`);
    }
    //console.log(`Our daily menu is : ${hostelFood2} and ${hostelFood1} , my rating out of 5 is : ${hostelRating}`);
    console.log(`Our daily menu is : ${hostelFood2}`);
}
function welcome(){
    var person:string = "var function scope person";
    const maxMarks = 100;
    let automationTool = "playwright opted";
    if(true){
        console.log("block started");
        console.log(person);
        var name:string = "praveen";
        console.log(name);
        const passMarks = 30;
        let sdet = "playwright, restassured, java, typescript, appium";
        console.log(maxMarks);
        console.log(automationTool);
        console.log(passMarks);
        console.log(sdet);
        console.log("block completed");

    }
    console.log(person); // func scope
    console.log(name); //function scope
    console.log(maxMarks); // block scope
    console.log(automationTool); // block scope
   // console.log(passMarks); // block scope - here inner block defined not available to outer block
   //  console.log(sdet); // // block scope inner

}

welcome();
funTask();