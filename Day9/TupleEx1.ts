// fixed
let tupEX1:[number,string];
tupEX1 = [4,'77'];
let bike:[string,string,number,any,boolean]=['praveen','g',28,false,true];
for(let i=0;i<tupEX1.length;i++){
    console.log(tupEX1[i]);
}
// for value of
for (let val of bike){
    console.log(val);
}
// for in
for (let i in bike){
    console.log(bike[i]);
}
// tuple ex2 - tuple of tuples
let choco:[number,string][] = [[4,'ant'],[66,'man'],[100,'marks']];
console.log(choco[1]);
console.log(choco[0][1]);
console.log(choco[2]);
console.log(choco[1][0]);
console.log('---');
for (let i=0;i<choco.length;i++){
        for(let j=0;j<choco[i].length;j++){
            console.log(choco[i][j]);
        }
}
console.log('---');
//tuple ex3
let bikes:[number,string,string][] = [[4,'ant','honda'],[66,'man','suzuki'],[100,'marks','ola']];
for (let i=0;i<bikes.length;i++){
        for(let j=0;j<bikes[i].length;j++){
            console.log(bikes[i][j]);
        }
}