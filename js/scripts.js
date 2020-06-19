//USER INTERFACE AKA "THE PARTY"

$(document).ready(function() {
  $("#pizzaform").submit(function(event) {
    let toppings = $("#toppings").val();
    let size = parseInt($("#size").val());
    let completePizzaOrder = new Pizza(size, toppings);
    let pizzaOrderPrice = completePizzaOrder.price();
    console.log(pizzaOrderPrice);
    event.preventDefault();
  });
});



//BUSINESS LOGIC

//object literal to store pizza sizes and prices for toppings
//let pizzaPrices = {
  //small: 9,
  //medium: 12,
  //large: 15,
  //toppings: 1,
//}

//pizza constructor with size and array of toppings stored here
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

//Pizza.prototype.addATopping = function(topping) {
 // this.toppings.push(topping);
//}

Pizza.prototype.price = function() {
  let priceBase = 9

  if (size === 1) {
    priceBase = 9;
  } else if (size === 2) {
    priceBase = priceBase + 3;
  } else {
    return priceBase = priceBase + 6;
  } 
   console.log(priceBase);
}


