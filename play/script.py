import os
import json
# {data["name"]} or image
# Function to create HTML content based on JSON data
def create_html_content(data):
    return f"""<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGZND6VMN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VNGZND6VMN');
</script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js#gimkit"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play {data["name"]} On Blooket1!</title>
    <script src="../../lightslider.js"></script>
    <link rel="stylesheet" href="../../styles.css"> <!-- Create a separate CSS file for better organization -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous">
</head>

<body>
    <nav>
        <logo><img class="logo" src="/images/b-logo.png"></img><b><span class="logo-name">Blooket1<br>Games</span></b></logo>
        <div class="options">
            <a href="#">Games</a>
            <a href="#">Tools</a>
            <a href="#">Movies</a>
        </div>
            
        <div class="search-container">
            <input class="search" class="expandright" id="searchright" type="search" name="q" placeholder="Search">
            <label onclick="toggleSearch()" class="searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
        </div>
    </nav>

    <aside class="sidebar">
        <div class="container">
            <div class="icons">
                <div class="icon"><i class="fas fa-cog" onclick="window.location += '../../settings/'"></i></div>
                <div class="icon"><i class="fas fa-comments" onclick="window.location += '../../chat/'"></i></div>
                <div class="icon"><i class="fas fa-info-circle" onclick="window.location += '../../info/'"></i></div>
            </div>
        </div>
    </aside>

    <div id="game-container">
        <img id="game-image" src="{data["image"]}" alt="Game Image" height="200px">
        <iframe id="game-iframe" src=""></iframe>
        <button id="play-btn" onclick="document.getElementById('game-image').style.display = 'none'; document.getElementById('game-iframe').src = '../../source/{data["name"]}/index.html'; this.style.display = 'none'">Play</button>
        <div id="options-bar">
            <button id="fullscreen-btn" onclick="document.getElementById('play-btn').style.display = 'none'; document.getElementById('game-image').style.display = 'none'; document.getElementById('game-iframe').src = '../../source/{data["name"]}/index.html'; document.getElementById('game-iframe').requestFullscreen();">Fullscreen</button>
            <button id="new-page-btn" onclick="x = window.open(); x.document.write(`<iframe src='../../source/{data["name"]}/index.html' style='position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;'></iframe>`)">Open in New Page</button>
        </div>
    </div>
    
    <div class="description">
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

    <div class="g-ads"></div>

    <br><br><br><br><br>

    <footer>
        <div class="container">
            <p>2024 Blooket1.</p>
        </div>
    </footer>
</body>

</html>"""

# Function to download folder and create index.html
def download_folders(json_file_path):
    with open(json_file_path, 'r') as json_file:
        data = json.load(json_file)

        for key, value in data.items():
            folder_name = key.lower()  # Create folder name (convert to lowercase)
            os.makedirs(folder_name, exist_ok=True)  # Create folder if it doesn't exist

            html_content = create_html_content(value)

            # Create index.html in each folder
            with open(os.path.join(folder_name, 'index.html'), 'w') as html_file:
                html_file.write(html_content)

            # Download the image to the folder
            image_url = value["image"]
            image_path = os.path.join(folder_name, os.path.basename(image_url))
            os.system(f"curl -o {image_path} {image_url}")

if __name__ == "__main__":
    json_file_path = "games.json"  # Replace with the actual path to your JSON file
    download_folders(json_file_path)
