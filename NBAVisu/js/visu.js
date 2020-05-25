
function updateMap(){
  //  $('#mapDiv').load(document.URL +  ' #mapDiv');

  bubbles = [];
  var playerMap = document.getElementById("selectPlayerMap").value;
  var stateAb;
  var indexTeam;
  var stateVisited = [];
  d3.csv("DATA/draftStates/"+(playerMap+'').slice(0,-3)+".csv").then (function(data) {
   d3.csv("DATA/teamState2.csv").then (function(team) {

    for (var i = 0; i < data.length; i++) {
      for (var j = 0; j < team.length; j++) {
        if(data[i].Tm ==team[j].TeamAbr){
          stateAb = team[j].StateAbr;
          indexTeam = j;
          console.log(team[indexTeam].City)
          break;
        }};
        stateVisited.push(stateAb+'');
        bubbles.push(
        {
          city: team[indexTeam].City,
          centered: stateAb+'',
          fillKey: i+1+'',
          radius: Number(data[i]["PER"]),
          year: Number(data[i]["Year"])
        }
        );

      };
      var arcs = [];
      for (var i = 0; i < stateVisited.length-1; i++) {
        arcs.push(
        {
          origin: stateVisited[i],
          destination: stateVisited[i+1]
        });
      }; // end for


      try {
        map.arc(arcs, {strokeWidth: 3, arcSharpness: 1.4}, 
        {
          animationSpeed: 2
        });
      } catch (error) {
        console.log(error);
      }
         setTimeout(() => { // only start drawing bubbles on the map when map has rendered completely.
          map.bubbles(bubbles, {
            popupTemplate: function (geo, data) {
              return '<div class="hoverinfo">Team n°'+data.fillKey+', Year:'+ data.year+'<br/>PER: '+data.radius+'<br/>City:'+data.city+'</div>';
            }
          });
        }, 1000); // end timeout
         return false;
       });
return false;
});
return false;
} // end function update map

var map =
new Datamap(
{

  element: document.getElementById('mapDiv'),
  responsive: true,
  scope: "usa",
  geographyConfig: {
    popupOnHover: true,
    popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + '<br/>Number of players: <Strong>' +  data.Number_of_players + '</strong> '
    },
    borderColor: '#444',
    borderWidth: 1.5
  },
  fills: {
    '1':'#e6e6ff',
    '2':'#b3b3ff',
    '3':'#8080ff',
    '4':'#4d4dff',
    '5':'#1a1aff',
    '6':'#0000cc',
    '7':'#000099',
    '8':'#00001a',
    'MEDIUM':'#0fa0fa',
    'MINOR':'#bada55',
    'Low':'#e6e6ff',
    'Small':'#b3b3ff',
    'Medium':'#8080ff',
    'Large':'#4d4dff',
    'Huge':'#4d4dff',
    defaultFill: 'rgba(20,20,135,0.2)'
  },
  data: {
    "CA": {
     "fillKey": "Huge",
     "Number_of_players":343+296+263+367
   },

   "CO": {
     "fillKey": "Medium",
     "Number_of_players":307
   },

   "FL": {
     fillKey: "Large",
     "Number_of_players":222+233
   },
   "GA": {
     fillKey: "Medium",
     "Number_of_players":362
   },
   "IL": {
     fillKey: "Medium",
     "Number_of_players":348
   },
   "IN": {
     fillKey: "Small",
     "Number_of_players":260
   },
   "LA": {
     fillKey: "Low",
     "Number_of_players":60
   },
   "MA": {
     fillKey: "Large",
     "Number_of_players":405
   },
   "MI": {
     fillKey: "Medium",
     "Number_of_players":398
   },
   "MN": {
     fillKey: "Small",
     "Number_of_players":227
   },
   "NY": {
     fillKey: "Large",
     "Number_of_players":440
   },
   "NC": {
     fillKey: "Low",
     "Number_of_players":95
   },
   "OH": {
     fillKey: "Medium",
     "Number_of_players":367
   },
   "OK": {
     fillKey: "Low",
     "Number_of_players":77
   },
   "OR": {
     fillKey: "Medium",
     "Number_of_players":319
   },
   "PA": {
     fillKey: "Large",
     "Number_of_players":416
   },
   "TN": {
     fillKey: "Low",
     "Number_of_players":147
   },

   "TX": {
     fillKey: "Large",
     "Number_of_players":327+298+322
   },

   "UT": {
     fillKey: "Small",
     "Number_of_players":235
   },
   "WI": {
     fillKey: "Medium",
     "Number_of_players":378
   },
   "WA": {
     fillKey: "Low",
     "Number_of_players":170
   }

 }
})
map.labels();


// function to get the team after selection and put in in playerBox
function readTeamsAndYear(event){
  var notNull = 0; 
  var year = document.getElementById("seasonSelect").value.toUpperCase();
  var tm = document.getElementById("teamSelect").value.toUpperCase();
  var players = [];

  d3.csv("DATA/players_teams_seasons/"+tm+year+".csv").then (function(data) {

    for (var i = 0; i < data.length; i++) {
      players.push(data[i].Player);
      notNull = 1;
    };
    document.getElementById('players_selected').innerHTML = "";
    (listToBoxes(players));
    return false;
  });
  return false;
}; 

//make the nice selections boxes instead of ordinary ones. select by id
$('#seasonSelect').niceSelect();
$('#teamSelect').niceSelect();

function clearBuffer(){
  var checkboxesPlayers = document.getElementsByName('selectedPlayers');
  var checkboxesStats = document.getElementsByName('selectedStat');
  for (var checkboxS of checkboxesStats) {
    if (checkboxS.checked){
      checkboxS.checked = false;

    }};
    for (var checkboxS of checkboxesPlayers) {
      if (checkboxS.checked){
        checkboxS.checked = false;

      }};
      BufferStats=[];
      BufferPlayer=[];
      return false;
    };
    function listToBoxes(mylist){



      for (var i = 0; i < mylist.length; i++) {
        document.getElementById('players_selected').innerHTML += "\n";

        document.getElementById('players_selected').innerHTML += "<input type=\"checkbox\"name = selectedPlayers  id=\"players"+i+"\"  value="+(mylist[i]+'').replace(/ /g,"_")+"> ";
        document.getElementById('players_selected').innerHTML += "\n";
        document.getElementById('players_selected').innerHTML += "<font size =4><label for=\"players"+i+"\">"+mylist[i]+"</label></font><br>";

      };
      if(mylist.length<1){
        document.getElementById('players_selected').innerHTML += "<font size=10>Data Not available. Try picking a later year.</font>";
      }
      else{        document.getElementById('players_selected').innerHTML += "<button class=\"submitLarge\" type = \"submit\">Make Sanskey!</button>";
    }


    return false;
  };

  function readPlayers(event){
    var selectedPlayers = [];
    var StatsList = [];
    var checkboxesPlayers = document.getElementsByName('selectedPlayers');
    var checkboxesStats = document.getElementsByName('selectedStat');

    var indexes = [];



    for (var checkboxS of checkboxesStats) {
      if (checkboxS.checked){
        StatsList.push((checkboxS.value+''));

      }};

      console.log(StatsList);

      var year = document.getElementById("seasonSelect").value.toUpperCase();
      var tm = document.getElementById("teamSelect").value.toUpperCase();
      for (var checkboxP of checkboxesPlayers) {
        if (checkboxP.checked){
          selectedPlayers.push((checkboxP.value+'').replace("_"," ")+" "+year.slice(-2));

        }};
        if (StatsList.length < 1 ||selectedPlayers.length <1) {
          alert("Please select at least 1 player and 1 statistic to show!");
        };
        var stats = [StatsList];

        var players = [];
        d3.csv("DATA/players_teams_seasons/"+tm+year+".csv").then (function(data) {
          for (var i = 0; i < data.length; i++) {
            for (var j = 0; j<selectedPlayers.length; j++) {
              var temp = [];
              if (selectedPlayers[j] == data[i].Player+" "+year.slice(-2)) {
                for(var k of StatsList){
                  temp.push(Number(data[i][k]));
                };
                stats.push(temp);
                  }; // end if
                };// end for j
              }; // end for i

              console.log(selectedPlayers);
              updateDiagram(selectedPlayers, stats);
              return false;
    }); // end read csv
        return false;

      };
      var BufferStats=[];
      var BufferPlayer=[];

      function isInList(k, list){
        for (var i = 0; i < list.length; i++) {
          if(list[i] == k){
            return true;
          }
        };
        return false;
      };

      function  updateDiagram(selectedPlayers,s){
        document.getElementById('selectPlayerMap').innerHTML = "";
        BufferStats[0] = s[0];
        for (var i=0;i<s.length-1; i++){

         BufferStats.push(s[i+1]);
       };
       for (var k of selectedPlayers){

        if(!(isInList(k,BufferPlayer))){
          BufferPlayer.push(k);};
        };

        playersList = BufferPlayer;
        stats = BufferStats;
        drawChart();
        for (var player of BufferPlayer) {
          document.getElementById('selectPlayerMap').innerHTML += "<option value=\""+(player+'').replace(/ /g,"_")+"\">"+(player+'').slice(0,-3)+"</option>";
        };
        document.getElementById('selectPlayerMap').innerHTML += "<input name=\"playersMap\" class = \"submitMap\" type=\"submit\" value=\"GO!\" >";
        document.getElementById('selectPlayerMap').innerHTML += "</select>";
        return false;
      };
      </script>