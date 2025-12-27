enum Speed{
    fast=100,
    slow,
    medium
};
//default
let ballSpeed = Speed.medium;
//let ballSpeed = Speed.fast;
//let ballSpeed = Speed.slow;
console.log(ballSpeed);

enum months{
    notfound=404,
    badrequest=400,
    created=201
}
console.log(months.badrequest);