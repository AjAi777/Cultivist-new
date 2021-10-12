import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
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
import ProfileScreen from './Screens/ProfileScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';

function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Router className='App'>
        <Header />
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
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path='/signin'>
            <SigninScreen />
          </Route>
          <Route exact path='/signup'>
            <SignupScreen />
          </Route>
          <Route exact path='/cart/:id?'>
            <CartScreen />
          </Route>
          <Route path='/shipping'>
            <ShippingScreen />
          </Route>
          <Route exact path='/payment'>
            <PaymentScreen />
          </Route>
          <Route exact path='/placeorder'>
            <PlaceOrderScreen />
          </Route>
          <Route exact path='/order/:id'>
            <OrderScreen />
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
