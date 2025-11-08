//key, value pair


let customer = {
    firstName: 'Praveen',
    app: 'web Application'
};
console.log(customer.app);
console.log(`customer name - ${customer.firstName}, uses : ${customer.app}`);

export class CustomerDetails{

     printCustomerName():void {
        console.log(customer.firstName);
    }
};