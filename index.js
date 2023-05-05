const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function checkout(customer) {

    //calculate refill total

    let total = calcRefillTotal(customer['refills'], customer['pricePerRefill']);
    // console.log(total)
    //calculate subscription discount
    if (customer.subscription) {
        total = calcSubsDiscount(total);    
        // console.log("subs discnt : ", total)
    } 
    
    //calculate coupon discount
    if (customer.coupon) {
        total = calcCouponDiscount(total);
        // console.log("coupon discnt : ", total)
    }
    
    //log grand total
    console.log("your grand total is $", total)
    //return grand total
    return total

}

function calcRefillTotal(refills, price) {
    return refills * price;
}

function calcSubsDiscount(total) {
    return total * .75;
}

function calcCouponDiscount(total) {
    return total - 10;
}

console.log("\ntimmy ==> \n")
checkout(timmy)
console.log("\nsarah ==> \n")
checkout(sarah)
console.log("\nrocky ==> \n")
checkout(rocky)