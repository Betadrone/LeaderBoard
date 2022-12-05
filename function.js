// var game = [{
//     id: 1,
//     Name: "Sonic the HedgeHog",
//     Platform: 'Switch',
//     Leaderboard:[{
//       id:1,
//       Player: "NATE",
//       Score: 10000,
//       Time: null
//     },{
//         id:2,
//         Player: "Muhammad",
//         Score: 10002,
//         Time: null
//       }]
//   },
//   {
//     id: 2,
//     Name: "Hollow Knight",
//     Platform: 'PC',
//     Leaderboard:[{
//       id:1,
//       Player: "Jayson",
//       Score: null,
//       Time: "20:21:56:02"
//     },{
//         id:2,
//         Player: "Dean",
//         Score: null,
//         Time: "19:22:40:20"
//       }]
//   }];

fetch("https://lime-faithful-hippo.cyclic.app/api/games")
.then(function(response){
  return response.json()
})
.then(function(jsonObject){
  console.log(jsonObject);
})

  console.log("Yo")

  window.onload = (event) => {
    var tableCode = 
    "<table>\
    <tr>\
    <th>Games</th> <th>Platform</th>\
    </tr>";

    
    game.forEach(function(currentGame) {
        tableCode += `<tr><td>${currentGame.Name}</td>\
        <td>${currentGame.Platform}</td></tr>`;
    })

    tableCode += "</table>";


    document.getElementById("gameTable").innerHTML = tableCode;
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
