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
  primaryxAxis = { valueType: "Category", majorGridLines: { width: 0 } };
  primaryyAxis = {
    labelFormat: "${value}K",
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
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
          width={3}
          marker={{ visible: true, width: 10, height: 10 }}
          type="Line"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
