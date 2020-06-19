//BUSINESS LOGIC

//pizza constructor with size and empty array of toppings stored here
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function() {
  let start = 9;

  if (this.size === 1) {
    return start = start + 0;
  } else if (this.size === 2) {
    return start = start + 3;
  } else {
    return start = start + 6;
  } 
}

Pizza.prototype.urToppings = function() {
  
}


//USER INTERFACE AKA "THE PARTY"

$(document).ready(function() {
  $("#pizzaform").submit(function(event) {
    let toppings = $("#toppings").val();
    let size = parseInt($("#size").val());
    let finalPizza = new Pizza(size);
    let finalPrice = finalPizza.price();
    $("#yourPizza").text("Your pizza price is $" + finalPrice);
    event.preventDefault();
  });
});




