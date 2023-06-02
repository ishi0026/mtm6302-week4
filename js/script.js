console.log("JS is here");

const region ="Canada"

if(region==="Canada"){
    console.log("You are seeing Canadian version of this site")
}

let price = 20
const shippingFee = 15
let cartTotal

if(price >= 50) {
    cartTotal = price
   } else {
       cartTotal = price + shippingFee
    }

// console.log(shippingFee);
document.getElementById("cart1").innerHTML += "Your cart total is " + cartTotal // innerHTML error??→""が無かった

price = 105
const discount = 0.15

// if(price >= 100) {
//     cartTotal = price - (price * discount)
// } else if (price >= 50){
//     cartTotal = price
// } else {
//     cartTotal = price + shippingFee
// }
// console.log(cartTotal)

//2
document.getElementById("cart2").innerHTML += "Your cart total is " + cartTotal

if(price >= 100) {
    cartTotal = price - (price * discount)
} else if (price >= 50){
    cartTotal = price
} else {
    cartTotal = price + shippingFee
}
console.log(cartTotal)



//switch

let planet = "Mars"
let message

switch(planet){
    case "Earth":
    message = "Welcome to the third Planet!"
    break
    case "Mars":
    message = "Welcome to the red planet!"
    break
    case "Jupiter":
    message = "Welcome to the largest planet!"
    break
    default:
    message = "We do not service in this planet!"
}
console.log(message)