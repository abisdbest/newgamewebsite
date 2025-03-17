// document.addEventListener("DOMContentLoaded", function () {
//   // Check local storage to see if the survey was filled out or displayed
//   if (!localStorage.getItem("surveyFilled") && !localStorage.getItem("surveyDisplayed")) {
//     // Create the survey container div
//     document.body.style.overflow = 'hidden';
//     document.body.style.pointerEvents = 'none';

//     var surveyContainer = document.createElement("div");
//     surveyContainer.id = "surveyframe"
//     surveyContainer.innerHTML = `<iframe src="https://s.surveylegend.com/-O5loNC1IX3UqUR-0XZ4" style="
//     pointer-events: auto;
//     position: fixed;
//     height: 80%;
//     width: 50%;
//     left: 25%;
//     top: 10%;
//     z-index: 999;
//     border: none;
//     border-radius: 20px;"></iframe>

//     <button style="
//     pointer-events: auto;
//     position: fixed;
//     height: 50px;
//     width: 70px;
//     right: calc(25% - 20px);
//     top: calc(10% - 20px);
//     z-index: 999;
//     border: none;
//     border-radius: 20px;
//     background-color: red;
//     color: white;" onclick="document.getElementById('surveyframe').style.display = 'none'; document.body.style.overflow = 'auto';document.body.style.pointerEvents = 'auto';">X close</button>`

//     document.body.append(surveyContainer)
    
//     // Set a flag in local storage to indicate the survey has been displayed
//     localStorage.setItem("surveyDisplayed", "true");
//   }
// });

function toggleSearch() {
  var searchInput = document.getElementById('searchright');
  searchInput.classList.toggle('active');
}

// if (window.location.hostname === 'blooket1.com') {
//   alert('Sorry, blooket1.com is not ready for public use yet. Please use blooket1.pages.dev. Thank you!');
//   window.location.href = 'https://blooket1.pages.dev';
// }


// document.addEventListener('DOMContentLoaded', function() {
//   // Check if there's *any* localStorage data. If not, no need to show the button.
//   if (localStorage.length === 0) {
//       return;
//   }

//   // Create the notification container
//   const notificationContainer = document.createElement('div');
//   notificationContainer.id = 'blooket-migration-notification';

//   // Create the message element
//   const message = document.createElement('p');
//   message.innerHTML = '<strong>We\'re moving to <a href="https://blooket1.com" target="_blank">blooket1.com</a>!</strong> Click below to attempt to transfer your game progress.';

//   // Create the transfer button
//   const transferButton = document.createElement('button');
//   transferButton.textContent = 'Transfer Progress';
//   transferButton.id = 'blooket-transfer-button';

//    // Create the close button
//   const closeButton = document.createElement('button');
//   closeButton.textContent = 'X';
//   closeButton.id = 'blooket-notification-close';

//   // Add elements to the container
//   notificationContainer.appendChild(closeButton);
//   notificationContainer.appendChild(message);
//   notificationContainer.appendChild(transferButton);

//   // Add the container to the body
//   document.body.appendChild(notificationContainer);

//   // Add event listener to the transfer button
//   transferButton.addEventListener('click', function() {
//       const newWindow = window.open('/', '_blank'); // Open in new tab

//       // Important: wait for the new window to load before sending the message
//       newWindow.onload = () => {
//           // Create an object to hold all localStorage data
//           const allData = {};

//           // Iterate through all localStorage keys
//           for (let i = 0; i < localStorage.length; i++) {
//               const key = localStorage.key(i);
//               allData[key] = localStorage.getItem(key);
//           }

//           // Send the data via postMessage
//           newWindow.postMessage({ type: 'allGameData', data: allData }, 'https://blooket1.com');
//           notificationContainer.style.display = 'none'; // Hide the notification. No need for a flag.

//       };
//   });

//     // Add event listener to the close button
//       closeButton.addEventListener('click', function() {
//           notificationContainer.style.display = 'none'; // Hide the notification
//       });
// });

// window.addEventListener('message', (event) => {
//   // IMPORTANT: Check the origin!  This is crucial for security.
//   // if (event.origin =!== 'https://blooket1.pages.dev') {
//       if (event.data.type === 'allGameData') {
//           const receivedData = event.data.data;

//           // Iterate through the received data and set it in localStorage
//           for (const key in receivedData) {
//               if (receivedData.hasOwnProperty(key)) { // Important: check for own properties
//                   try {
//                       localStorage.setItem(key, receivedData[key]);
//                   } catch (e) {
//                       console.error('Error setting localStorage item:', key, e);
//                       // Handle potential errors (e.g., quota exceeded)
//                   }
//               }
//           }
//             // Notify the user (optional, but recommended)
//             const notificationContainer = document.createElement('div');
//             notificationContainer.id = 'blooket-migration-notification-received';

//           // Create the message element
//           const message = document.createElement('p');
//           message.textContent = 'Game progress data received. Refresh to see if it worked!';

//           // Create the close button
//           const closeButton = document.createElement('button');
//           closeButton.textContent = 'X';

//               // Add elements to the container
//           notificationContainer.appendChild(closeButton);
//           notificationContainer.appendChild(message);


//           // Add the container to the body
//           document.body.appendChild(notificationContainer);

//             closeButton.addEventListener('click', function() {
//               notificationContainer.style.display = 'none';
//               });

//       }
//   // }
// });
// console.log("Message listener is active on this page."); // Add this line