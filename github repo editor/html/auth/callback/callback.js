window.onload = async function() {
    search = window.location.search
    const params = new URLSearchParams(search)
    if (!params.has("code")) {
        alert("error: 400, NO_PARAMETERS_SPECIFIED. do not try to reload this page. instead, go back to the homepage and try the login with github again.")
    }
    else {
        code = params.get("code")
        secret = "0b5bed6f78846512f762626fb8b46a5a4d89e046"
        id = "Iv1.f57040f0f4214771"
        baseUrl = "https://api.allorigins.win/raw?url="
        decodedUrl = "https://github.com/login/oauth/access_token?client_id=" + id + "&client_secret=" + secret + "&code=" + code
        getTokenUrl = encodeURIComponent(decodedUrl)
        const response = await fetch(baseUrl + getTokenUrl)
            .then((response) => response.text())
            .then((text) => {
                console.log(text)
                const textResponse = new URLSearchParams("?"+text)
                if (!textResponse.get("access_token")) {
                    alert("error: api didn't supply access token")
                }

                else {
                    token = textResponse.get("access_token")
                    localStorage.setItem("github-user-token", token)
                }
            })

    }
}   
