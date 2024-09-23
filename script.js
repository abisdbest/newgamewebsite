// document.addEventListener("DOMContentLoaded", function () {
//   // Check local storage to see if the survey was filled out or displayed
//   if (!localStorage.getItem("surveyFilled") && !localStorage.getItem("surveyDisplayed")) {
//     // Create the survey container div
//     var surveyContainer = document.createElement("div");
//     surveyContainer.id = "survey-container";
//     surveyContainer.style.display = "none"; // Hide it initially

//     // Create the iframe element
//     var iframe = document.createElement("iframe");
//     iframe.id = "surveylegend-survey";
//     iframe.src = "https://s.surveylegend.com/-O5loNC1IX3UqUR-0XZ4";
//     iframe.width = "80%"; // Adjust the width as necessary
//     iframe.height = "500px"; // Adjust the height as necessary
//     iframe.loading = "lazy";
//     iframe.style.border = "0";
//     iframe.style.margin = "0 auto";

//     // Append the iframe to the survey container
//     surveyContainer.appendChild(iframe);

//     // Append the survey container to the body
//     document.body.appendChild(surveyContainer);

//     // Apply CSS for positioning and styling
//     surveyContainer.style.position = "fixed";
//     surveyContainer.style.top = "50%";
//     surveyContainer.style.left = "50%";
//     surveyContainer.style.transform = "translate(-50%, -50%)";
//     surveyContainer.style.width = "80%";
//     surveyContainer.style.maxWidth = "600px"; // Adjust width
//     surveyContainer.style.height = "auto";
//     surveyContainer.style.zIndex = "9999"; // Ensure it appears on top
//     surveyContainer.style.backgroundColor = "white";
//     surveyContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//     surveyContainer.style.padding = "20px";
//     surveyContainer.style.borderRadius = "10px";

//     // Show the survey container
//     surveyContainer.style.display = "block";
    
//     // Set a flag in local storage to indicate the survey has been displayed
//     localStorage.setItem("surveyDisplayed", "true");

//     // Listen for submission in the iframe
//     iframe.onload = function () {
//       // Add event listener to detect form submission within the iframe
//       window.addEventListener('message', function (event) {
//         if (event.origin === 'https://s.surveylegend.com') { // Adjust the origin as necessary
//           if (event.data === 'surveySubmitted') {
//             localStorage.setItem('surveyFilled', 'true');
//             surveyContainer.style.display = 'none';
//           }
//         }
        
//         // Check if the specific local storage key is set
//         if (localStorage.getItem("surveylegend_participation_-O5loNC1IX3UqUR-0XZ4")) {
//           // Remove the iframe and container if the key has a value
//           surveyContainer.remove();
//         }
//       });
//     };
//   }
// });
