var count = 0;

function swapTiles(block11, block12) {
  count++;
  console.log("number " + count);
  sessionStorage.setItem('count', count);
  document.getElementById('steps').innerHTML = count - 9;
  var temp = document.getElementById(block11).className;
  document.getElementById(block11).className = document.getElementById(
    block12
  ).className;
  document.getElementById(block12).className = temp;
}
//setting the timer for the game
function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

function timedRefresh(timeoutPeriod) {
  setTimeout("location.reload(true);", timeoutPeriod);
}
swapTiles.onload = timedRefresh(300000);

function shuffle() {
  count = 0;
  for (var row = 1; row <= 3; row++) {

    for (var column = 1; column <= 3; column++) {


      var row1 = Math.floor(Math.random() * 3 + 1); //Pick a random row from 1 to 3
      var column1 = Math.floor(Math.random() * 3 + 1);
      swapTiles("block" + row + column, "block" + row1 + column1);
    }
  }
}

function clickTile(row, column) {
  
  var audio = document.getElementById("audio");
  audio.play();
  var block = document.getElementById("block" + row + column);
  var tile = block.className;
  if (tile != "tile9") {
    //Checking if white tile on the right
    if (column < 3) {
      if (
        document.getElementById("block" + row + (column + 1)).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + row + (column + 1));

        return;
      }
    }
    if (column > 1) {
      if (
        document.getElementById("block" + row + (column - 1)).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + row + (column - 1));
        return;
      }
    }
    //Checking if white tile is above
    if (row > 1) {
      if (
        document.getElementById("block" + (row - 1) + column).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + (row - 1) + column);
        return;
      }
    }
    //Checking if white tile is below
    if (row < 3) {
      if (
        document.getElementById("block" + (row + 1) + column).className ==
        "tile9"
      ) {
        swapTiles("block" + row + column, "block" + (row + 1) + column);
        return;
      }
    }
  }
}

function submit() {
  var audio_ = document.getElementById("audio_");
  audio_.play();
  document.getElementById("popup").style.visibility = "visible";
  document.getElementById("button1").style.visibility = "visible";
  document.getElementById("submit");
}