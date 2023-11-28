async function gitapi(endpoint) {
    baseUrl = "https://api.github.com"
    res = await fetch(baseUrl + endpoint, {
        headers: {Authorization: 'Bearer '+localStorage.getItem("github-user-token")}
    })
    data = await res.json()
    localStorage.setItem("github-name", data.login)
    return data;
}

async function logged_in() {
    msg = document.getElementById("logged-in-msg")
    document.getElementById("btn-login").disabled = "disabled"
    msg.style.color = "green"
    json = await gitapi("/user")
    pic = json.avatar
    uname = json.login
    msg.innerHTML = `Login successful! Welcome back, ${uname}! `
    document.getElementById("logout-btn").style.display = "block"
}
window.onload = function() {
    if (localStorage.getItem("github-user-token") == null) {
        document.getElementById("logged-in-msg").innerHTML = "Not logged in! Waiting for you to click login..."
    }
    else {
        logged_in()
    }
}
async function githubLogin() {
    msg = document.getElementById("logged-in-msg")    
    msg.innerHTML = "you clicked it yay! now login through the popup (click 'authorize' at the bottom...)"
    const clientId = 'Iv1.b9cc7cbb515c23a0'
    authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`;
    x = window.open(authUrl, "_blank", "popup")
    while (localStorage.getItem("github-user-token") == null) {await new Promise(r => setTimeout(r, 2000))}
    x.close()
    logged_in()    
}

async function logout() {
    msg = document.getElementById("logged-in-msg")
    msg.innerHTML = "Logging out..."
    localStorage.clear()
    await new Promise(r => setTimeout(r, 1000))
    msg.innerHTML = "Logged out, reloading. Bye!"
    history.go(0)
}