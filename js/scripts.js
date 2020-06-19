//BUSINESS LOGIC
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaPrice = function(){
  let price = 8;

  if (this.size === "Small") {
    price = price;
  } else if (this.size === "Medium") {
    price = price + 3;
  } else {
    price = price + 4;
  }
}



//USER INTERFACE AKA "THE PARTY"

$(document).ready(function() {
  $("form").submit(function(event) {
    let size = $("#size").val();
    let topping1 = $("#topping1").val();
    let topping2 = $("#topping2").val();
    let topping3 = $("#topping3").val();
    let yourPizza = new Pizza(toppings, size);
    let yourPizzaPrice = yourPizza.price();
  });
});