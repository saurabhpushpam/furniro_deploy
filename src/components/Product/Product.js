// import React, { useEffect, useState } from "react";
// import './product.css';
// import { FaChevronRight } from "react-icons/fa6";
// import { RxDividerVertical } from "react-icons/rx";
// // import HomeProducts from './HomeProduct';
// import p1 from "../../images/p1.png";
// import p2 from "../../images/p2.png";
// import p3 from "../../images/p3.png";
// import p4 from "../../images/p4.png";
// import p5 from "../../images/p5.png";
// import star from "../../images/star.png";
// import halfStar from "../../images/halfStar.png";
// import prodImg1 from '../../images/Single-Prod-img-1.png'
// import prodImg2 from '../../images/Single-prod-2.png'
// import { FaFacebook } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import img1 from '../../images/image 1.png'
// import img2 from '../../images/image 2 (1).png'
// import img3 from '../../images/image 3.png'
// import img4 from '../../images/image 4.png'
// import axios from "axios";
// import { useParams } from "react-router-dom";



// function Product() {

//   const { id } = useParams();
//   const [productDetails, setProductDetails] = useState(null);

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/getproductvarientbyproductid/${id}`);
//         setProductDetails(response.data.data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       }
//     };

//     fetchProductDetails();
//   }, [id]);

//   if (!productDetails) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <>
//       <div className="prod-header ">
//         <div style={{ color: "#9F9F9F" }}>Home</div>
//         <div>
//           <FaChevronRight style={{ fontSize: "0.9rem" }} />
//         </div>
//         <div style={{ color: "#9F9F9F" }}>Shop</div>
//         <div>
//           <FaChevronRight style={{ fontSize: "0.9rem" }} />
//         </div>
//         <div>
//           <RxDividerVertical style={{ fontSize: "2rem", color: "#9F9F9F" }} />
//         </div>
//         <div>Product Name</div>
//       </div>

//       <div className="product-card container">
//         <div className="product-image-show">
//           <div className="side-images">
//             <img src={p1} alt="img" />
//             <img src={p3} alt="imageeeessssss" />
//             <img src={p4} alt="images" />
//             <img src={p5} alt="imagess" />
//           </div>
//           <div className="image-active">
//             <img src={p2} alt="imagesss" />
//           </div>
//         </div>
//         <div className="product-desc">
//           <h2>#Product Name</h2>
//           <p style={{ color: '#9F9F9F' }}>#Product Price</p>
//           <div
//             style={{
//               display: "flex",
//               gap: "1rem",
//               alignItems: "center",
//               color: "#9F9F9F",
//             }}
//           >
//             <div>
//               <img src={star} alt="imagees" />
//               <img src={star} alt="imageeesss" />
//               <img src={star} alt="imagessssss" />
//               <img src={star} alt="imaaage" />
//               <img src={halfStar} alt="imaage" />
//             </div>
//             <span style={{ fontSize: "1.25rem" }}>|</span>
//             <span style={{ fontSize: "0.9rem" }}> 5 Customer Review</span>
//           </div>
//           <p>
//             Setting the bar as one of the loudest speakers in its class, the
//             Kilburn is a compact, stout-hearted hero with a well-balanced audio
//             which boasts a clear midrange and extended highs for a sound.
//           </p>
//           <p style={{ color: "#9F9F9F" }}>Size</p>
//           <span className="size-buttons">
//             <button>L</button>
//             <button>XL</button>
//             <button>XS</button>
//           </span>
//           <p style={{ color: '#9F9F9F' }}>Color</p>
//           <span className="color-buttons">
//             <button style={{ backgroundColor: '#816DFA' }}></button>
//             <button style={{ backgroundColor: '#000000' }}></button>
//             <button style={{ backgroundColor: '#B88E2F' }}></button>
//           </span>
//           <p className="config-buttons">
//             <button>
//               <span>-</span>#number<span>+</span>
//             </button>
//             <button>Add to cart</button>
//             <button>+ Compare</button>
//           </p>
//           <hr />

//           <div
//             className="prod-des-details"
//             style={{ color: "#9F9F9F", maxWidth: "fit-content" }}
//           >
//             <div>SKU</div>
//             <div>: SS001</div>
//             <div>Category</div>
//             <div>: Sofas</div>
//             <div>Tags</div>
//             <div>: Sofa,Chair,Home,Shop</div>
//             <div>Share</div>
//             <div
//               style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
//             >
//               :{" "}
//               <span style={{ color: "black", fontSize: "1.25rem" }}>
//                 <FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <hr />

//       <div className="product-extra-info container-fluid">
//         <div className="prod-info">
//           <div className="prod-info-headings">
//             <span>Description</span>
//             <span>Additional Information</span>
//             <span>Reviews[5]</span>
//           </div>
//           <div className="prod-info-desc">
//             <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
//             <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
//           </div>
//         </div>
//         <div className="prod-info-images">
//           <div><img className="img-fluid" src={prodImg1} alt="iimmaage" /></div>
//           <div><img className="img-fluid" src={prodImg2} alt="iimmaagge" /></div>
//         </div>
//       </div>

//       <hr />

//       <div className="related-products-container">
//         <div className="related-product-heading">
//           <span>Related Products</span>
//         </div>
//         <div className="related-products">
//           <div className="r-prod-card">
//             <div className="bubble">-30%</div>
//             <img className='img-fluid' src={img1} alt="imageeees" />
//             <div className="r-prod-desc">
//               <ul>
//                 <li>Product Name</li>
//                 <li>Product Desc</li>
//                 <li>Product Price <span>RedPrice</span></li>
//               </ul>
//             </div>
//           </div>
//           <div className="r-prod-card">
//             <img className='img-fluid' src={img2} alt="imaaagge" />
//             <div className="r-prod-desc">
//               <ul>
//                 <li>Product Name</li>
//                 <li>Product Desc</li>
//                 <li>Product Price </li>
//               </ul>
//             </div>
//           </div>
//           <div className="r-prod-card">
//             <div className="bubble">-50%</div>
//             <img className='img-fluid' src={img3} alt="iimmage" />
//             <div className="r-prod-desc">
//               <ul>
//                 <li>Product Name</li>
//                 <li>Product Desc</li>
//                 <li>Product Price <span>RedPrice</span></li>
//               </ul>
//             </div>
//           </div>
//           <div className="r-prod-card">
//             <div className="bubble new">New</div>
//             <img className='img-fluid' src={img4} alt="iimage" />
//             <div className="r-prod-desc">
//               <ul>
//                 <li>Product Name</li>
//                 <li>Product Desc</li>
//                 <li>Product Price</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="r-button">
//         <button>Show More</button>
//       </div>
//     </>
//   );
// }

// export default Product;





























import React, { useEffect, useState } from "react";
import './product.css';
import { FaChevronRight } from "react-icons/fa6";
import { RxDividerVertical } from "react-icons/rx";
// import HomeProducts from './HomeProduct';
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import star from "../../images/star.png";
import halfStar from "../../images/halfStar.png";
import prodImg1 from '../../images/Single-Prod-img-1.png'
import prodImg2 from '../../images/Single-prod-2.png'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import img1 from '../../images/image 1.png'
import img2 from '../../images/image 2 (1).png'
import img3 from '../../images/image 3.png'
import img4 from '../../images/image 4.png'
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";



function Product() {


  const navigate = useNavigate();
  const [count, setcount] = useState(1);

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [relatedProducts, setRelatedProducts] = useState([]);



  const handleDecrement = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };





  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getproductvarientbyproductvarientid/${id}`);
        // const response = await axios.get(`http://localhost:5000/api/getproductvarientbyproductvarientid/66a20bc498a299422018dfbc`);
        setProductDetails(response.data.data);



        const relatedProductsResponse = await axios.get('http://localhost:5000/api/getallproductvarient');

        const productdata = relatedProductsResponse.data.data.slice(0, 4)
        // setRelatedProducts(relatedProductsResponse.data.data.slice(0, 4));

        console.log('helllllo', relatedProducts);





        const productsWithImages = productdata.map(product => ({
          ...product,
          imageUrl: product.image && product.image[0] ? `http://localhost:5000/api/getproductvarientimage/${product.image[0]}` : '',
        }));

        setRelatedProducts(productsWithImages)

        // setProductDetails(response.data.data);



      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);


  if (!productDetails) {
    return <div>Loading...</div>;
  }




  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
      await axios.post('http://localhost:5000/api/addcartitems', {
        quantity: count,
        productvarientid: productDetails._id, // Replace with the actual product variant ID
      }, {
        headers: {
          Authorization: `${token}`,
        },
      });
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };






  const handleImageClick = (index) => {
    setActiveImageIndex(index);
  };


  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };


  // const { productname, price, description, sizeOptions, colorOptions, reviews, category } = productDetails;

  console.log(productDetails);

  return (
    <>
      <div className="prod-header ">
        <div style={{ color: "#9F9F9F" }}><Link to={"/"} style={{ textDecoration: "none", color: "#9F9F9F" }}>Home</Link></div>
        <div>
          <FaChevronRight style={{ fontSize: "0.9rem" }} />
        </div>
        <div style={{ color: "#9F9F9F" }}><Link to={"/shop"} style={{ textDecoration: "none", color: "#9F9F9F" }}>Shop</Link></div>
        <div>
          <FaChevronRight style={{ fontSize: "0.9rem" }} />
        </div>
        <div>
          <RxDividerVertical style={{ fontSize: "2rem", color: "#9F9F9F" }} />
        </div>
        {/* <div>Product Name</div> */}
        <div>{productDetails.productid.productname}</div>
      </div>

      <div className="product-card container " style={{ width: "100vw", marginLeft: "5vw" }}>


        <div className="product-image-show">
          <div className="side-images">
            {productDetails.image.map((image, index) => (
              <img
                className="side-images-img"
                key={index}
                src={`http://localhost:5000/api/getproductvarientimage/${image}`}
                alt={`side-image-${index}`}
                onClick={() => handleImageClick(index)}
                style={{ cursor: 'pointer', backgroundPosition: "center", backgroundSize: "cover" }}
              />
            ))}
          </div>
          <div className="image-active" style={{ marginLeft: "10px" }}>
            <img
              style={{ width: "25vw", height: "70vh" }}
              src={`http://localhost:5000/api/getproductvarientimage/${productDetails.image[0]}`}
              alt="active"
            />
          </div>
        </div>



        {/* 
        <div className="product-image-show">
          <div className="side-images">
            <img className="side-images-img" src={`http://localhost:5000/api/getproductvarientimage/${productDetails.image[0]}`} alt="img" />
            <img src={p3} alt="imageeeessssss" />
            <img src={p4} alt="images" />
            <img src={p5} alt="imagess" />
          </div>
          <div className="image-active">
            <img className="image-activee-img" src={p2} alt="imagesss" />
          </div>
        </div>
 */}

        <div className="product-desc">
          {/* <h2>#Product Name</h2> */}
          <h2>{productDetails.productid.productname}</h2>
          {/* <p style={{ color: '#9F9F9F' }}>#Product Price</p> */}
          <p style={{ color: '#9F9F9F' }}>Rs.{productDetails.price}</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              color: "#9F9F9F",
            }}
          >
            <div>
              <img src={star} alt="imagees" />
              <img src={star} alt="imageeesss" />
              <img src={star} alt="imagessssss" />
              <img src={star} alt="imaaage" />
              <img src={halfStar} alt="imaage" />
            </div>
            <span style={{ fontSize: "1.25rem" }}>|</span>
            <span style={{ fontSize: "0.9rem" }}> 5 Customer Review</span>
          </div>
          {/* <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p> */}

          <p>{productDetails.productid.description}</p>
          <p style={{ color: "#9F9F9F", marginLeft: "-90%" }}>Size</p>
          <span className="size-buttons">
            <button>{productDetails.size}</button>
            {/* <button>L</button>
            <button>XL</button>
            <button>XS</button> */}
          </span>

          <p style={{ color: '#9F9F9F', marginLeft: "-90%" }}>Color</p>
          <span className="color-buttons">

            <button style={{ backgroundColor: `${productDetails.color}` }}></button>


            {/* <button style={{ backgroundColor: '#816DFA' }}></button>
            <button style={{ backgroundColor: '#000000' }}></button>
            <button style={{ backgroundColor: '#B88E2F' }}></button> */}
          </span>
          <p className="config-buttons">

            {/* <button>
              <span style={{ color: "red", backgroundColor: "yellow" }}>-</span>#number <b>hello</b><span>+</span>
            </button> */}

            <span style={{ border: "1px solid black", borderRadius: "15px" }} className="hvrbtn">
              <button style={{ border: "none" }} onClick={() => { handleDecrement() }}>-</button>{count}<button style={{ border: "none" }} onClick={() => { setcount(count + 1) }}>+</button>
            </span>
            <button className="hvrbtn" onClick={handleAddToCart}>Add to cart</button>
            <button className="hvrbtn">+ Compare</button>
            {/* <button>+ Favourite</button> */}
          </p>
          <hr />

          <div
            className="prod-des-details"
            style={{ color: "#9F9F9F", maxWidth: "fit-content" }}
          >
            <div>SKU</div>
            <div>: SS001</div>
            <div>Category</div>
            <div>: Sofas</div>
            <div>Tags</div>
            <div>: Sofa,Chair,Home,Shop</div>
            <div>Share</div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
            >
              :{" "}
              <span style={{ color: "black", fontSize: "1.25rem" }}>
                <FaFacebook /> <FaLinkedin /> <AiFillTwitterCircle />
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="product-extra-info container-fluid">
        <div className="prod-info">
          <div className="prod-info-headings">
            <span>Description</span>
            <span>Additional Information</span>
            <span>Reviews[5]</span>
          </div>
          <div className="prod-info-desc">
            <p>Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          </div>
        </div>
        <div className="prod-info-images">
          <div><img className="img-fluid" src={prodImg1} alt="iimmaage" /></div>
          <div><img className="img-fluid" src={prodImg2} alt="iimmaagge" /></div>
        </div>
      </div>

      <hr />

      <div className="related-products-container">
        <div className="related-product-heading">
          <span>Related Products</span>
        </div>





        <div className="related-products">
          {relatedProducts.map((product, index) => (

            // <div className="r-prod-card" key={index} >

            <div className="r-prod-card" key={index} onClick={() => handleProductClick(product._id)}>
              <div className="bubble">{product.tags}</div>

              {/* {product.discount && <div className="bubble">{product.tags}%</div>} */}
              {/* {product.isNew && <div className="bubble new">New</div>} */}
              {/* <img className='img-fluid' src={img1} alt={product.name} /> */}

              <img className='img-fluid' src={`${product.imageUrl}`} alt={product.productid.name} style={{ width: "20vw", height: "30vh" }} />
              <div className="r-prod-desc">
                <ul>
                  <li>{product.productid.productname}</li>
                  <li>Size : <span>{product.size}</span></li>
                  <li>{product.price} <span>{product.oldprice}</span></li>
                </ul>
              </div>
            </div>
          ))}
        </div>




        {/* 

        <div className="related-products">
          <div className="r-prod-card">
            <div className="bubble">-30%</div>
            <img className='img-fluid' src={img1} alt="imageeees" />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price <span>RedPrice</span></li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <img className='img-fluid' src={img2} alt="imaaagge" />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price </li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <div className="bubble">-50%</div>
            <img className='img-fluid' src={img3} alt="iimmage" />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price <span>RedPrice</span></li>
              </ul>
            </div>
          </div>
          <div className="r-prod-card">
            <div className="bubble new">New</div>
            <img className='img-fluid' src={img4} alt="iimage" />
            <div className="r-prod-desc">
              <ul>
                <li>Product Name</li>
                <li>Product Desc</li>
                <li>Product Price</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      <div className="r-button">
        <button className="somorebtn"><Link to={'/shop'} style={{ textDecoration: "none", color: "black" }}>Show More </Link></button>
      </div>
    </>
  );
}

export default Product;
