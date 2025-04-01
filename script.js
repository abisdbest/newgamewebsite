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
  const CURRENT_DOMAIN = location.hostname; // Gets current domain

  // Only show the popup if on blooket1.pages.dev and migration hasn't been shown before
  if (CURRENT_DOMAIN === "blooket1.pages.dev") {
      // Create the migration popup
      const popup = document.createElement("div");
      popup.id = "migration-popup";
      popup.innerHTML = `
          <p style="font-weight: bold; color: red;">Important: Blooket1.pages.dev will be taken down soon! Please migrate to blooket1.com.</p>
          <p>If you encounter any issues, please email us at <a href="mailto:info.blooket1@gmail.com">info.blooket1@gmail.com</a>.</p>
          <button id="redirect-btn">Go to blooket1.com</button>
      `;
      document.body.appendChild(popup);

      // Handle button click for redirect
      document.getElementById("redirect-btn").onclick = function () {
          window.location.href = "https://blooket1.com";
      };
  }
});
