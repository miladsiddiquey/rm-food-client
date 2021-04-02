import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../manageProduct/ManageProduct';
import Sidebar from '../sidebar/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Admin = () => {
  return (
    <Router>
      <Sidebar/>
    <Switch>
    <Route path="/addProduct">
      <AddProduct/>
    </Route>
    <Route path="/manage">
      <ManageProduct/>
    </Route>
    <Route path="/">
      <AddProduct/>
    </Route>
  </Switch>

</Router>
  );
};

export default Admin;