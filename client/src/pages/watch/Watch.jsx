// import Trailer from "../../assets/trailer.mp4";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://lh3.googleusercontent.com/IWB5xUVWXNdVHW3szJTxN0SWa_1FV09XlFwLbU91a-TO7KCk7Jgmud5xFWY8v44XPR3QwqQeXV_WUvGoVcZlZfX29IDfyPdi-HYDFFiUWtiQedBzBKxLTCgmfMbcU_NznHkvdqMHAN4=dv"
      />
    </div>
  );
};

export default Watch;
