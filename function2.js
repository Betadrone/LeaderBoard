// To add a new game along with the platform it's played on:
function CreateGame(){
    let newGame;
    newGame = document.getElementById("gameName").value.trim();
    let platform;
    platform = document.getElementById("platformName").value.trim();
    let clear = "";
    document.getElementById("gameName").value = clear;
    document.getElementById("platformName").value = clear;
    console.log(newGame);
    console.log(platform);
  }
  