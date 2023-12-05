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
  const username = document.getElementsByClassName('chatters-name').value;
  const message = document.getElementById('chat-message').value;

  // Make a POST request to the server
  fetch('http://localhost:3000/chats', {
    method: 'POST',
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