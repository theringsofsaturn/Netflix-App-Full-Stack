import "./app.css";
import Sidebar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <TopBar/>
     <div className="container">
       <Sidebar/>
       <Home/>
       </div>
    </div>
    </Router>
  );
}
export default App;
