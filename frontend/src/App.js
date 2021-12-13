import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomeScreen from './Screens/HomeScreen';
import ShopScreen from './Screens/ShopScreen';
import ContactScreen from './Screens/ContactScreen';
import PlantScreen from './Screens/PlantScreen';
import TreeScreen from './Screens/TreeScreen';
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
import MyOrdersScreen from './Screens/MyOrdersScreen';
import AboutUsPage from './Components/Footer/Pages/AboutUsPage';
import RefundPage from './Components/Footer/Pages/RefundPage';
import PrivacyPolicyPage from './Components/Footer/Pages/PrivacyPolicyPage';
import ShippingInfoPage from './Components/Footer/Pages/ShippingInfoPage';
import TermsAndConditions from './Components/Footer/Pages/TermsAndConditions';

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
          <Route exact path='/tree'>
            <PlantScreen />
          </Route>
          <Route exact path='/contact'>
            <ContactScreen />
          </Route>
          <Route path='/product/:id'>
            <ProductScreen />
          </Route>
          <Route path='/tree/:id'>
            <TreeScreen />
          </Route>
          <Route path='/profile'>
            <ProfileScreen />
          </Route>
          <Route exact path='/orders'>
            <MyOrdersScreen />
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
          <Route exact path='/about_us'>
            <AboutUsPage />
          </Route>
          <Route exact path='/cancellation_refund'>
            <RefundPage />
          </Route>
          <Route exact path='/privacy_policy'>
            <PrivacyPolicyPage />
          </Route>
          <Route exact path='/shipping_information'>
            <ShippingInfoPage />
          </Route>
          <Route exact path='/terms_and_conditions'>
            <TermsAndConditions />
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
