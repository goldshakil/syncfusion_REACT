import {
  Category,
  ChartComponent,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

const obj = JSON.parse(
  '{ "data": { "x": ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], "y": [35,28,34,32,50,32,35,55,38,30,25,32] }}'
);
const xLen = Object.keys(obj["data"]["x"]).length;
const yLen = Object.keys(obj["data"]["y"]).length;
let processed_data = [];
let primaryxAxis;
let primaryyAxis;
let lSettings;
let tooltipSettings;

if (xLen === yLen) {
  for (let i = 0; i < xLen; i++) {
    let temp_object = { x: obj["data"]["x"][i], y: obj["data"]["y"][i] };
    processed_data.push(temp_object);
  }
  primaryxAxis = { valueType: "Category" };
  primaryyAxis = { labelFormat: "${value}K" };
  lSettings = true;
  tooltipSettings = { enable: true, shared: false };
}
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
        services={[ColumnSeries, Tooltip, Legend, LineSeries, Category]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={processed_data}
          xName="x"
          yName="y"
          name="Sales"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
