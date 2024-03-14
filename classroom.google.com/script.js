function toggleSearch() {
    var searchInput = document.getElementById('searchright');
    searchInput.classList.toggle('active');
}

// var startTime = '11:35:00';
// var endTime = '12:20:00';

var divCreated = false; // Variable to track if the div is already created

function createSpeedReadDiv() {
    if (!divCreated) {
        // Create the main div
        var speedReadDiv = document.createElement("div");
        speedReadDiv.id = "speedread";

        // Create the word div
        var wordDiv = document.createElement("div");
        wordDiv.id = "word";
        speedReadDiv.appendChild(wordDiv);

        // Create the controls div
        var controlsDiv = document.createElement("div");
        controlsDiv.id = "controls";

        // Create the range input element
        var rangeInput = document.createElement("input");
        rangeInput.type = "range";
        rangeInput.id = "speed";
        rangeInput.min = "1";
        rangeInput.max = "20";
        rangeInput.step = "1";
        rangeInput.value = "5";

        // Create labels for the range input
        var slowestLabel = document.createTextNode("slowest ");
        var fastestLabel = document.createTextNode(" fastest");

        // Append elements to controls div
        controlsDiv.appendChild(slowestLabel);
        controlsDiv.appendChild(rangeInput);
        controlsDiv.appendChild(fastestLabel);
        
        // Append controls div to speedReadDiv
        speedReadDiv.appendChild(controlsDiv);

        // Append speedReadDiv to the body
        document.body.appendChild(speedReadDiv);

        divCreated = true; // Set flag to true

        startspeedreading(); // Start speed reading
    }
}

function removeSpeedReadDiv() {
    var div = document.querySelector("#speedread");
    if (div) {
        div.parentNode.removeChild(div);
        divCreated = false; // Reset flag to false
    }
}

function checkTime() {
    // Get current date and time
    var now = new Date();

    // Define start and end times
    var startTime = new Date();
    startTime.setHours(11, 35, 0);

    var endTime = new Date();
    endTime.setHours(12, 20, 0);

    // Check if the current time is between the start and end times
    if (now >= startTime && now <= endTime) {
        createSpeedReadDiv();
    } else {
        removeSpeedReadDiv();
    }
}

// Check the time every second
setInterval(checkTime, 1000);

function startspeedreading() {
    var word, speed_input, speed;

    function go() {
        word = document.getElementById('word');
        speed_input = document.getElementById('speed');
        speed = speed_input.value;

        speed_input.onchange = function(ev) {
            speed = ev.target.value;
        };

        var words = "I am very sorry, but Blooket1 is not available during period 4. This is because SOME people were bitul tora-ing at this time. All progress will remain saved and you will be able to carry on playing games after 12:20. I have no idea why you are still reading this cause its kind of random and you should probably stop and go away and do whatever stuff youre supposed to be doing in your lesson. why are you still here! I already told you to go away! If you got up to here it probably means you are on max speed and the fact that you can read this is pretty impressive-but you can go away now. GO AWAY. NOW. GOAWAY!! GOAWAAAAY!!!! GO GO GO GO GO GO GO GO GO GO GO GO GO GO GO AWAY AWAY AWAY AWAY AWAY AWAY AWAY AWAY AWAY. YOU YOU YOU YOU YOU YOU YOU YOU YOU YOU HAVE HAVE HAVE HAVE HAVE HAVE HAVE HAVE HAVE HAVE FINALY FINALY FINALY FINALY FINALY FINALY FINALY FINALY REACHED REACHED REACHED REACHED REACHED REACHED REACHED THE THE THE THE THE THE THE THE THE THE END! END! END! END! END! END! END! END! END! END! END! END! END! END! END! END! now I will paste a random string of text into this so that you will have something to read because the fact that you got up to here must mean that you are EXTREMELY bored so have a nice read about what happened in july/september in 1874 cause why not: July 14 – The Chicago Fire of 1874 burns down 47 acres of the city, destroying 812 buildings, killing 20, and resulting in the fire insurance industry demanding municipal reforms from Chicago's city council.July 24Mathew Evans and Henry Woodward patent the first incandescent lamp, with an electric light bulb.Third Carlist War: Sack of Cuenca – After Carlist forces successfully defend Estella, Don Alfonso de Bourbon, brother of the Don Carlos VII, leads 14,000 Catalan Carlists south to attack Cuenca (136 km from Madrid), held by Republicans under Don Hilario Lozano. After two days the outnumbered garrison capitulates, but Don Alfonso permits a terrible slaughter. The city is sacked. Subsequently, another republican force defeats the disorderly Catalans, who flee back to the Ebro.July 31 – Patrick Francis Healy, S.J., the first Black man to receive a PhD, is inaugurated as president of Georgetown University, the oldest Catholic University in America, and becomes the first Black person to head a predominantly White university.August 11 – Third Carlist War: Battle of Oteiza – Two months after Government forces were repulsed from Carlist-held Estella, in Navarre, Republican General Domingo Moriones makes a fresh diversionary attack a few miles to the southeast at Oteiza. In heavy fighting Moriones secures a costly tactical victory over Carlist General Torcuato Mendíri, but the war continues another 18 months, before Estella finally falls.September 9 – Captain Lymans wagon train besieged by Indians in Hemphill County, Texas.September 14 – Battle of Liberty Place: In New Orleans, former Confederate Army members of the White League temporarily drive Republican Governor William P. Kellogg from office, replacing him with former Democratic Governor John McEnery. U.S. Army troops restore Kellogg to office five days later.September 28 – Texas–Indian wars: U.S. Army Colonel Ranald S. Mackenzie leads his force of 600 men on the successful raid of the last sanctuary of the Kiowa, Comanche and Cheyenne Indian tribes, a village inside the Palo Duro Canyon in Texas, and carries out their removal to the designated Indian reservations in Oklahoma.".split(/\s/);
        if(words.length > 0 && words[0]) {
            showWord(words, 0);
        } else {
            word.innerHTML = '<i>No text</i>';
        }
    }
  
    function showWord(words, index) {
        if(words[index] !== undefined) {
            word.innerHTML = words[index];
            setTimeout(function() {
                showWord(words, index+1);
            }, 3000/(speed*2));
        } else {
            go();
        }
    }

    go()
}