import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plant from "./Components/Plant/Plant";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";


function App() {
  return (
    <>
      <Router className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/plant">
            <Plant />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
