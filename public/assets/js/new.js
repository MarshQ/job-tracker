$("#addJob").on("click", function (event) {
  event.preventDefault();
  var newJob = {
    company:  $("#company").val().trim(),
    title: $("#title").val().trim(),
    location:  $("#location").val().trim(),
    email: $("#contact").val().trim(),
  };

  console.log(newJob);

  submitJob(newJob);

  function submitJob(newJob) {
    $.post("/api/jobs", newJob, function () {
        // console.log(data);
      });
    };
  $("#company").val("");
  $("#title").val("");
  $("#location").val("");
  $("#contact").val("");
});