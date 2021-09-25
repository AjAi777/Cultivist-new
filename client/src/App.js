import './App.css';
import Header from './Components/Header/Header';
import Home from './Screens/HomeScreen';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plant from './Screens/PlantScreen';
import Signin from './Screens/SigninScreen';
import Signup from './Screens/SignupScreen';
import Contact from './Screens/ContactScreen';
import ErrorPage from './Screens/ErrorScreen';
import Alert from './Components/Alert/Alert';
import Shop from './Screens/ShopScreen';
import { useState } from 'react';

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
      <Router className='App'>
        <Header />
        <Alert alert={alert} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/shop'>
            <Shop />
          </Route>
          <Route exact path='/plant'>
            <Plant />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/signin'>
            <Signin showAlert={showAlert} />
          </Route>
          <Route exact path='/signup'>
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
