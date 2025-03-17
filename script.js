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

document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hostname === 'blooket1.com') {
      return; // Don't run on the development site
  }
  console.log('DOM fully loaded and parsed.');

  // --- Collect ALL localStorage data ---
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      try {
          // Attempt to parse as JSON; if it fails, store as a plain string
          allData[key] = JSON.parse(localStorage.getItem(key));
      } catch (e) {
          allData[key] = localStorage.getItem(key); // Store as string if parsing fails
      }
  }
  console.log('Collected localStorage data:', allData);

  // --- Only proceed if there's any data to transfer ---
  if (Object.keys(allData).length === 0) {
      console.log('No data to transfer.');
      return; // No data to transfer
  }

  // --- Create the notification/transfer UI ---
  const transferContainer = document.createElement('div');
  transferContainer.id = 'blooket-transfer-notification';

  const message = document.createElement('p');
  message.innerHTML = '<strong>We\'re moving to <a href="https://blooket1.com" target="_blank">blooket1.com</a>!</strong> Click below to transfer your game progress.';

  const transferButton = document.createElement('button');
  transferButton.textContent = 'Transfer Progress';
  transferButton.id = 'blooket-transfer-button';

  transferContainer.appendChild(message);
  transferContainer.appendChild(transferButton);
  document.body.appendChild(transferContainer);
  console.log('Transfer UI created.');

  // --- Add the transfer button click handler ---
  transferButton.addEventListener('click', function() {
      console.log('Transfer button clicked.');
      const newWindow = window.open('https://blooket1.com', '_blank');

      newWindow.onload = () => {
          try {
              // Stringify the ENTIRE data object
              const dataToSend = JSON.stringify(allData);
              console.log('Data to send:', dataToSend);

              newWindow.postMessage({ type: 'blooketAllGameData', data: dataToSend }, 'https://blooket1.com');

              transferButton.textContent = 'Progress Transferred!';
              transferButton.disabled = true;
              console.log('Progress transferred.');

              // redirect after 5 sec
              setTimeout(() => {
                  window.location.replace("https://blooket1.com");
              }, 5000); // 5000 milliseconds = 5 seconds
          } catch (error) {
              console.error('Error transferring data:', error);
              transferButton.textContent = 'Transfer Failed';
          }
      };
      newWindow.onerror = () => {
          console.error('New window failed to load');
          transferButton.textContent = 'Transfer Failed';
      }
  });
});

window.addEventListener('message', (event) => {
  // VERY IMPORTANT: Check the origin!
  if (event.origin !== 'https://blooket1.pages.dev') {
      console.log("Received message from:", event.origin, "Expected: https://blooket1.pages.dev - Ignoring"); // Debug Log
      // return; // Ignore messages from other origins
  }

  console.log("Received message:", event.data); // Debug Log: Full message

  if (event.data.type === 'blooketAllGameData') {
      try {
          const receivedData = JSON.parse(event.data.data);
          console.log("Parsed data:", receivedData); // Debug Log: Parsed data

          // Iterate through the received data and set each key-value pair
          for (const key in receivedData) {
              if (receivedData.hasOwnProperty(key)) {
                  try {
                      // Attempt to stringify; store as plain string if it's not an object
                      localStorage.setItem(key, JSON.stringify(receivedData[key]));
                      console.log(`Set localStorage key: ${key}`); // Debug Log: Key set
                  } catch (e) {
                      localStorage.setItem(key, receivedData[key]); // Store as string
                      console.log(`Set localStorage key (as string): ${key}`); // Debug Log: Key set (as string)
                  }
              }
          }

          console.log('All game data received and saved!');
      } catch (error) {
          console.error('Error receiving data:', error);
          console.log("Raw data causing error:", event.data.data); // Debug Log: Raw data
      }
  } else { //debug for wrong type
      console.log("wrong type", event.data.type)
  }
});

console.log("Message listener is active on this page."); // Add this line