
window.onload = (event) => {
    var tableCode = 
    "<table>\
    <tr>\
    <th>Player</th> <th>Score</th> <th>Time</th>\
    </tr>";

    const queryString = window.location.search;
    var urlParameters = new URLSearchParams(queryString);
    const url = urlParameters.get("id");
  
    fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderBoard/${url}`)
    .then(function(response){
      return response.json()
    })
    .then(function(jsonObject){
      console.log(jsonObject);
      jsonObject.Leaderboard.forEach(function(currentGame) {
        tableCode += `<tr><td>${currentGame.Player}</td>\
        <td>${currentGame.Score}</td>\
        <td>${currentGame.Time}</td></tr>`;
    })
  
    tableCode += "</table>";
  
  
    document.getElementById("detailTable").innerHTML = tableCode;
  })
  };