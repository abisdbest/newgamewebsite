json_file="games.json"

# Extract keys in order and loop through them
while IFS= read -r key; do
    folder_name=$(jq -r ".$key.name" "$json_file")
    image_url=$(jq -r ".$key.image" "$json_file")
    onclick_value=$(jq -r ".$key.onclick" "$json_file")

    # Create folder
    mkdir -p "$folder_name"

    # Generate HTML content
    html_content="<!DOCTYPE html>
<html lang=\"en\">

<head>
    <script src=\"https://code.jquery.com/jquery-3.7.1.min.js#gimkit\"></script>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>Play $folder_name On Blooket1!</title>
    <script src=\"../../lightslider.js\"></script>
    <link rel=\"stylesheet\" href=\"../../styles.css\"> <!-- Create a separate CSS file for better organization -->
    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css\" crossorigin=\"anonymous\">
    <script src=\"//cdn.jsdelivr.net/npm/eruda#gimkit\"></script>
    <script>eruda.init();</script>
</head>
<body>
    <nav>
        <logo><img class=\"logo\" src=\"/images/b-logo.png\"></img><b><span class=\"logo-name\">Blooket1<br>Games</span></b></logo>
        <div class=\"options\">
            <a href=\"#\">Games</a>
            <a href=\"#\">Tools</a>
            <a href=\"#\">Movies</a>
        </div>
            
        <div class=\"search-container\">
            <input class=\"search\" class=\"expandright\" id=\"searchright\" type=\"search\" name=\"q\" placeholder=\"Search\">
            <label onclick=\"toggleSearch()\" class=\"searchbutton\" for=\"searchright\"><span class=\"mglass\">&#9906;</span></label>
        </div>
    </nav>

    <aside class=\"sidebar\">
        <div class=\"container\">
            <div class=\"icons\">
                <div class=\"icon\"><i class=\"fas\" class=\"fa-cog\"></i></div>
                <div class=\"icon\"><i class=\"fas\" class=\"fa-comments\"></i></div>
                <div class=\"icon\"><i class=\"fas\" class=\"fa-info-circle\"></i></div>
            </div>
        </div>
    </aside>

    <div id=\"game-container\">
        <img id=\"game-image\" src=\"$image_url\">
        <iframe id=\"game-iframe\" src=\"\"></iframe>
        <button id=\"play-btn\" onclick=\"document.getElementById('game-image').style.display = 'none'; document.getElementById('game-iframe').src = '../../source/' + '$folder_name'; this.style.display = 'none'\">Play</button>
        <div id=\"options-bar\">
            <button id=\"fullscreen-btn\" onclick=\"document.getElementById('play-btn').style.display = 'none'; document.getElementById('game-image').style.display = 'none'; document.getElementById('game-iframe').src = '../../source/' + '$folder_name' + '/index.html'; document.getElementById('game-iframe').requestFullscreen();\">Fullscreen</button>
            <button id=\"new-page-btn\" onclick=\"x = window.open(); x.document.write(`<iframe src=\"../../source/$variable/index.html\' style='position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>`)\">Open in New Page</button>
        </div>
    </div>
    
    <div class=\"description\">
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
        this is a very interesting game <br>
    </div>

    <br><br><br><br><br>

    <footer>
        <div class=\"container\">
            <p>2024 Blooket1.</p>
        </div>
    </footer>
</body>

</html>"


    # Save HTML content to file
    echo "$html_content" > "$folder_name/index.html"
done < <(python3 -c "import json; keys = list(json.load(open('$json_file')).keys()); print('\n'.join(keys))")