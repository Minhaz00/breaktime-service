import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Menubar from './Components/Header/Menubar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/NotFound/Notfound';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Menubar></Menubar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/service'>
            <Services></Services>
          </Route>

          <PrivateRoute path='/serviceDetails/:Id'>
              <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <Route exact path='/about'>
            <About></About>
          </Route>

          <PrivateRoute exact path='/blogs'>
            <Blogs></Blogs>
          </PrivateRoute>

          <PrivateRoute exact path='/booking'>
            <Booking></Booking>
          </PrivateRoute>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
            <Register></Register>
          </Route>

          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
