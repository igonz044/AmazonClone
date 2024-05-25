// product 1 
// const basketball = {
//     price: 2095,
//     ['delivery-time']: '3 days' 
// };
// product 2 
// const socks = {
//     price: 1500,
//     ['delivery-time']: '1 day'
// }
//Product object
const products = {
    basketball: {
        name: "basketball",
        price: 2095,
        ['delivery-time']: '3 days'
    },
    socks: {
        name: "socks",
        price: 1500,
        ['delivery-time']: '1 day'
    }
}

//Increase product price 
console.log(products.basketball.price + 500);
console.log(products.basketball['delivery-time']);

//Return least expensive product
function comparePrice(product1, product2){
    if(product1>product2){
        result = product1;
    }else{result = product2;}
    return result;
}
console.log(comparePrice(products.basketball.price, products.socks.price));

console.log("HI".toLowerCase());
console.log("Hi".repeat(5));