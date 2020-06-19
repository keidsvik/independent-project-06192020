//BUSINESS LOGIC


//USER INTERFACE AKA "THE PARTY"

$(document).ready(function() {
  $("form").submit(function(event) {
    let toppings = $("#toppings").val();
    let size = $("#size").val();
    let yourPizza = new Pizza(size, toppings);
    let pizzaPrice = yourPizza.price();
    console.log(pizzaPrice);
  });
});



