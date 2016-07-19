$('document').ready(function() {
  var ctx = document.getElementById("myChart").getContext("2d");

  var options = {
    datasetFill : false,
    bezierCurve : false,
    //Need to set scale begin at zero to false to prevent display issues
    scaleBeginAtZero: false,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>;width:12px;height:12px;display:inline-block\"></span><%if(datasets[i].label){%> <%=datasets[i].label%><%}%></li><%}%></ul>"
  }
  red = "rgba(255, 0, 0, 1)"
  green = "rgba(0, 255, 0, 1)"
  blue = "rgba(0, 0, 255, 1)"

  $.get("http://nameless-caverns-8274.herokuapp.com/", function(data) {

    $('#loading').hide()

    var chartData = {
      labels: data.dates,
      datasets: [
        {
          label: "Sqrt. of Sum of Squared 5-min. Returns",
          //Want to put sum of squared returns and daily returns on same axis
          yAxesGroup: "1",
          strokeColor: red,
          pointColor: red,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: red,
          data: data['30']
        },
        {
          label: "Daily Return",
          //Again, want to put on same axis as squared returns
          yAxesGroup: "1",
          strokeColor: green,
          pointColor: green,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: green,
          data: data['60']
        },
        {
          label: "Volatility-Adjusted Return",
          //want to put on a seperate axis
          yAxesGroup: "2",
          strokeColor: blue,
          pointColor: blue,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: blue,
          data: data['90']
        }
      ],
      yAxes: [{
        name: "1",
        scalePositionLeft: false,
        scaleFontColor: "rgba(151,137,200,0.8)"
      }, {
        name: "2",
        scalePositionLeft: true,
        scaleFontColor: "rgba(151,187,205,0.8)"
      }]
    }

    var myLineChart = new Chart(ctx).Line(chartData, options);
    var legend = myLineChart.generateLegend();
    $('#chart-area').append(legend);
  });

});
