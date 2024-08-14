
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';
import { AiFillDelete } from "react-icons/ai";


const GetProductVarient = () => {
  const [products, setProducts] = useState([]);
  // const [imagename, setimagename] = useState([]);
  // const [image, setimage] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://furniro-backend-4vg0.onrender.com/api/getallproductvarient');
        setProducts(response.data.data);
        // setimagename(response.data.data.image);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };


    fetchProducts();


    // setimage(`http://localhost:5000/api/getproductvarientimage/${imagename}`);

  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`https://furniro-backend-4vg0.onrender.com/api/deleteoneproductvarient/${id}`);

      window.location.reload();

    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <button onClick={() => handleDelete(product._id)} style={{ border: "none", height: "20%", backgroundColor: "white", color: "red" }}><AiFillDelete /></button>
            {/* <img src={image} alt={product.productid.productname} className="product-image" /> */}
            <img
              src={`https://furniro-backend-4vg0.onrender.com/api/getproductvarientimage/${product.image[0]}`} // Use the first image in the array
              alt={product.productid.productname}
              className="product-image"
            />
            <div className="product-info">
              <h2> {product.productid.productname}</h2>
              <p><b>Price: </b>${product.price}</p>
              <p><b>Size: </b>{product.size}</p>
              <p><b>Color: </b>{product.color}</p>
              <p><b>Description:</b>{product.productid.description} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetProductVarient;
