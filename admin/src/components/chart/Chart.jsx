import "./chart.css";
// importing SimpleLineChart example from Recharts Library
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>

      {/* responsive container for the chart from Recharts Library example - SimpleLineChart */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {/* aspect={4 / 1} in the line above means that if the width is 4 units, the height will be 1 unit  */}

        {/* LineChart will display the data inside data array */}
        <LineChart data={data}>
          {/* the data cannot be displyaed without indicating the Xaxis and Yaxis */}
          {/* its name is gonna be the "name" inside the objects of the data array */}
          {/* we can give anything inside the objects in the data array (example: for our project it will be our months (Jan, Feb, Mar, etc.))
          The example in in SimpleLineChart is this object inside data array:
           {
                name: 'Page A',
                uv: 4000,
                pv: 2400,
                amt: 2400,
            }  
            */}
          {/* ** if we want we can add also Yaxis to display the Y axis in the chart with Yaxis with <Yaxis/> */}
          <XAxis dataKey="name" stroke="#000000" />
          {/* Line is the most important part here to display the chart. 
          dataKey is like: dataKey="Active User". We can put the name we want. 
          the stroke is to give color for names, in our case "months" */}
          <Line type="monotone" dataKey={dataKey} stroke="#08F213" />
          <Tooltip />
          {/* cartesian grid is to give the squared grid in the chart.
          strokeDasharray is to separate the dashes in the grid to look more nice visually.
          if we have grid here, display cartesian grid */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
