import React, { useContext } from 'react';
import { ServiceContext } from '../../App';

const ManageProduct = () => {

    const { foods, setFoods } = useContext(ServiceContext)

   


    const delateFood = id =>{
        fetch(`https://blooming-sierra-52964.herokuapp.com/deleteFood/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(result=>{
            console.log('deleted successfully',result)
        })


    }

    return (
        <div className="container">
            {foods.length > 0 && foods.map((food, index) =>
                <div key={index} className="row " >
                    <div className="col-2"></div>

                   <div className="col-lg-10 col-md-10 col-sm-12">
                   <table className="table">
                        
                        <tbody>                      
                       <tr>
                       
                        <td><h4 className="ml-4">{food.name}</h4></td>
                        <td><h4 className="ml-5">${food.price}</h4></td>
                        <td><h4 className="ml-5">{food.wight}</h4></td>
                        <td><button onClick={()=> delateFood(food._id)}>Delate</button></td>
                       </tr>
                        </tbody>
                </table>
                   </div>


                </div>
            )}
        </div>
    );
};

export default ManageProduct;