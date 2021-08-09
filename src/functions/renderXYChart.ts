import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
interface topTask {
  title: string;
  duration: number;
}
export default function renderXYChart(data: topTask[]) {
  am4core.useTheme(am4themes_animated);
  let chart = am4core.create("linechart", am4charts.XYChart);

  chart.data = data!;
  //create category axis for years
  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "title";
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.location = 0;

  //create value axis for income and expenses
  let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.opposite = true;

  //create columns
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = "title";
  series.dataFields.valueX = "duration";
  series.name = "Duration";
  series.columns.template.fillOpacity = 0.5;
  series.columns.template.strokeOpacity = 0;
  series.tooltipText = "Income in {categoryY}: {valueX.value}";

  //add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";

  //add legend
  chart.legend = new am4charts.Legend();
}
