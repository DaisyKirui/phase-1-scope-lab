var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName.toUpperCase);
}
function setBestCustomer(){
    bestCustomer = "not bob";
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Tony"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "Leon"
    console.log(leastFavoriteCustomer);
}