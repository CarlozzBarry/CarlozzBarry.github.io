// Set the dimensions of the canvas / graph
var lmargin = {top: 30, right: 20, bottom: 70, left: 50},
    lwidth = 1400 - lmargin.left - lmargin.right,
    lheight = 300 - lmargin.top - lmargin.bottom;

// Parse the date / time
var parseDate = d3.timeParse("%Y");

// Set the ranges
var x = d3.scaleTime().range([0, lwidth]);
var y = d3.scaleLinear().range([lheight, 0]);

// Define the line
var priceline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });

// Adds the svg canvas
var lineSvg = d3.select("#linesVis")
    .append("svg")
        .attr("width", lwidth + lmargin.left + lmargin.right)
        .attr("height", lheight + lmargin.top + lmargin.bottom)
    .append("g")
        .attr("transform",
              "translate(" + lmargin.left + "," + lmargin.top + ")");

// Get the data
d3.csv("1995-1999 Wave - Foglio1.csv", function(error, ldata) {

    ldata.forEach(function(d) {
		d.date = parseDate(d.date);
		d.price = +d.price;
    });

    // Scale the range of the data
    x.domain(d3.extent(ldata, function(d) { return d.date; }));
    y.domain([0, d3.max(ldata, function(d) { return d.price; })]);

    // Nest the entries by symbol
    var dataNest = d3.nest()
        .key(function(d) {return d.symbol;})
        .entries(ldata);

    // set the colour scale
    var lcolor = d3.scaleOrdinal(d3.schemeCategory10);

    legendSpace = lwidth/dataNest.length; // spacing for the legend

    // Loop through each symbol / key
    dataNest.forEach(function(d,i) {

        lineSvg.append("path")
            .attr("class", "line")
            .style("stroke", function() { // Add the colours dynamically
                return d.color = lcolor(d.key); })
            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign an ID
            .attr("d", priceline(d.values));

        // Add the Legend
        lineSvg.append("text")
            .attr("x", (legendSpace/2)+i*legendSpace)  // space legend
            .attr("y", 250)
            .attr("class", "legend")    // style the legend
            .style("fill", function() { // Add the colours dynamically
                return d.color = lcolor(d.key); })
            .on("click", function(){
                // Determine if current line is visible
                var active   = d.active ? false : true,
                newOpacity = active ? 0 : 1;
                // Hide or show the elements based on the ID
                d3.select("#tag"+d.key.replace(/\s+/g, ''))
                    .transition().duration(100)
                    .style("opacity", newOpacity);
                // Update whether or not the elements are active
                d.active = active;
                })
            .text(d.key);

    });

  // Add the X Axis
  lineSvg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0,200)")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  lineSvg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));

});
