import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import PokeDexHome from "../PokeDexHome/PokeDexHome";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokeDexHome />
        </Route>

        {/* <ProtectedRoute path="/dashboard/:key?">
          <Dashboard></Dashboard>
        </ProtectedRoute> */}

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
