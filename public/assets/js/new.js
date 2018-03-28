// this one is going to be like the CMS in author joins

$(document).ready(function() {
  // Getting jQuery references to the Application Info
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  var authorSelect = $("#author");

    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", handleFormSubmit);
    // Gets the part of the url that comes after the "?" (which we have if we're updating a n application)
    var url = window.location.search;

  var jobId;
  // Sets a flag for whether or not we're updating an app to be false initially
  var updating = false;

    // If we have this section in our url, we pull out the job  id from the url
  if (url.indexOf("?job_id=") !== -1) {
   jobId = url.split("=")[1];
    getJobData(jobId, "job");
  }

    // Getting the Jobs
    getJobs();