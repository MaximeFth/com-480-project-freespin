  var playersList = ['player1', 'player2', 'player3', 'player4', 'player5'];
  var pointsList = [1,2,4,4,5];
  var threepointsList =[1,2,4,4,5];
  var offenseRbList = [1,2,4,4,5];
  var defenseRBList = [1,2,4,4,5];
  var ftrList  = [1,2,4,4,5];


  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

  var datatable1 = new google.visualization.DataTable();
  datatable1.addColumn('string', 'From');
  datatable1.addColumn('string', 'To');
  datatable1.addColumn('number', 'Weight');
  var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

  var options = {
    height: 600,
    sankey: {
      node: {
        colors: colors
      },
      link: {
        colorMode: 'gradient',
        colors: colors
      }
    }
  };
  for (var i =0; i<playersList.length; i++){
    datatable1.addRows([
     [ playersList[i], 'points', pointsList[i]],
     [ playersList[i], '3pts', threepointsList[i]],
     [ playersList[i], 'ORB', offenseRbList[i]],
     [ playersList[i], 'DRB', defenseRBList[i]],
     [ playersList[i], 'ftr', ftrList[i]]
     ]);
  }
    // Instantiate and draw our chart, passing in some options.

    var chart = new google.visualization.Sankey(document.getElementById('sankeyVisu'));
    chart.draw(datatable1, options);

    return false;
  
};