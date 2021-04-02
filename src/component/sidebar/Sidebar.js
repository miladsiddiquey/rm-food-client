import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div>
            <div class="sidebar">
                <Link to="/manage">Manage Product</Link>
                <Link to="/addProduct">Add Product</Link>
                <Link to="/editProduct">Edit Product</Link>
                
            </div>

           
        </div>
    );
};

export default Sidebar;