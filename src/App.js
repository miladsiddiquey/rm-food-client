import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Order from './component/Order/Order';
import NoMatch from './component/NoMatch';
import Header from './component/Header/Header';
import AddProduct from './component/AddProduct/AddProduct';
import ManageProduct from './component/manageProduct/ManageProduct';
import CheckOut from './component/CheckOut/CheckOut';
import Login from './component/Login/Login';
import PrivetRout from './component/PrivetRout/PrivetRout';


export const UserContext = createContext()
export const ServiceContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [foods, setFoods] = useState([])

  


  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value={{foods, setFoods}}>
    <Router>
      <Header/>
      <Switch>        
        <Route path="/home">
          <Home/>
        </Route>
        <PrivetRout path="/admin">
          <Admin/>
        </PrivetRout>
        <PrivetRout path="/order">
          <Order/>
        </PrivetRout>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/addProduct">
          <AddProduct/>
        </Route>
        <Route path="/manage">
          <ManageProduct/>
        </Route>
        <PrivetRout path="/checkOut/:id">
          <CheckOut/>
        </PrivetRout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path ='*'>
          <NoMatch/>
        </Route>
      </Switch>
  </Router>
  </ServiceContext.Provider>
  </UserContext.Provider>
  );
};

export default App;