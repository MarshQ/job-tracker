

// When user clicks add-btn
$("#**BUTTON**ID**").on("click", function(event) {
    event.preventDefault();
  
    // Make a newJob object
    var newJob = {
     Company: $("company").val().trim(),
     Title:  $("#***ID***").val().trim(),
    Location: $("#***ID***").val().trim(),
    Contact_Email: $("#***ID***").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newJob)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#***ID***").val("");
    $("#***ID***").val("");
    $("#***ID***").val("");
    $("#***ID***").val("");
  
  });
  
