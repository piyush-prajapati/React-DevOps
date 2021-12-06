import Login from "./components/login";
import Home from "./components/home2";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/" component={Login}></Route>
      </Switch>
    </Router>
  );
}

export default App;
