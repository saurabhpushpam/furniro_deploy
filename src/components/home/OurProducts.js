// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const OurProducts = () => {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/getproductvarient');
//         const productVariants = response.data;

//         // Get unique products based on productid
//         const uniqueProducts = Array.from(
//           new Map(productVariants.map(item => [item.productid, item])).values()
//         );

//         // Fetch images for unique products
//         const productsWithImages = await Promise.all(
//           uniqueProducts.map(async product => {
//             const imageResponse = await axios.get(`http://localhost:5000/api/getimagebyimagename/${product.imagename[0]}`);
//             return { ...product, imageUrl: imageResponse.data.imageUrl };
//           })
//         );

//         setProducts(productsWithImages);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }



//   return (
//     <>
//       <div className='ourproduct-top'>
//         <div className='ourproduct-main'>
//           <p className='ourproduct-heading'>Our Products</p>
//           <div className='ourproduct-multiplecards'>
//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img1'>
//                 <div className='ourproduct-card-discount'>
//                   <p className='ourproduct-card-discount-tag'>-30%</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>




//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img2'>
//                 {/* <div className='ourproduct-card-discount'>
//                   <p className='ourproduct-card-discount-tag'>-30%</p>
//                 </div> */}
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>


//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img3'>
//                 <div className='ourproduct-card-discount'>
//                   <p className='ourproduct-card-discount-tag'>-50%</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>



//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img4'>
//                 <div className='ourproduct-card-new'>
//                   <p className='ourproduct-card-discount-tag'>New</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>



//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img5'>
//                 {/* <div className='ourproduct-card-discount'>
//                   <p className='ourproduct-card-discount-tag'>-30%</p>
//                 </div> */}
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>



//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img6'>
//                 <div className='ourproduct-card-new'>
//                   <p className='ourproduct-card-discount-tag'>New</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>



//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img7'>
//                 <div className='ourproduct-card-discount'>
//                   <p className='ourproduct-card-discount-tag'>-50%</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>



//             <div className='ourproduct-card'>
//               <div className='ourproduct-card-img' id='ourproduct-card-img8'>
//                 {/* <div className='ourproduct-card-discount'> */}
//                 <div className='ourproduct-card-new'>
//                   <p className='ourproduct-card-discount-tag'>New</p>
//                 </div>
//               </div>
//               <div className='ourproduct-aboutcard'>
//                 <div className='ourproduct-about-title'>
//                   <p className='ourproduct-about-name'>syltherine</p>
//                   <p className='ourproduct-about-desc'>Stylish cafe chair</p>
//                 </div>
//                 <div className='ourproduct-about-price'>
//                   <p className='ourproduct-aboutcard-newrs'>Rp 2.500.000</p>
//                   <p className='ourproduct-aboutcard-oldrs'>Rp 3.500.000</p>
//                 </div>
//               </div>
//             </div>




//           </div>
//           <button className='ourproduct-btn-showmore'>Show More</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default OurProducts



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const OurProducts = () => {

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };



  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getallproductvarient');
        const productVariants = response.data.data;

        const datalength = productVariants.length;
        console.log(datalength);

        const productsWithImage = productVariants.map(product => {
          // Log the image array
          console.log('Product Images:', product.image[0]);
        })


        const productsWithImages = productVariants.map(product => ({
          ...product,
          imageUrl: product.image && product.image[0] ? `http://localhost:5000/api/getproductvarientimage/${product.image[0]}` : '',
        }));

        console.log(productVariants);



        setProducts(productsWithImages);

        console.log(productVariants.length);
        for (var i = 0; i < productVariants.length; i++) {
          console.log('hello img', productsWithImages[0].image[0]);
        }
        console.log(productsWithImages[0].color);

        console.log('prdct', products[0].image);

      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }


  console.log('products', products[0].image[0]);


  return (
    <>
      <div className='ourproduct-top'>
        <div className='ourproduct-main'>
          <p className='ourproduct-heading'>Our Products</p>
          <div className='ourproduct-multiplecards'>
            {products.map(product => (
              <div key={product.productid} className='ourproduct-card' onClick={() => handleProductClick(product._id)}>
                {/* <div className='ourproduct-card-img' id='ourproduct-card-img1'> */}

                {/* <div className='ourproduct-card-img' style={{ backgroundImage: `url(${product.imageUrl})` }}> */}


                <div className='ourproduct-card-img'>.





                  {product.tags && (
                    <div className='ourproduct-card-discount'>
                      <p className='ourproduct-card-discount-tag'>{product.tags}</p>
                    </div>
                  )}


                  <img className='ourproduct-card-img-img' src={`${product.imageUrl}`} alt='product img'></img>


                  {/* <img src={product.imageUrl} alt={product.name} /> */}
                </div>
                <div className='ourproduct-aboutcard'>
                  <div className='ourproduct-about-title'>
                    <p className='ourproduct-about-name'>{product.productid.productname}</p>
                    <p className='ourproduct-about-desc'>{product.size ? `Size: ${product.size}` : 'Stylish product'}</p>
                  </div>
                  <div className='ourproduct-about-price'>
                    <p className='ourproduct-aboutcard-newrs'>Rp {product.price}</p>
                    <p className='ourproduct-aboutcard-oldrs'>Rp {product.oldprice}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to={"/shop"} className='ourproduct-btn-showmore'><button className='ourproduct-btn-more'>Show More</button></Link>
          {/* <button className='ourproduct-btn-showmore'>Show More</button> */}
        </div>
      </div>
    </>
  );
};

export default OurProducts;
