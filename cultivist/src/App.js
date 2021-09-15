import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plant from "./Components/Plant/Plant";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Contact from "./Components/Contact/Contact";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Alert from "./Components/Alert/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  return (
    <>
      <Router className="App">
        <Header />
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/plant">
            <Plant />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/signin">
            <Signin showAlert={showAlert} />
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert} />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
