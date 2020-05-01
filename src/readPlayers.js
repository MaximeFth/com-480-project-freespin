
d3.csv("DATA/nba-players-stats/PlayersAndPlayersData.csv", function(data) {
    for (var i = 0; i < data.length; i++) {
        console.log(data[i].Player);
        console.log(data[i].birth_state);
    }
});
