import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

const obj = JSON.parse(
  '{ "data": { "x": ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], "y": [35,28,34,32,50,32,35,55,38,30,25,32] }}'
);
const x_len = Object.keys(obj["data"]["x"]).length;
const y_len = Object.keys(obj["data"]["y"]).length;
let processed_data = [];
let primaryxAxis;

if (x_len === y_len) {
  for (let i = 0; i < x_len; i++) {
    let temp_object = { x: obj["data"]["x"][i], y: obj["data"]["y"][i] };
    processed_data.push(temp_object);
  }
  primaryxAxis = { valueType: "Category" };
}
function App() {
  return (
    <div>
      <h1>Test Chart</h1>
      <ChartComponent id="charts" primaryXAxis={primaryxAxis}>
        <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={processed_data}
            xName="x"
            yName="y"
            name="Sales"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default App;
