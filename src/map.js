
/*<!-- Source for the map diagram inspiration code : http://bl.ocks.org/NPashaP/a74faf20b492ad377312 -->
*/
function tooltipHtml(n, d){ /* function to create html content string in tooltip div. */
    return "<h4>"+n+"</h4><table>";
  }
  
  var sampleData ={}; /* Sample random data. */ 
  ["HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
  "ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH", 
  "MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT", 
  "CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN", 
  "WI", "MO", "AR", "OK", "KS", "LS", "VA"]
    .forEach(function(d){ 
      var low=Math.round(100*Math.random()), 
        mid=Math.round(100*Math.random()), 
        high=Math.round(100*Math.random());
      sampleData[d]={low:d3.min([low,mid,high]), high:d3.max([low,mid,high]), 
          avg:Math.round((low+mid+high)/3), color:d3.interpolate("#ffffcc", "#800026")(low/100)}; 
    });
  
  /* draw states on id #statesvg */ 
  uStates.draw("#statesvg", sampleData, tooltipHtml);
  
  d3.select(self.frameElement).style("height", "600px"); 