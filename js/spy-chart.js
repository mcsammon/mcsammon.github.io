$('document').ready(function() {
  var ctx = document.getElementById("myChart").getContext("2d");

  var options = {
    datasetFill : false,
    bezierCurve : false,
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
          label: "Sum of Squared 5-min. Returns",
          strokeColor: red,
          pointColor: red,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: red,
          data: data['30']
        },
        {
          label: "Daily Return",
          strokeColor: green,
          pointColor: green,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: green,
          data: data['60']
        },
        {
          label: "Volatility-Adjusted Return",
          strokeColor: blue,
          pointColor: blue,
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: blue,
          data: data['90']
        }
      ]
    }

    var myLineChart = new Chart(ctx).Line(chartData, options);
    var legend = myLineChart.generateLegend();
    $('#chart-area').append(legend);
  });

});
