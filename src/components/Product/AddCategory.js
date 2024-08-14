import React, { useState } from 'react';
import axios from 'axios';
import './product.css';

const AddCategory = () => {
  const [categoryname, setCategoryname] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // API call to add a new category
    axios.post('https://furniro-backend-4vg0.onrender.com/api/addcategory', {
      categoryname,
      description,
    })
      .then(response => {
        setMessage('Category added successfully!');
        // Reset form fields
        setCategoryname('');
        setDescription('');
      })
      .catch(error => {
        console.error('Error adding category:', error);
        setMessage('Error adding category. Please try again.');
      });
  };

  return (
    <div className="add-category-container">
      <h1>Add New Category</h1>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit} className="add-category-form">
        <div className="form-group">
          <label htmlFor="categoryname">Category Name:</label>
          <input
            type="text"
            id="categoryName"
            value={categoryname}
            onChange={(e) => setCategoryname(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default AddCategory;
