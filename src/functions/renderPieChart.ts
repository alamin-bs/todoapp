import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

interface doneUndoneTasks {
  title: string;
  total: number;
}

export default function renderPieChart(data: doneUndoneTasks[]) {
  am4core.useTheme(am4themes_animated);
  let chart = am4core.create("chartdiv", am4charts.PieChart);
  chart.data = data!;
  chart.legend = new am4charts.Legend();
  let pieSeries = chart.series.push(new am4charts.PieSeries());
  pieSeries.dataFields.value = "total";
  pieSeries.dataFields.category = "title";
}
