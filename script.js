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


document.addEventListener("DOMContentLoaded", function () {
  const KEY = "storage_migrated"; // Prevents multiple migrations

  // Prevent script from running if migration already completed
  if (localStorage.getItem(KEY)) return;

  // Save all localStorage data to sessionStorage
  const allStorage = {};
  Object.keys(localStorage).forEach((key) => {
      allStorage[key] = localStorage.getItem(key);
  });
  sessionStorage.setItem("migratedStorage", JSON.stringify(allStorage));

  // Create the migration popup
  const popup = document.createElement("div");
  popup.id = "storage-migration-popup";
  popup.innerHTML = `
      <p>Your game progress is being migrated to our new site!</p>
      <button id="migrate-btn">Continue</button>
  `;
  document.body.appendChild(popup);

  // Handle button click
  document.getElementById("migrate-btn").onclick = function () {
      popup.style.opacity = "0"; // Fade out effect
      setTimeout(() => {
          // Redirect to the new domain
          location.href = "https://blooket1.com";
      }, 500);
  };

  // If on blooket1.com, restore data
  if (location.hostname === "blooket1.com") {
      const savedData = sessionStorage.getItem("migratedStorage");
      if (savedData) {
          const parsedData = JSON.parse(savedData);
          Object.keys(parsedData).forEach((key) => {
              localStorage.setItem(key, parsedData[key]);
          });
      }
      sessionStorage.removeItem("migratedStorage"); // Clean up sessionStorage
      localStorage.setItem(KEY, "true"); // Mark migration as complete
  }
});
