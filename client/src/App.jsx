import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { useContext } from "react";
const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* if there is user, we can go to te home page. If there is no user, go to register page */}
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {/* if we don't have a user, go to register page, if we have a user, go to home page */}
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        {/* if we don't have a user, go to login page, if we have a user, go to home page */}
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {/* if there is a user, you can see these pages */}
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
