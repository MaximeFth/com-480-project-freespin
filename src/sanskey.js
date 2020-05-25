  var playersList = ['player1', 'player2'];
  var stats = [["free throws", "pts"],[5,4], [3,5] ];


  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
//console.log(playersList);
//console.log(stats);

  var datatable1 = new google.visualization.DataTable();
  datatable1.addColumn('string', 'From');
  datatable1.addColumn('string', 'To');
  datatable1.addColumn('number', 'Weight');
  var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

  var options = {
    height: 800,
    sankey: {
      node: {
        colors: colors,
        label: {fontSize: 20,
                color: '#1f78b4'}

      },
      link: {
        colorMode: 'gradient',
        colors: colors
      }
    }
  };
  for (var i =0; i<playersList.length; i++){
    for (var k = 0; k < stats[0].length; k++) {
      
   
    datatable1.addRows([
     [ playersList[i], stats[0][k], stats[i+1][k]]
     ]);
  }
   };
    // Instantiate and draw our chart, passing in some options.

    var chart = new google.visualization.Sankey(document.getElementById('sankeyVisu'));
    chart.draw(datatable1, options);

    return false;
  
};