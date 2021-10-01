import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Alert from './Components/Utils/Alert';
import HomeScreen from './Screens/HomeScreen';
import ShopScreen from './Screens/ShopScreen';
import ContactScreen from './Screens/ContactScreen';
import PlantScreen from './Screens/PlantScreen';
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import ProductScreen from './Screens/ProductScreen';
import ErrorScreen from './Screens/ErrorScreen';
import Footer from './Components/Footer/Footer';
import CartScreen from './Screens/CartScreen';

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
            <HomeScreen />
          </Route>
          <Route exact path='/shop'>
            <ShopScreen />
          </Route>
          <Route exact path='/plant'>
            <PlantScreen />
          </Route>
          <Route exact path='/contact'>
            <ContactScreen />
          </Route>
          <Route path='/product/:id'>
            <ProductScreen />
          </Route>
          <Route exact path='/signin'>
            <SigninScreen showAlert={showAlert} />
          </Route>
          <Route exact path='/signup'>
            <SignupScreen showAlert={showAlert} />
          </Route>
          <Route exact path='/cart/:id?'>
            <CartScreen />
          </Route>
          <Route>
            <ErrorScreen />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
