import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {

        fetch('https://blooming-sierra-52964.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));

    }, [])

    return (
        <div className="container mt-5 pt-5">
            <h2 >You have: {orders.length} Orders</h2>
            {
                orders.map(order =>

                    <div className="row">
                        <div className="text-center col-12">
                         <table class="table">

                                <tbody>
                                    <tr>
                                        
                                        <td>User Name: {order.email}</td>
                                        <td>Product Name: {order.name}</td>
                                        <td>Product wight: {order.wight}</td>
                                        <td>Product price: {order.price}</td>
                                        <td>Product price: {order.price}</td>
                                        <td>Total price: {order.price}</td>
                                        <td>orderTime: {order.orderTime}</td>
                                    </tr>

                                </tbody>
                            </table>


                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default Order;