console.log("connected");

// sets game length
var gameLength = 30;

var timerID = null;

var playing = false; 

var numHoles = 6 * 10;

var currentPos = -1;

function clrHoles() {
    for(var k =0; k < document.dmz.elements.length; k++)
    document.dmz.elements[k].checked = false;
}

// stop funct
function stopTimer() {
    if (playing) {
        clearTimeout(timerID);
        console.log("stopTimer connect")
    }
}


// show when time stops
function showTime(remTime) {
    document.cPanel.timeLeft.value=remTime;

    if (playing) {
        if (remTime === 0) {
            stopGame();
            return;
        }

        else {
            temp = remTime - 1;
            timerID = setTimeout("showTime(temp)", 1000);
        }
    }
    console.log("showTime connect")
}

function stopGame() {
    stopTimer();
    playing = false;
    document.cPanel.timeLeft.value = 0;
    clrHoles();
    display("Game Over");
    alert("Game Over. \nYour score is: " + totalHits);

    console.log("stopGame connect")
}

