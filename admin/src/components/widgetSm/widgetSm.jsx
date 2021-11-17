import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUser, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        // ?new=true is gonna return the 10 recent users
        const res = await axios.get(`/users?new=true`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTQ1ZGUxOGU4MzI1NWFmZDJjYzlhZCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzcxMTM0MzYsImV4cCI6MTY0NDg4OTQzNn0.GQ5ZbDGz8GOLslqVUpz9SmTLFXKEYlSDGQWjeZgLQ2I",
          },
        });

        const setNewUsers = res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={"https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tetyana Yaremk</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
