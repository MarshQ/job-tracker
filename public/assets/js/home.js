$(document).ready(function () {

  $.get("/api/jobs", function (data) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<tr>");
      row.addClass("rowData");

      row.attr("id", "job-row-" + i);

      $("#tableRow").append(row);

      $("#job-row-" + i).append("<td>" + data[i].job_title + "</td>");
      $("#job-row-" + i).append("<td>" + data[i].company + "</td>");
      $("#job-row-" + i).append("<td>" + data[i].location + "</td>");
      $("#job-row-" + i).append("<td>" + data[i].email + "</td>");
      console.log(row);
    };
  });
});



// 
//   // Getting references to the name inout and jobcontainer, as well as the table body
//   var company = $("#company");
//   var title = $("#title");
//   var location = $("#location");
//   var contactEmail = $("#contact");
//   var jobsContainer = $(".app-table");

//   // Adding event listeners to the form to create a new object, and the button to delete an Application

//   // $(document).on("submit", "#addJob", handleJobFormSubmit);
//   $(document).on("click", ".delete-job", handleDeleteButtonPress);

//   // Getting the intiial list of Applications
//   getJobs();

//   // A function to handle what happens when the form is submitted to create a new Application
//   function handleJobFormSubmit(event) {
//     event.preventDefault();

//     // Don't do anything if the Title field hasn't been filled out
//     if (!titleInput.val().trim().trim()) {
//       return;
//     }
//     // Calling the upsertJob function and passing in the value of the name input
//     upsertJob({
//       title: titleInput
//         .val()
//         .trim()
//     });
//   };

//   // A function for creating a Job Calls  upon completion
//   function upsertJob(jobData) {
//     $.post("/api/jobs", jobsData)
//       .then(getjobs);
//   };

//   // Function for creating a new list row for Jobs
//   function createJobRow(jobData) {
//     console.log(jobData);
//     var newTr = $("<tr>");
//     newTr.data("job", jobData);
//     newTr.append("<td>" + jobData.title + "</td>");
//     newTr.append("<td>" + jobData.company + "</td>");
//     newTr.append("<td>" + jobData.location + "</td>");
//     newTr.append("<td>" + jobData.contactEmail + "</td>");

//     //I DON'T KNOW IF THIS WORKS! It should take you to the update page
//     newTr.append("<td><a href='/new?job_id=" + jobData.id + "'>Update your post</a></td>");

//     newTr.append("<td><a style='cursor:pointer;color:red' class='delete-job'>Delete Application</a></td>");
//     return newTr;
//   };

//   // Function for retrieving jobs  and getting them ready to be rendered to the page
//   function getJobs() {
//     $.get("/api/jobs", function (data) {
//       var rowsToAdd = [];
//       for (var i = 0; i < data.length; i++) {
//         rowsToAdd.push(createJobRow(data[i]));
//       }
//       renderJobList(rowsToAdd);
//       titleInput.val("");
//     });
//   }

//   // A function for rendering the list of jobs to the page
//   function renderJobList(rows) {
//     jobList.children().not(":last").remove();
//     jobContainer.children(".alert").remove();
//     if (rows.length) {
//       console.log(rows);
//       jobList.prepend(rows);
//     } else {
//       renderEmpty();
//     }
//   }

//   // Function for handling what to render when there are no jobs
//   function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("Let's get you organized and get you a job!");
//     authorContainer.append(alertDiv);
//   }

//   // Function for handling what happens when the delete button is pressed
//   function handleDeleteButtonPress() {
//     var listItemData = $(this).parent("td").parent("tr").data("job");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/jobs/" + id
//     })

//       .then(getJobs);
//   }
// });