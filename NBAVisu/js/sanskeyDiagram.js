

var width = 600;
var height = 800;


var svg = d3.select("#sankeyVisu").append("svg")
.attr("width", width )
.attr("height", height)
.append("g");

var color = d3.color("steelblue");

var sankey = d3.sankey()
.nodeWidth(25)
.nodePadding(90)
.size([width, height]);

d3.json("nodes.json", function(error, graph) {
  sankey
  .nodes(graph.nodes)
  .links(graph.links)
  .layout(1);

  var link = svg.append("g")
  .selectAll(".link")
  .data(graph.links)
  .enter()
  .append("path")
  .attr("class", "link")
  .attr("d", sankey.link() )
  .style("stroke-width", function(d) { return Math.max(1, d.dy); })
  .sort(function(a, b) { return b.dy - a.dy; });

  var node = svg.append("g")
  .selectAll(".node")
  .data(graph.nodes)
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
  .call(d3.drag()
    .subject(function(d) { return d; })
    .on("start", function() { this.parentNode.appendChild(this); })
    .on("drag", dragmove));

  // add the rectangles for the nodes
  node
  .append("rect")
  .attr("height", function(d) { return d.dy; })
  .attr("width", sankey.nodeWidth())
  .style("fill", function(d) { return d.color = "rgba(28, 190, 202, 0.50)"; })
  .style("stroke", function(d) { return d3.rgb(d.color).darker(2); });
    // Add hover text
   

  // add in the title for the nodes
  node
  .append("text")
  .attr("x", -6)
  .attr("y", function(d) { return d.dy / 2; })
  .attr("dy", ".35em")
  .attr("text-anchor", "end")
  .attr("transform", null)
  .text(function(d) { return d.name; })
  .filter(function(d) { return d.x < width / 2; })
  .attr("x", 6 + sankey.nodeWidth())
  .attr("text-anchor", "start");

  // the function for moving the nodes
  function dragmove(d) {
    d3.select(this)
    .attr("transform",
      "translate("
       + d.x + ","
       + (d.y = Math.max(
        0, Math.min(height - d.dy, d3.event.y))
       ) + ")");
    sankey.relayout();
    link.attr("d", sankey.link() );
  }

});
