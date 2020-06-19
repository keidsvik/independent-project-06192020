//BUSINESS LOGIC
function Pizza() {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.pizzaPrice

function Toppings() {
  this.toppingName;
}

let pizzaPrices = {
  small: 9,
  medium: 12,
  large: 15,
  toppings: 1,
}

//USER INTERFACE AKA "THE PARTY"

$(document).ready(function() {
  $("#pizzaform").submit(function(event) {
    let toppings = $("#toppings").val();
    let size = $("#size").val();
    let yourPizza = new Pizza(size, toppings);
    let pizzaPrice = yourPizza.price();
    console.log(pizzaPrice);
  });
});



