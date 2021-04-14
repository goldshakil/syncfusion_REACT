import {
  Category,
  ChartComponent,
  ColumnSeries,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
  RangeAreaSeries,
  Zoom,
} from "@syncfusion/ej2-react-charts";

// React main component
function App() {
  // Defining parameters
  const obj = JSON.parse(
    '{"data": {"x": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],"avg": [35, 28, 34, 32, 50, 32, 35, 55, 38, 30, 25, 32], "min": [30, 20, 30, 30, 45, 30, 30, 50, 32, 25, 20, 25],"max": [40, 30, 40, 40, 55, 40, 47, 60, 48, 35, 30, 38]}}'
  );
  const xLen = Object.keys(obj["data"]["x"]).length;
  const yLen = Object.keys(obj["data"]["avg"]).length;
  const minLen = Object.keys(obj["data"]["min"]).length;
  const maxLen = Object.keys(obj["data"]["max"]).length;

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

  // Defining data for the range graph
  let processed_range_data = [];
  let rangeMarkerSettings;
  let rangeOpacity;
  let rangeBorder;
  let rangeAnimationSettings;
  if (xLen === minLen && xLen === maxLen) {
    for (let i = 0; i < xLen; i++) {
      let temp_object = {
        x: obj["data"]["x"][i],
        max: obj["data"]["max"][i],
        min: obj["data"]["min"][i],
      };
      processed_range_data.push(temp_object);
    }
    rangeOpacity = 0.4;
    rangeBorder = {
      width: 5,
    };

    rangeMarkerSettings = {
      visible: false,
      height: 8,
      width: 8,
      opacity: 1,
      dataLabel: { visible: false, position: "Outer" },
    };
    rangeAnimationSettings = { enable: true };
  }

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      legendSettings={lSettings}
      title="Test Chart"
      tooltip={tooltipSettings}
      zoomSettings={{
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: "X",
        enableScrollbar: true,
      }}
    >
      <Inject
        services={[
          RangeAreaSeries,
          ColumnSeries,
          Tooltip,
          Zoom,
          Legend,
          LineSeries,
          Category,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={processed_range_data}
          border={rangeBorder}
          xName="x"
          high="max"
          opacity={rangeOpacity}
          marker={rangeMarkerSettings}
          low="min"
          animation={rangeAnimationSettings}
          name="Sales Min-Max"
          type="RangeArea"
        ></SeriesDirective>

        <SeriesDirective
          dataSource={processed_data}
          xName="x"
          yName="y"
          name="Sales Avg"
          width={3}
          marker={markerSettings}
          type="Line"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default App;
