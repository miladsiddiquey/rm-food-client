import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ServiceContext, UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const { foods, setFoods } = useContext(ServiceContext)

    const { id } = useParams()
    const particularItem = foods.find(item => item._id == id)
    console.log(particularItem)


    const handleCheckOut =() =>{

        const orderDetails = {...loggedInUser, ...particularItem,   orderTime: new Date()}
        fetch('https://blooming-sierra-52964.herokuapp.com/addOrder',{
            method : "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('your order placed successfully');
            }
        })
        
    }

    return (
        <div className="container">
            <div className="row mt-5">
            <h1>CheckOut</h1>
            <table className="table mt-5 pt-5">
                
                <thead className="text-muted">
                    <tr>
                        
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="fw-bold">
                    <tr>                      
                        <td>{particularItem.name}</td>
                        <td>1</td>
                        <td>${particularItem.price}</td>
                    </tr>
                    <tr>                      
                        <td>Total</td>
                        <td>1</td>
                        <td>${particularItem.price}</td>
                    </tr>
                    
                </tbody>
               
                <button className="btn btn-success mt-5 me-md-2 " onClick={()=>handleCheckOut()} >checkOut</button>
                
            </table>
            </div>
        </div>
    );
};

export default CheckOut;