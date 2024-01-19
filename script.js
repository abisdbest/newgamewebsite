function tsandcs() {
<<<<<<< HEAD
  if (document.cookie = "tc=clicked"){
    alert("already clicked")
  } else {
    document.cookie = "tc=clicked; expires=Thu, 18 Dec 9999 12:00:00 UTC";
    // Disable scrolling on the rest of the website
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';

    // Create the terms and conditions div
    var tcDiv = document.createElement('div');
    tcDiv.innerHTML = "<style> .tcdiv { position: fixed; display: block; left: 80vh; height: 200px; background-color: white; height: 400px; width: 350px; z-index: 2; border-radius: 10px; overflow: scroll; box-shadow: black 40px 40px 300px; color: grey; } .tcdiv > p { margin-left: 20px; margin-right: 20px; } .tcfooter { background-color: lightgrey; border-radius: 0 0 10px 10px; height: 60px; top: 444px; position: fixed; text-align: left;} .consentbutton { width: 130px; display: inline; height: 40px; float: left; margin-top: 10px; margin-left: 23px; margin-right: 22px; border-radius: 10px; border: none; } .consentbutton:hover { background-color: lightgrey; } .consentbutton:active { background-color: darkgrey; }</style><div class='tcdiv'> <p><b>Terms and Conditions for Blooket1.pages.dev</b></p><p>Acceptance of Terms By accessing or using the Blooket1.pages.dev website (&quot;the Site&quot;) and playing games hosted on it, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the Site.</p><p>Use of the Site 2.1 <br /> Age Restriction: The Site is intended for use by individuals who are at least 12 years old. By using the Site, you confirm that you meet this age requirement.</p><p>2.2 User Responsibility: <br />Users of the Site are solely responsible for their actions and activities while using the Site. This includes any content they create, submit, or share on the Site.</p><p>2.3 Compliance with Laws: <br /> Users must comply with all applicable laws, regulations, and third-party rights while using the Site. This includes, but is not limited to, copyright laws, privacy laws, and laws regarding the transmission of data.</p><p>Intellectual Property 3.1 <br /> Ownership: All content, including but not limited to text, graphics, logos, images, audio clips, and software, on the Site is the property of the website owner or its licensors and is protected by intellectual property laws.</p><p>3.2 Limited License: Users <br />are granted a limited, non-exclusive, non-transferable license to access and use the Site solely for personal, non-commercial purposes. This license does not permit the use of any content for commercial purposes without obtaining prior written consent from the website owner.</p><p>Disclaimer of Liability 4.1 <br />No Warranty: The Site and its content are provided on an &quot;as is&quot; basis without any warranties, express or implied. The website owner does not warrant the accuracy, reliability, or availability of the Site or its content.</p><p>4.2 Limitation of Liability: <br />The website owner shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of the Site or its content.</p><p>Indemnification Users agree to indemnify and hold harmless the website owner, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising out of or in connection with their use of the Site or any violation of these Terms and Conditions.</p><p>The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or its subject matter or formation (including non-contractual disputes or claims). For our exclusive benefit and to the extent possible in the applicable jurisdiction, we retain the right to bring or enforce proceedings as to the substance of the matter in the courts of the country of your residence or, where these Terms are entered into in the course of your trade or profession, the country of the place of business in which you agreed to these Terms or (if different) the country of your principal place of business.</p> <br /> <footer class='tcfooter'> <button class='consentbutton' onclick='window.close()'>I do not consent</button><button class='consentbutton' onclick='deletetc()'>I consent</button> </footer></div>";
    tcDiv.style.pointerEvents = "auto"
    // Add the terms and conditions div to the body
    document.body.appendChild(tcDiv);
  }
=======
  if (localStorage.getItem("tcsRead") == null) {
    // Disable scrolling on the rest of the website
    document.body.style.pointerEvents = 'none';
    document.body.style.overflow = 'hidden';

    // Create the terms and conditions div
    var tcDiv = document.createElement('div');
    tcDiv.innerHTML = "<style> .tcdiv { position: fixed; display: block; left: 80vh; height: 200px; background-color: white; height: 400px; width: 350px; z-index: 2; border-radius: 10px; overflow: scroll; box-shadow: black 40px 40px 300px; color: grey; } .tcdiv > p { margin-left: 20px; margin-right: 20px; } .tcfooter { background-color: lightgrey; border-radius: 0 0 10px 10px; height: 60px; top: 444px; position: fixed; text-align: left;} .consentbutton { width: 130px; display: inline; height: 40px; float: left; margin-top: 10px; margin-left: 23px; margin-right: 22px; border-radius: 10px; border: none; } .consentbutton:hover { background-color: lightgrey; } .consentbutton:active { background-color: darkgrey; }</style><div class='tcdiv'> <p><b>Terms and Conditions for Blooket1.pages.dev</b></p><p>Acceptance of Terms By accessing or using the Blooket1.pages.dev website (&quot;the Site&quot;) and playing games hosted on it, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please refrain from using the Site.</p><p>Use of the Site 2.1 <br /> Age Restriction: The Site is intended for use by individuals who are at least 12 years old. By using the Site, you confirm that you meet this age requirement.</p><p>2.2 User Responsibility: <br />Users of the Site are solely responsible for their actions and activities while using the Site. This includes any content they create, submit, or share on the Site.</p><p>2.3 Compliance with Laws: <br /> Users must comply with all applicable laws, regulations, and third-party rights while using the Site. This includes, but is not limited to, copyright laws, privacy laws, and laws regarding the transmission of data.</p><p>Intellectual Property 3.1 <br /> Ownership: All content, including but not limited to text, graphics, logos, images, audio clips, and software, on the Site is the property of the website owner or its licensors and is protected by intellectual property laws.</p><p>3.2 Limited License: Users <br />are granted a limited, non-exclusive, non-transferable license to access and use the Site solely for personal, non-commercial purposes. This license does not permit the use of any content for commercial purposes without obtaining prior written consent from the website owner.</p><p>Disclaimer of Liability 4.1 <br />No Warranty: The Site and its content are provided on an &quot;as is&quot; basis without any warranties, express or implied. The website owner does not warrant the accuracy, reliability, or availability of the Site or its content.</p><p>4.2 Limitation of Liability: <br />The website owner shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of the Site or its content.</p><p>Indemnification Users agree to indemnify and hold harmless the website owner, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising out of or in connection with their use of the Site or any violation of these Terms and Conditions.</p><p>The courts of England and Wales shall have exclusive jurisdiction to settle any dispute or claim that arises out of or in connection with these Terms or its subject matter or formation (including non-contractual disputes or claims). For our exclusive benefit and to the extent possible in the applicable jurisdiction, we retain the right to bring or enforce proceedings as to the substance of the matter in the courts of the country of your residence or, where these Terms are entered into in the course of your trade or profession, the country of the place of business in which you agreed to these Terms or (if different) the country of your principal place of business.</p> <br /> <footer class='tcfooter'> <button class='consentbutton' onclick='window.close()'>I do not consent</button><button class='consentbutton' onclick='deletetc()'>I consent</button> </footer></div>";
    tcDiv.style.pointerEvents = "auto"
    // Add the terms and conditions div to the body
    document.body.appendChild(tcDiv);
    try {
      localStorage.setItem("tcsRead", "true")
    }

    catch {
      alert("Unable to save your choice")
    }
  }

  else {}
>>>>>>> 48bce985a1523757a7b68f09a295219ded3dd8dd
}

function deletetc() {
  // Remove the terms and conditions div
  var tcDiv = document.querySelector('.tcdiv');
  tcDiv.parentNode.removeChild(tcDiv);

  // Enable scrolling on the rest of the website
  document.body.style.pointerEvents = 'auto';
  document.body.style.overflow = 'auto';
}


// Define the 'suggestions' array in a higher scope
let suggestions = [];

let shouldDisplayResultBox = false;

// Define the 'gameSquareOnclick' object to store onclick values for each game-square
let gameSquareOnclick = {};

// Fetch the HTML content of games.html and then run the autocomplete logic
fetch('games.html')
  .then(response => response.text())
  .then(html => {
    // Create a temporary HTML element to parse the fetched HTML content
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    // Get all div elements with the class 'game-square'
    const gameSquares = tempElement.querySelectorAll('.game-square');

    // Update the 'suggestions' array and 'gameSquareOnclick' object with the innerText and onclick value of each div
    gameSquares.forEach(square => {
      suggestions.push(square.innerText);
      gameSquareOnclick[square.innerText] = square.getAttribute('onclick');
    });

    // Run the autocomplete logic
    setupAutocomplete();
  })
  .catch(error => console.error('Error fetching games.html:', error));

// Autocomplete logic
function setupAutocomplete() {
  // getting all required elements
  const searchInput = document.querySelector(".searchInput");
  const input = searchInput.querySelector("input");
  const resultBox = searchInput.querySelector(".resultBox");

  // if user presses any key and releases
  input.onkeyup = (e) => {
    let userData = e.target.value; // user entered data
    console.log("User Input:", userData); // Log user input to console
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        // filtering array value and user characters to lowercase and return only those words which start with user entered chars
        return data.trim().toLocaleLowerCase().startsWith(userData.trim().toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data) => {
        // wrapping each suggestion in an li tag
        return `<li>${data}</li>`;
      });
      searchInput.classList.add("active"); // show autocomplete box
      console.log("Filtered Suggestions:", emptyArray); // Log filtered suggestions to console
      showSuggestions(emptyArray);
      let allList = resultBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
        // adding onclick attribute in all li tag
        allList[i].setAttribute("onclick", `select('${gameSquares[i].onclick}')`);
      }
      resultBox.style.display = "block"; // Display the result box
    } else {
      searchInput.classList.remove("active"); // hide autocomplete box
      resultBox.style.display = "none"; // Hide the result box
    }
  }

  function showSuggestions(list) {
    let listData;
    if (!list.length) {
      userValue = input.value;
      // Get the onclick value for the userValue from the gameSquareOnclick object
      listData = `<li>no game found: "${userValue}"</li>`;
    } else {
      // Append onclick values to existing li elements
      listData = list.map((data) => {
        const gameName = data.replace('<li>', '').replace('</li>', '');
        const onclickValue = gameSquareOnclick[gameName] || '';
        // Append onclick value to the existing li element
        return `<li onclick="${onclickValue}">${gameName}</li>`;
      }).join("");
    }
    resultBox.innerHTML = listData;
  }

  // Update the shouldDisplayResultBox variable and set the display property
  input.addEventListener('input', () => {
    shouldDisplayResultBox = input.value.trim() !== '';
    resultBox.style.display = shouldDisplayResultBox ? 'block' : 'none';
  });
}

function toggleMenu() {
  const menuButton = document.querySelector('.menu-button');
  const sidebar = document.querySelector('.sidebar');

  menuButton.classList.toggle('active');
  sidebar.classList.toggle('active');

  // Add/remove 'expanded' class after a delay to coordinate with the sidebar animation
  setTimeout(() => {
      menuButton.classList.toggle('expanded');
  }, 300); // Adjust the delay based on the sidebar transition duration
}




function toggleChat() {
  const chatContainer = document.querySelector('.chat-container');
  chatContainer.classList.toggle('active');
  var messages = document.querySelector(".chats");
  messages.scrollTop = messages.scrollHeight - messages.clientHeight;
}




function sendMessage() {
  const username = document.getElementById('chatter-username').value;
  const message = document.getElementById('chat-message').value;

  // Make a POST request to the server
  fetch('localhost:3000/chats', {
    method: 'POST',
    mode: 'no-cors',  // Set mode to 'no-cors'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, message }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Message sent:', data);
    // You can update the UI or perform additional actions here
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}