import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/widgetSm";
import WidgetLg from "../../components/widgetLg/widgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/users/stats`, {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTU4MjhhZGMzNzVmODFiNzYwODNkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzE4OTM0NSwiZXhwIjoxNjQ0OTY1MzQ1fQ.vfQYSyWC9pGB4svEKrlYlOIghlw_-MyRpPQZ2eM5bK8",
          },
        });
        // sort takes two arguments, the first is the key to sort by, the second is the order
        const statsList = res.data.sort(function (a, b) {
          return a._id - b.id;
        });
        
       statsList.map((item) =>
          setUserStats((prev) => [
            // take this prev state, don't change anything, but add one more thing, which is name of the month. -1 because we start from 0 in months array
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, []);
  console.log("User Stats:",userStats)

 
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
