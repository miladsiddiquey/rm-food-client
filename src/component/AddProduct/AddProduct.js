import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {

  const { register, handleSubmit, watch, errors } = useForm();

  const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
    const foodData = {
      name: data.name,
      price: data.price,
      wight: data.wight,
      imageURL: imageURL
    }

    const url = `https://blooming-sierra-52964.herokuapp.com/addFood`
    console.log(foodData)
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(foodData)
    })
      .then(res => console.log('server site respons', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '18aa31c052aa8ecc232f80604caa2d68');
    imageData.append('image', event.target.files[0])


    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });



  }


  return (
    <div>
      <div className="container">
        <div className="row">
        <div className="col-2"></div>
      <div className="col-lg-10 col-md-12 col-sm-12">
        <h3>Add Product</h3>

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
        <label  className="form-label">Product Name</label>
          <input name="name" className="form-control" placeholder=" Name" type="text" ref={register} />
        </div>
        <div className="mb-3">
        <label  className="form-label">Product price</label>
        <input name="price" className="form-control" placeholder="Price" type="number" ref={register} />
        </div>
        <div className="mb-3">
        <label  className="form-label">Wight</label>
        <input name="wight" className="form-control" placeholder="wight" type="number" ref={register} />
        </div>
          <div className="mb-3">
          <label  className="form-label">Import Image</label>
          <input name="exampleRequired" className="form-control" type="file" onChange={handleImageUpload} />
          </div>
                   
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
        </div>
      </div>

    </div>
  );
};

export default AddProduct;