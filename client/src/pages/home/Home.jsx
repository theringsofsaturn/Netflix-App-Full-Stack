import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          // lists is endpoint (we are using proxy as URL).
          // if there is a type, then use type query
          // *lists* is the endpoint
          `lists${type ? "?type=" + type : ""}${
            // if there is a genre, then add one more query, which is genre query
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODlkMjExY2M2YzNjM2Q3NDU2N2MzOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQyMjIzMSwiZXhwIjoxNjM2ODU0MjMxfQ.QDQOb3Giz_bHc5Ujv-50YVH5kQar39vrQB0dHSyMJDU",
            },
          }
        );
        setLists(res.data);
        console.log("DATA:", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]); // whenever type or genre changes, it is gonna call this useEffect. (getRandomLists will be called and data will be fetched)

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {/* For each list, call my List component and paste my list */}
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
