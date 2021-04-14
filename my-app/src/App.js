import {
  Category,
  ChartComponent,
  ColumnSeries,
  SplineSeries,
  DataLabel,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

// Defining parameters
const obj = JSON.parse(
  '{"data": {"x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],"avg": [35, 28, 34, 32, 50, 32, 35, 55, 38, 30, 25, 32], "min": [30, 20, 30, 30, 45, 30, 30, 50, 32, 25, 20, 25],"max": [40, 30, 40, 40, 55, 40, 47, 60, 48, 35, 30, 38]}}'
);
const xLen = Object.keys(obj["data"]["x"]).length;
const yLen = Object.keys(obj["data"]["avg"]).length;

// Defining data for the average graph
let processed_data = [];
let primaryxAxis;
let primaryyAxis;
let lSettings;
let tooltipSettings;
let markerSettings;
if (xLen === yLen) {
  for (let i = 0; i < xLen; i++) {
    let temp_object = { x: obj["data"]["x"][i], y: obj["data"]["avg"][i] };
    processed_data.push(temp_object);
  }
  primaryxAxis = { valueType: "Category", majorGridLines: { width: 0 } };
  primaryyAxis = {
    labelFormat: "${value}K",
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  lSettings = true;
  tooltipSettings = { enable: true, shared: false };
  markerSettings = { visible: true, width: 10, height: 10 };
}

// React main component
function App() {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={lSettings}
      title="Test Chart"
      tooltip={tooltipSettings}
    >
      <Inject
        services={[ColumnSeries, Tooltip, Legend, SplineSeries, Category]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={processed_data}
          xName="x"
          yName="y"
          name="Sales"
          width={3}
          marker={markerSettings}
          type="Spline"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
