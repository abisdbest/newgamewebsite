// defining error classes
function FetchError() {
  Error.apply(this, arguments);
  this.name = "FetchError";
  console.log(arguments[0]);
}

function UnknownError() {
  Error.apply(this, arguments);
  this.name = "UnknownError";
}
UnknownError.prototype = Object.create(Error.prototype);

$(document).ready(async function () {
  state = 200;
  try {
    res = await fetch(
      "https://blooket1-chat-server.onrender.com/messages#classroom.google.com"
    );
  } catch (e) {
    // $("#msg-list sup")
    //   .html("(fetching messages error check console)")
    //   .css({ color: "red" });
    // console.error("Fetching messages error! Please wait for classification");
    // if (e instanceof TypeError) {
    //   throw new FetchError("Something went wrong with the fetch");
    // } else {
    //   throw new UnknownError(
    //     "Well it's an UnknownError. What do you want me to say about it? Error description: " +
    //       e
    //   );
    // }
    // // console.error(
    // //   "Fetching messages error!\nGET /messages failed:\n Javascript error! Unable to provide an exact description but JavaScript returned:" +
    // //     e +
    // //     "\nWebsite response: " +
    // //     text +
    // //     "\nIf website response is undefined there was a NetworkError, TypeError or some other that means the fetch didn't go through."
    // // );
  }
  vals = await res.json();
  Object.values(vals).forEach((val) => {
    $("#msg-list-div").append(
      `<h2 id="author">${val["username"] + ": "}</h2>`,
      `<h2 id="author">${val["message"]}</h2>`,
      `<div class="ctrl-buttons">
      <div class="ctrl-buttons">
        <p>message actions:</p>
        <p class="ctrl-button" id="edit">edit</p>
        <p id="separator">|</p>
        <p class="ctrl-button" id="delete">delete</p>
        <p id="separator">|</p>
        <p class="ctrl-button" id="block">block ip</p>
      </div>`
    );
  });

  $("sup").text("");
});