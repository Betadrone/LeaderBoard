//Page 4 code...
//This follows the add details button
//and asks the user to add needed info
window.onload = (event) => {

    const queryString = window.location.search;
    var urlParameters = new URLSearchParams(queryString);
    const url = urlParameters.get("id");
  
    // Fetch the info from the database
    fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`)
    .then(function(response){

      // Convert fetched info to a json object 
      return response.json()

    })
    .then(function(jsonObject){

      // Print the fetched info onto the console
      console.log(jsonObject);

      // Take the leaderboard array and print
      // each element of the array in its rightful table spot
      jsonObject.Leaderboard.forEach(function(currentGame) {
      var tag = document.getElementById("GNLBD");
      tag.innerHTML = ` Add score to ${jsonObject.GameName}`;

      })
      console.log(69);
  })
  };

  function AddDetails(){
    let player;
    let score;
    let time;
    player = document.getElementById("player").value.trim();
    score = document.getElementById("score").value.trim();
    time = document.getElementById("time").value.trim();
    let clear = "";
    document.getElementById("player").value = clear;
    document.getElementById("score").value = clear;
    document.getElementById("time").value = clear;
    console.log(newGame);
    console.log(platform);

    //Creates a json Object using the provided data
    var stuff = `{"Player":"${player}", "Score":"${score}", "Time":"${time}"}`

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
