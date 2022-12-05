
console.log("1")

window.onload = (event) => {
    var tableCode = 
    "<table>\
    <tr>\
    <th>Games</th> <th>Platform</th>\
    </tr>";

    fetch("https://lime-faithful-hippo.cyclic.app/api/games")
    .then(function(response){
      return response.json()
    })
    .then(function(jsonObject){
      console.log(jsonObject);
      jsonObject.forEach(function(currentGame) {
        tableCode += `<tr><td><a href= "Page3.html?id=${currentGame.id}">${currentGame.GameName}</a></td>\
        <td>${currentGame.Platform}</td></tr>`;
    })

    tableCode += "</table>";


    document.getElementById("gameTable").innerHTML = tableCode;
  })
};

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
