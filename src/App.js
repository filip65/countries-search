import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/detail/:country" children={<Detail />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
