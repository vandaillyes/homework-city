//Delay code from executing until all DOM assets have been loaded.
$(document).ready(function() {

// Store list of available cities in a variable as an array.
var city = ["NYC", "SF", "LA", "ATX", "SYD"];
// Set up a variable for the number of available cities.
var count = city.length;
// Set up a variable for the starting point of the loop. (I have found out that quite conveniently, this can also serve as the index number for our array elements.)
var i = 0;

// Start the loop at starting point (0).
// Define the condition: Run the loop as many times as the number of available cities in our city array.
// Take the first city in the array and append it to the #city-type drop-down menu as an option.
// When appended, increment iteration by 1.
for (0; i < count; i++) {
  $("#city-type").append(
  "<option>" +
    city[i] +
  "</option>");
}

// Bind an anonymous function to the form.
$("#city-type").change(function() {
  // Get the value of user's choice and store it as a variable.
  var userChoice = $("#city-type").val();
  // If the user's choice is NYC, then apply the class "nyc".
  if (userChoice === "NYC") {
    $("body").attr("class","nyc");
  } else if (userChoice === "SF") { // If the user's choice is SF, then apply the class "sf".
    $("body").attr("class","sf");
  } else if (userChoice === "LA") { // If the user's choice is LA, then apply the class "la".
    $("body").attr("class","la");
  } else if (userChoice === "ATX") { // If the user's choice is ATX, then apply the class "austin".
    $("body").attr("class","austin");
  } else if (userChoice === "SYD") { // If the user's choice is SYD, then apply the class "sydney".
    $("body").attr("class","sydney");
  } else if (userChoice === "Select a City") { // If the user's choice is to go back to the start, then
    // remove any class applied on the body,
    $("body").removeAttr("class").attr("class", "");
    // and apply the black and white skyline as the background of the body.
    $("body").attr("background","url(../images/citipix_skyline.jpg) no-repeat center center fixed");
  }
});

});
