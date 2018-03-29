
$.get("/api/jobs", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "job-well-" + i);
    // Append the well to the well section
    $("#well-section").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#job-well-" + i).append("<h2>  " + data[i].job_title + "</h2>");
    $("#job-well-" + i).append("<p>Company: " + data[i].company + "</p>");
    $("#job-well-" + i).append("<p> Location:  " + data[i].location+ "</p>");
    $("#job-well-" + i).append("<p>Contact Email: " + data[i].email + "</p>");
    
    console.log(wellSection);
  }
});

