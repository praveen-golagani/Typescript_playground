// array is dynamic in size
// array with fixed is tuple
//using literal
let names:string[]=[]; //declaration
names[1]="praveen";
names[0]='hai';
names[2]='55';
names[1]='Spiderman';
names[4]='superman';
names[7]='Ironman';
//way2 pref
let place:string[]=['Shimla','Agra','Manali','Amritsar'];
//print
console.log(names);
console.log(place);
//using array keyword
let products:Array<string>=['apple','mango','22'];
let price:Array<number>=[33,66,44];
let prodPrice:Array<string|number>=[6,77,'apple','75',99,6.88];
let dataMix:Array<any>=[155,6.7,'fun',true,null];
console.log(dataMix[0]);
console.log(place[2]);
console.log('last ele',price[price.length-1]);
//for loop
for(let i=0;i<products.length;i++){
    console.log(products[i]);
}

//array length
console.log(`datamix array length ${dataMix.length}`)
// for...in loop iteration using index
console.log('for in loop');
for(let i in prodPrice){
    console.log(prodPrice[i]);
}

// for of loop iterate using values
console.log('for of loop');
for (let val of dataMix){
    console.log(val);
}

// Array with func

function itemCount(cartid:number,cartItems:string[]):number{
    console.log('cart id  - ',cartid);
    for (let val of cartItems){
        console.log(val);
    }
    return cartItems.length;
}
//passed products array
console.log('total items', itemCount(2,products));

let cars:string[] = ['BMW','TATA','Toyota', 'Volkswagen', 'Ford', 'General Motors', 'Honda', 'Hyundai','kia','Tesla'];
// search for element in array
function vehicleName(car:string):boolean{
    for(let i= 0;i<cars.length;i++){
        if (cars[i].toLowerCase()===car){
            return true;
        }
    }
    return false;
}
let carsResult:boolean = vehicleName('Tata');
console.log('car present ? ',carsResult);
// return cars array in lower case
function lowCaseCars(car:string[]):string[]{
    let lowCased:string[]=[];
    for (let i=0;i<car.length;i++){
        lowCased[i]=car[i].toLowerCase();
    }
    return lowCased;
}
console.log(cars);
console.log(lowCaseCars(cars));