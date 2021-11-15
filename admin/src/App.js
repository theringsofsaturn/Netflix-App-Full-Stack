import "./app.css";
import Sidebar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import UserList from "./pages/userList/userList";
import User from "./pages/user/User";

function App() {
  // const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        {/* <Route path="/login"><Redirect to="/" /> : <Login /></Route> */}

        <>
          <Topbar />
          <div className="container">
            <Sidebar />
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
