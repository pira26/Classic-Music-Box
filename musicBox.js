var yellow = document.getElementById("yellow");
var orange = document.getElementById("orange");
var red = document.getElementById("red");
var purple = document.getElementById("purple");
var blue = document.getElementById("blue");
var green = document.getElementById("green");


yellow.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/strings/do-4.mp3');
  	audioElement.play();
};

orange.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/drums/hhd1kck05.wav');
  	audioElement.play();
};

red.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/strings/do5.mp3');
  	audioElement.play();
};

purple.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/drums/Shake32j.wav');
  	audioElement.play();
};

blue.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/strings/la-3.mp3');
  	audioElement.play();
};

green.onclick = function() {
    var audioElement = document.createElement('audio');
  	audioElement.setAttribute('src', './sounds/drums/hhd1snr10.wav');
  	audioElement.play();
};
