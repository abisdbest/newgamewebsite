$(document).ready(async function () {
  try {
    res = await fetch(
      "https://blooket1-chat-server.onrender.com/messages#classroom.google.com"
    );
    const state = res.status;
    if (state != 200) {
    }
  } catch (e) {}
  Object.keys(msgs).forEach((key) => {});
});
