// Categories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';
import { AiFillDelete } from "react-icons/ai";


const GetProduct = () => {
  const [products, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const response = await axios.get('https://furniro-backend-4vg0.onrender.com/api/getallproduct');
        setproducts(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchproducts();
  }, []);



  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete(`https://furniro-backend-4vg0.onrender.com/api/deleteoneproduct/${id}`);

      window.location.reload();

    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="categories-container">
      {/* <h2>All Products :</h2> */}
      {products.map((product) => (
        <div key={product.id} className="category-card">

          {/* <button onClick={() => handleDelete(product._id)} style={{ border: "none" }}><AiFillDelete /></button> */}

          <h2>{product.productname}</h2>
          <p><b>Description : </b>{product.description}</p>

          <p> <b>category : </b>{product.categoryid.categoryname}</p>

        </div>
      ))
      }
    </div >
  );
};

export default GetProduct;
