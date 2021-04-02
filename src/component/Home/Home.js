import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContext  } from '../../App';
import Food from '../Food/Food';



const Home = () => {

    
    const { foods, setFoods } = useContext(ServiceContext)
    

    useEffect(() => {
        fetch('https://blooming-sierra-52964.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [foods])

   

    return (
        <div className="container">
            <div className="row ">

                {foods.length > 0 && foods.map((food, index) =>
                

                    <div key={index} className="col-sm-12 col-md-4 col-lg-4  mt-5">
                        <div className="card " style={{ width: '20rem', height: '26rem' }}>
                            <img src={food.imageURL} className="card-img-top" alt="" style={{ width: '18rem', height: '15rem' }} />
                            <div className="card-body ">
                                <h5 className="card-title">{food.name}</h5>
                                <div className="d-flex mt-5">
                                    <h2>${food.price}</h2>
                                    <button  className="btn btn-success ml-auto "> <Link className="text-white" to={`/checkOut/${food._id}`}>Buy Now</Link></button>
                                </div>

                            </div>
                        </div>
                    </div>

                )}

            </div>
        </div>
    );
};

export default Home;