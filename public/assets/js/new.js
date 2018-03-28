// this one is going to be like the CMS in author joins

$(document).ready(function () {
  // Getting jQuery references to the Application Info
  var companyInput = $("#company");
  var titleInput = $("#title");
  var locationInput = $("#location");
  var contactEmailInput = $("#contact");
  var cmsForm = $(".newJob");
  //this will be updated to usr
  //var authorSelect = $("#author");

  // Adding an event listener for when the form is submitted
  $("#addJob").on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating an application)
  var url = window.location.search;
  var jobId;
  var userId;
  // Sets a flag for whether or not we're updating an app to be false initially
  var updating = false;
  console.log(companyInput);
  // If we have this section in our url, we pull out the job  id from the url
  if (url.indexOf("?job_id=") !== -1) {
    jobId = url.split("=")[1];
    getJobData(jobId, "job");
  }
  // Otherwise if we have an job_id in our url, preset the job select box to be our job
  else if (url.indexOf("?job_id=") !== -1) {
    jobId = url.split("=")[1];
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a title, company or email
    if (!titleInput.val().trim() || !companyInput.val().trim() || !contactEmailSelect.val()) {
      return;
    }

    // Constructing a newPost object to hand to the database
    var newJob = {
      title: titleInput
        .val()
        .trim(),
      company: companyInput
        .val()
        .trim(),
      contactEmail: contactEmailInput
        .val()
        .trim(),
      location: locationInput
        .val()
        .trim(),
      // this won't work - It used to be AuthorID:authorSelect.val()  - I don't have anything that's set up to match it yet 
      // jobId: ID.val()
    };

    // If we're updating a post run updateJob to update a job
    // Otherwise run submitJob to create a whole new job
    if (updating) {
      newJob.id = jobId;
      updateJob(newJob);
    } else {
      submitJob(newJob);
    }
  }

  // Submits a new job and brings user to home page upon completion
  function submitJob(job) {
    $.post("/api/jobs", job, function () {
      window.location.href = "/home";
    });
  }


  // Gets job  data for the current job if we're editing, or if we're adding to an user's existing jobs
  function getJobData(id, type) {
    var queryUrl;
    switch (type) {
      case "job":
        queryUrl = "/api/jobs/" + id;
        break;
      
      //I don't have a link to the users anywhere else
      case "user":
        queryUrl = "/api/users/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data.JobId || data.id);
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        companyInput.val(data.company);
        locationInput.val(data.location);
        contactEmailInput.val(data.contactEmail);
        userId = data.UserId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // Function to either render a list of jobs, or if there are none, direct the user to the page
  // to create a job first
  function renderJobsList(data) {
    if (!data.length) {
      window.location.href = "/jobs";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createJobRow(data[i]));
    }
    jobSelect.empty();
    console.log(rowsToAdd);
    console.log(authorSelect);
    jobSelect.append(rowsToAdd);
    jobSelect.val(authorId);
  }

  // Creates the author options in the dropdown
  function createJobRow(job) {
    var listOption = $("<option>");
    listOption.attr("value", job.id);
    listOption.text(job.title);
    return listOption;
  }

  // Update a given post, bring user to the blog page when done
  function updateJob(post) {
    $.ajax({
        method: "PUT",
        url: "/api/jobs",
        data: post
      })
      .then(function () {
        window.location.href = "/jobs";
      });
  }
});