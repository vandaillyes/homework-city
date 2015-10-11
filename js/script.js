//Delay your code from executing until all DOM assets have been loaded
$(document).ready(function() {

    // Locate and bind an anonymous function to the form
    $("#submit-btn").click(function(event){
      event.preventDefault();// Prevent default action
      // Get the value of user's input and store it as a variable
      var city = $("#city-type").val();
      // Ensure user's input is always treated as a string
      city = city.toString();

      // If user inputs a variation of "NY", remove any class already applied and then apply the .nyc class on the body
      if(city === "New York" || city === "New York City" || city === "NYC") {
        removeClassAttribute();
        $("body").addClass("nyc");
        //Reset the value field
        $("#city-type").val("");
      } else if(city == "San Francisco" || city === "Bay Area" || city === "SF") { // If user inputs a variation of "SF", apply the .sf class on the body
        removeClassAttribute();
        $("body").addClass("sf");
        //Reset the value field
        $("#city-type").val("");
      } else if(city === "Los Angeles" || city === "LA" || city === "LAX") { // If user inputs a variation of "LA", remove any class already applied and then apply the .la class on the body
        removeClassAttribute();
        $("body").addClass("la");
        //Reset the value field
        $("#city-type").val("");
      } else if(city === "Austin" || city === "ATX") { // If user inputs a variation of "Austin", remove any class already applied and then apply the .austin class on the body
        removeClassAttribute();
        $("body").addClass("austin");
        //Reset the value field
        $("#city-type").val("");
      } else if(city === "Sydney" || city === "SYD") { // If user inputs a variation of "Sydney", remove any class already applied and then apply the .austin class on the body
        removeClassAttribute();
        $("body").addClass("sydney");
        //Reset the value field
        $("#city-type").val("");
      } else { //If user inputs anything other than the specified values (e.g. a random string or nothing), then display a pop-up box
        alert("Not a valid city name");
      }
    });
    // Remove any class already applied on the body
    function removeClassAttribute () {
      $("body").removeAttr("class").attr("class", "");
    }

});
