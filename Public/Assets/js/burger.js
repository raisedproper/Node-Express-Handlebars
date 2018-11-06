// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {  

    $(".purchased").on("click", function(event) {
      event.preventDefault();
      var id = $(this).data("id");
      var eaten = $(this).data("neweaten");
      var devouredOrNot = { devoured: eaten };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredOrNot
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".personalize").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
    
      console.log($("#burgerForm").val().trim());
    
      var newBurger = {
        burger_name: $("#burgerForm").val().trim(),
        devoured: 0
      };
    
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Complicated Order!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});