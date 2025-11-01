let firstInput:number = 45;
let secondInput:number = 4;

function sum(): number{
    let sumResult:number = firstInput+secondInput;
    return sumResult;
}

console.log(`Sum of ${firstInput} + ${secondInput} = ${sum()}`);

function diff(): number{
    let diffResult:number = firstInput-secondInput;
    return diffResult;
}
console.log(`Diff of ${firstInput} and ${secondInput}  is ${diff()} `);
