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
        const res = await axios.get(`/users/stats`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1ZGUxOGU4MzI1NWFmZDJjYzlhZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzcxMTM0MzYsImV4cCI6MTY0NDg4OTQzNn0.GQ5ZbDGz8GOLslqVUpz9SmTLFXKEYlSDGQWjeZgLQ2I",
          },
        });
        res.data.map((item) =>
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
  // console.log("User Stats:",userStats)

 
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
