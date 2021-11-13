import "./navbar.scss";
// import NetflixLogo from "../../assets/netflix_logo.png";
import ProfilePicture from "../../assets/profile_picture.jpg";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //state for controling the navbar background color on scrolling
  // when it's on the top it's gonna be false and when you scroll it's gonna be true
  // so, it will be transparent on the top (false) and black when scrolling (true)
  // you can check it in the console the pageyoffset
  const [isScrolled, setIsScrolled] = useState(false);
  // console.log(window.pageYOffset)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  // console.log(isScrolled); // it's gonna be true or false

  return (
    // if state is true is gonna be class navbar & scrolled, if it's false then just class navbar (which is transparent right now )
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
           <Link to="/series" className="link">
           <span className="navbarmainLinks">Homepage</span>
          </Link>
         
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span className="navbarmainLinks">Movies</span>
          </Link>

         
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>KID</span>
          <NotificationsIcon className="icon" />
          <img src={ProfilePicture} alt="" />

          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
