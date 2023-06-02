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

let planet = "Saturn"
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
    message = `You are on ${planet}. We do not service ${planet} yet!`
}
console.log(message)

document.getElementById("planet").innerHTML += message // let messageの後、条件設定後に置く


//switch EX2 with stacking cases
let answer = "b"

switch(answer){
    case "a":
    case "d":
    case "c":
        document.getElementById("quiz").innerHTML += "Incorrect Answer, please try it again."
    break
    case "b":
        document.getElementById("quiz").innerHTML += "Perfect, you got it right!"
}
