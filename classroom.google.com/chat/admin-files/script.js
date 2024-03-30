$(document).ready(async function () {
  elem = $("#pwd-enter-text");
  pwd = prompt("");
  elem.text("Checking password...").css("color", "orange");
  try {
    res = await fetch(
      "https://blooket1-test.onrender.com/checkpassword#classroom.google.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: pwd }),
      }
    );
    const state = res.status;
    if (state != 200) {
      elem
        .text(
          "Error: POST /checkpassword: Response status code is not 200, response status is " +
            state
        )
        .css("color", "red");
    }
  } catch (e) {
    elem.text("Error: POST /checkpassword: " + e).css("color", "red");
  }
  const json = await res.json();
  if (json.passcorrect == true) {
    elem.css("color", "green").text("Access granted. Loading...");
    localStorage.setItem("password", pwd);
    await new Promise((r) => setTimeout(r, 1000));
    $("html").html("");
  }

  if (json.passcorrect == false) {
    elem.css("color", "red").text("Wrong password lol");
    await new Promise((r) => setTimeout(r, 3000));
    window.location.reload();
  }
});
