// // AddProduct.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './product.css';


// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     productName: '',
//     color: '',
//     price: '',
//     oldPrice: '',
//     image: null,
//     tags: ''
//   });
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'file' ? files[0] : value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const productData = new FormData();
//     productData.append('productid', formData.productid);
//     productData.append('color', formData.color);
//     productData.append('price', formData.price);
//     productData.append('oldprice', formData.oldprice);
//     productData.append('image', formData.image);
//     productData.append('tags', formData.tags);

//     try {
//       const response = await axios.post('http://localhost:5000/api/addproductvarient', productData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setMessage('Product added successfully!');
//     } catch (err) {
//       setMessage('Error adding product. Please try again.');
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             name="productid"
//             value={formData.productid}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Color</label>
//           <input
//             type="text"
//             name="color"
//             value={formData.color}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Old Price</label>
//           <input
//             type="number"
//             name="oldprice"
//             value={formData.oldprice}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Image</label>
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Tags</label>
//           <input
//             type="text"
//             name="tags"
//             value={formData.tags}
//             onChange={handleChange}
//             placeholder="Comma-separated tags"
//           />
//         </div>
//         <button type="submit">Add Product</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default AddProduct;





























// AddProductVarient.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';

const AddProductVarient = () => {
  const [formData, setFormData] = useState({
    productid: '',
    color: '',
    size: '',
    price: '',
    oldprice: '',
    // image: null,
    images: [], // Temporarily store multiple images

    tags: ''
  });


  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://furniro-backend-4vg0.onrender.com/api/getallproduct');
        setProducts(response.data.data); // Assuming response.data is an array of products
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === 'file' ? files[0] : value
  //   });
  // };

  // const handleChange = (e) => {
  //   const { name, value, type, files } = e.target;
  //   if (type === 'file') {
  //     setFormData({
  //       ...formData,
  //       images: Array.from(files) // Store multiple files in 'images' array
  //     });
  //   } else {
  //     setFormData({
  //       ...formData,
  //       [name]: value
  //     });
  //   }
  // };


  // select upto 5 images only
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (files.length > 5) {
        setImageError('You can only upload up to 5 images.');
        setFormData({ ...formData, images: [] }); // Clear previously selected images
      } else {
        setImageError('');
        setFormData({
          ...formData,
          images: Array.from(files)
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.images.length > 5) {
      setImageError('You can only upload up to 5 images.');
      return;
    }

    const productData = new FormData();
    productData.append('productid', formData.productid);
    productData.append('color', formData.color);
    productData.append('size', formData.size);
    productData.append('price', formData.price);
    productData.append('oldprice', formData.oldprice);
    // productData.append('image', formData.image);
    productData.append('tags', formData.tags);

    // Append each file to 'image' field in formData
    formData.images.forEach((image, index) => {
      productData.append('image', image);
    });


    try {
      const response = await axios.post('https://furniro-backend-4vg0.onrender.com/api/addproductvarient', productData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Product added successfully!');
      setFormData({ productid: '', color: '', size: '', price: '', oldprice: '', images: [], tags: '' });

    } catch (err) {
      setMessage('Error adding product. Please try again.');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product Variant</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><b>Product Name</b></label>
          <select
            // className="form-group"
            name="productid"
            value={formData.productid}
            onChange={handleChange}
            required
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product._id}>
                {product.productname} - {product.category}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label><b>Color</b></label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><b>Size</b></label>
          <input
            type="text"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label><b>Price</b></label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label><b>Old Price</b></label>
          <input
            type="number"
            name="oldprice"
            value={formData.oldprice}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label><b>Image</b></label>
          <input
            type="file"
            name="image"   // This should match the field name in the schema
            accept="image/*"
            multiple // Allow multiple file selection
            onChange={handleChange}
            required
          />

          {imageError && <p className="error-message">{imageError}</p>}

        </div>
        <div className="form-group">
          <label><b>Tags</b></label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Example : NEW, -30%"
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProductVarient;
