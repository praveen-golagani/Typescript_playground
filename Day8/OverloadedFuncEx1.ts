function feverStatus(degree:number):string;
function feverStatus(status:string):string;

function feverStatus(param: number|string){
    if(typeof param==='number'){
        return (`Body temp - ${param}`);
    }else{
         return `patient fever status - ${param}`;
    }
}

console.log(feverStatus(102));
console.log(feverStatus("chill"))