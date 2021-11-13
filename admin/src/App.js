import Sidebar from "./components/sidebar/SideBar";
import TopBar from "./components/topbar/TopBar";
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
       </div>
    </div>
    </Router>
  );
}
export default App;
