// var let const
/*  var is function scope
 let is block scope
 const is block and global scope 
select code lines and alt+shift+a multi line comment*/
function welcome(){
    var person = "var function scope person";
    const maxMarks = 100;
    let automationTool = "playwright opted";
    if(true){
        console.log("block started");
        console.log(person);
        var name = "praveen";
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