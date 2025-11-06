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