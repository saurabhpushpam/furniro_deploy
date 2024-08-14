// // AddProductVarient.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './product.css';

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     categoryid: '',
//     productname: '',
//     description: '',
//     descimages: [], // Temporarily store multiple images

//   });


//   const [category, setcategory] = useState([]);
//   const [message, setMessage] = useState('');
//   const [imageError, setImageError] = useState('');

//   useEffect(() => {
//     const fetchCategory = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/getallcategory');
//         setcategory(response.data.data); // Assuming response.data is an array of products
//       } catch (err) {
//         console.error('Error fetching products:', err);
//       }
//     };

//     fetchCategory();
//   }, []);



//   // select upto 2 images only
//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       if (files.length > 2) {
//         setImageError('You can only upload up to 2 images.');
//         setFormData({ ...formData, descimages: [] }); // Clear previously selected images
//       } else {
//         setImageError('');
//         setFormData({
//           ...formData,
//           descimages: Array.from(files)
//         });
//       }
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.descriptionimages.length > 2) {
//       setImageError('You can only upload up to 2 images.');
//       return;
//     }

//     const productData = new FormData();
//     productData.append('categoryid', formData.categoryid);
//     productData.append('productname', formData.productname);
//     productData.append('description', formData.description);

//     // Append each file to 'image' field in formData
//     formData.descimages.forEach((image, index) => {
//       productData.append('descriptionimage', image);
//     });


//     try {
//       const response = await axios.post('http://localhost:5000/api/addproduct', productData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setMessage('Product added successfully!');
//       setFormData({ categoryid: '', productname: '', description: '', descriptionimages: [], });

//     } catch (err) {
//       setMessage('Error adding product. Please try again.');
//     }
//   };

//   return (
//     <div className="add-product-container">
//       <h2>Add Product </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Category Name</label>
//           <select
//             name="categoryid"
//             value={formData.categoryid}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select a product</option>
//             {category.map((ctgr) => (
//               <option key={ctgr.id} value={ctgr._id}>
//                 {ctgr.categoryname}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Product Name</label>
//           <input
//             type="text"
//             name="productname"
//             value={formData.productname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Description</label>
//           <textarea
//             // id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             required
//           />

//           {/* <input
//             type="number"
//             name="price"
//             value={formData.price}
//             onChange={handleChange}
//             required
//           /> */}

//         </div>


//         <div className="form-group">
//           <label>Image</label>
//           <input
//             type="file"
//             name="image"   // This should match the field name in the schema
//             accept="image/*"
//             multiple // Allow multiple file selection
//             onChange={handleChange}
//             required
//           />

//           {imageError && <p className="error-message">{imageError}</p>}

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

const AddProduct = () => {
  const [formData, setFormData] = useState({
    categoryid: '',
    productname: '',
    description: '',
    descimages: [] // Temporarily store multiple images
  });

  const [category, setCategory] = useState([]);
  const [message, setMessage] = useState('');
  const [imageError, setImageError] = useState('');

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getallcategory');
        setCategory(response.data.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategory();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (files.length > 2) {
        setImageError('You can only upload up to 2 images.');
        setFormData({ ...formData, descimages: [] });
      } else {
        setImageError('');
        setFormData({
          ...formData,
          descimages: Array.from(files)
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
    if (formData.descimages.length > 2) {
      setImageError('You can only upload up to 2 images.');
      return;
    }

    const productData = new FormData();
    productData.append('categoryid', formData.categoryid);
    productData.append('productname', formData.productname);
    productData.append('description', formData.description);

    formData.descimages.forEach((image, index) => {
      productData.append('descriptionimage', image); // Field name should match the schema
    });

    // console.log('productdata', productData);

    try {
      await axios.post('http://localhost:5000/api/addproduct', productData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Product added successfully!');
      console.log('formdata', formData);
      setFormData({ categoryid: '', productname: '', description: '', descimages: [] });
    } catch (err) {
      setMessage('Error adding product. Please try again.');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><b>Category Name</b></label>
          <select
            name="categoryid"
            value={formData.categoryid}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            {category.map((ctgr) => (
              <option key={ctgr._id} value={ctgr._id}>
                {ctgr.categoryname}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label><b>Product Name</b></label>
          <input
            type="text"
            name="productname"
            value={formData.productname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label><b>Description</b></label>
          <textarea
            className='addproduct-textarea'
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label><b>Images</b></label>
          <input
            type="file"
            name="descriptionimage"
            accept="image/*"
            multiple
            onChange={handleChange}
            required
          />
          {imageError && <p className="error-message">{imageError}</p>}
        </div>
        <button type="submit">Add Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddProduct;
