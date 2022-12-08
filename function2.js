//Page 2 code...
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

    //Creates a json Object using the provided data
    var stuff = `{"name":"${newGame}", "platform":"${platform}"}`

    //Validation of data via if/else statements

    fetch("https://lime-faithful-hippo.cyclic.app/api/games",{
      method:"POST",
      body: stuff,
      headers: {"Content-type":"application/json; charset=UTF-8"}
    })
    .then(function(response){
        return response.json;
    })
    .then(function(jsonObject){
        console.log(jsonObject);
        document.getElementById("msg") = jsonObject.message;
    })
    .catch(function(error){
      console.log(`Error: ${error}`);
    })
  }
  