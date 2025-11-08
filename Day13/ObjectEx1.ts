//key, value pair [properites and behaviour]
//objext - only meth
let customer = {
    firstName: 'Praveen',
    app: 'web Application',
    country: 'India'
};
// console.log(customer.app);
// console.log(`customer name - ${customer.firstName}, uses : ${customer.app}`);

// console.log(customer['app']);
// console.log(customer['country']);
// //modify
// customer.app='vs code';
// console.log(customer.app);

export class CustomerDetails{

     printCustomerName():void {
        console.log(customer.firstName);
    }

    printDept(dept:string):void{
        console.log(`works in ${dept}`)
    }

};

 export const custObj = new CustomerDetails();

type Customers = {firstName:string, lastName:string, active:boolean, id:number};
let firstCustomer:Customers={
    firstName:'virat',
    lastName:'qa',
    active:true,
    id:18
}