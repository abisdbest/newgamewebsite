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