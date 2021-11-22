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
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWFkYjIwMDcyOGJmZWVhNzM5ZjA2MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzUzOTY4MCwiZXhwIjoxNjQ1MzE1NjgwfQ.ZoJCqQTLOwtdZTm8ZsTD77BMV0-Zjiijz4fhm7YzSJk",
          },
        });

        const newUsers = res.data;
        setNewUsers(newUsers);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  console.log("New User Data:", newUser);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        {newUser.map((user) => (
          <li className="widgetSmListItem">
            <img
              // if there is no profile picture, use the default one
              src={
                user.profilePic ||
                "https://ui-avatars.com/api/?name=Emilian+Kasemi"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
