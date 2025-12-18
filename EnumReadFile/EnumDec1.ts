let batchName:string = "Dec Batch"
let studentCount:number = 5;
// studentCount = "Five";
// let studentCount:string = "five";
console.log('Batch name : '+batchName+", Students joined : "+studentCount);
console.log(`Batch name : ${batchName} , Students joined : ${studentCount}`);

enum colour{'Red', 'Yellow','Green'}
let signal:colour = colour.Yellow;
let sign:colour = colour.Red;
console.log(`position of signal ${signal}`);
console.log(`position of sign ${signal}`);

const testPoints = {won:2,lost:0,draw:1};
console.log(testPoints.won);
console.log(testPoints.draw);
console.log(testPoints.lost);