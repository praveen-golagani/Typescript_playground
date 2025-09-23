let passMarks:number = 40;
let maxMarks:number = 100;
let studentMarks = 51;
if(studentMarks>=passMarks){
    if(studentMarks>=80 && studentMarks <=100){
        console.log("grade A");
    }else if(studentMarks>=60){
        console.log("grade B");
    }else if(studentMarks>=50){
        console.log("grade C");
    }else{
        console.log("grade D");
    }

}else{
    console.log("sudent failed");
}



