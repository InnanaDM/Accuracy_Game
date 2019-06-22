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


