// Categories.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';
import { AiFillDelete } from "react-icons/ai";


const GetCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getallcategory');
        setCategories(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);




  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.post(`http://localhost:5000/api/deleteonecategory/${id}`);

      // Update state to remove category
      // setCategories(categories.filter(category => category.id !== id)); 


      window.location.reload();

    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* <h2>All Categories :</h2> */}
      <div className="categories-container">

        {categories.map((category) => (
          <div key={category.id} className="category-card">
            {/* <button onClick={() => handleDelete(category._id)}><AiFillDelete /></button> */}

            <h2>{category.categoryname}</h2>
            <p>{category.description}</p>

          </div>
        ))}
      </div>
    </>
  );
};

export default GetCategory;
