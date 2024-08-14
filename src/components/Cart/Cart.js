// import React from 'react'
// // import TestNav from '../../Components/Nav/TestNav'
// // import Footer from '../../Components/Footer.js/Footer'
// import './Cart.css'
// import cartimg from '../../images/Asgaard sofa 5.png'
// import { TbTrashFilled } from "react-icons/tb";
// import HeaderTwo from './HeaderTwo'
// import WarrantyDetail from '../Shop/WarrantyDetail';
// import { Link } from 'react-router-dom'

// export default function Cart() {

//   return (
//     <>
//       <div>
//         {/* <TestNav /> */}
//         <HeaderTwo />
//         <div className='Main-cartContainer'>
//           <div className='cart-content'>

//             <div className='cart-Product'>
//               <div className='cart-nav'>
//                 <text>Product</text>
//                 <text> Price </text>
//                 <text>Quantity</text>
//                 <text>Subtotal</text>
//               </div>

//               <div className='cart-product-details'>

//                 <div className='image-designing'><img src={cartimg} alt=''></img></div>
//                 <text className='cart-text '>Asgaard sofa</text>
//                 <text className='cart-text-1'>Rs. 250,000.00</text>
//                 <text className='cart-quantity'>1</text>
//                 <text className='cart-pricing'>Rs. 250,000.00</text>
//                 <TbTrashFilled className='trash-icon' />
//               </div>




//             </div>




//             <div className='cart-Total'>


//               <div className='cart-heading'>
//                 <text>Cart Totals</text>
//               </div>


//               <div className='cart-items-price'>
//                 <div className='cart-items-st'>
//                   <text>
//                     Subtotal
//                   </text>
//                   <text>
//                     Total
//                   </text>
//                 </div>

//                 <div className='cart-rs'>
//                   <text>
//                     Rs. 250,000.00
//                   </text>

//                   <span>
//                     Rs. 250,000.00
//                   </span>
//                 </div>

//               </div >



//               <div className='cart-checkout-button'>
//                 {/* <button className='cart-button'> */}
//                 <Link className='head-link-title' to={"/checkout"}><button className='cart-button'>Check Out</button></Link>
//                 {/* Check Out */}
//                 {/* </button> */}

//               </div>



//             </div>

//           </div>
//         </div>
//         {/* <Footer /> */}
//       </div>
//       <WarrantyDetail></WarrantyDetail>
//     </>
//   )
// }








// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Cart.css';
// import { TbTrashFilled } from "react-icons/tb";
// import HeaderTwo from './HeaderTwo';
// import WarrantyDetail from '../Shop/WarrantyDetail';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalAmount, setTotalAmount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/getallcartitems', {
//           headers: {
//             Authorization: `${token}`
//           }
//         });

//         const items = response.data?.data || [];
//         console.log(items);
//         // Calculate total amount
//         const total = items.reduce((sum, item) => sum + (item.productvarientid.price * item.quantity), 0);
//         setTotalAmount(total);

//         setCartItems(items);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <>
//       <div>
//         <HeaderTwo />
//         <div className='Main-cartContainer'>
//           <div className='cart-content'>
//             <div className='cart-Product'>
//               <div className='cart-nav'>
//                 <span>Product</span>
//                 <span>Price</span>
//                 <span>Quantity</span>
//                 <span>Subtotal</span>
//               </div>

//               {cartItems.map((item) => (
//                 <div key={item._id} className='cart-product-details'>
//                   <div className='image-designing'>
//                     <img src={`http://localhost:5000/api/getproductvarientimage/${item.productvarientid.image[0]}`} alt={item.productvarientid.productid.productname} />
//                   </div>
//                   <span className='cart-text'>{item.productvarientid.productid.productname}</span>
//                   <span className='cart-text-1'>Rs. {item.productvarientid.price}</span>
//                   <span className='cart-quantity'>{item.quantity}</span>
//                   <span className='cart-pricing'>Rs. {item.productvarientid.price * item.quantity}</span>
//                   <TbTrashFilled className='trash-icon' />
//                 </div>
//               ))}
//             </div>

//             <div className='cart-Total'>
//               <div className='cart-heading'>
//                 <span>Cart Totals</span>
//               </div>

//               <div className='cart-items-price'>
//                 <div className='cart-items-st'>
//                   <span>Subtotal</span>
//                   <span>Total</span>
//                 </div>

//                 <div className='cart-rs'>
//                   <span>Rs. {totalAmount}</span>
//                   <span>Rs. {totalAmount}</span>
//                 </div>
//               </div>

//               <div className='cart-checkout-button'>
//                 <Link className='head-link-title' to="/checkout">
//                   <button className='cart-button'>Check Out</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <WarrantyDetail />
//     </>
//   );
// };

// export default Cart;










import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cart.css';
import { TbTrashFilled } from "react-icons/tb";
import HeaderTwo from './HeaderTwo';
import WarrantyDetail from '../Shop/WarrantyDetail';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/getactivecartitems', {
          headers: {
            Authorization: `${token}`
          }
        });

        const items = response.data?.data || [];
        console.log(items);
        // Calculate total amount
        const total = items.reduce((sum, item) => sum + (item.productvarientid.price * item.quantity), 0);
        setTotalAmount(total);

        setCartItems(items);


      } catch (error) {
        console.error('Error fetching cart items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);


  // const handleDelete = async (cartItemId) => {
  //   try {
  //     console.log(cartItemId);
  //     // const token = localStorage.getItem('token');
  //     await axios.post(`http://localhost:5000/api/deletecartitem/${cartItemId}`, {}, {
  //       // headers: {
  //       //   Authorization: `${token}`
  //       // }
  //     });

  //     // // Remove item from local state
  //     // const updatedItems = cartItems.filter(item => item._id !== cartItemId);
  //     // calculateTotal(updatedItems);
  //     // setCartItems(updatedItems);
  //   } catch (error) {
  //     console.error('Error deleting cart item:', error);
  //   }
  // };


  const handleDelete = async (cartItemId) => {
    try {
      console.log(cartItemId);
      // const token = localStorage.getItem('token');
      await axios.post(`http://localhost:5000/api/deletecartitem/${cartItemId}`, {}, {
        // headers: {
        //   Authorization: `${token}`
        // }
      });

      // Remove item from local state
      const updatedItems = cartItems.filter(item => item._id !== cartItemId);

      // Calculate total amount
      const total = updatedItems.reduce((sum, item) => sum + (item.productvarientid.price * item.quantity), 0);


      setCartItems(updatedItems);
      setTotalAmount(total);
    } catch (error) {
      console.error('Error deleting cart item:', error);
    }
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <HeaderTwo />
        <div className='Main-cartContainer'>
          <div className='cart-content'>
            <div className='cart-Product'>
              <div className='cart-nav'>
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {cartItems.map((item) => (
                <div key={item._id} className='cart-product-details'>
                  <div className='image-designing'>
                    <img src={`http://localhost:5000/api/getproductvarientimage/${item.productvarientid.image[0]}`} alt={item.productvarientid.productid.productname} />
                  </div>
                  <span className='cart-text'>{item.productvarientid.productid.productname}</span>
                  <span className='cart-text-1'>Rs. {item.productvarientid.price}</span>
                  <span className='cart-quantity'>{item.quantity}</span>
                  <span className='cart-pricing'>Rs. {item.productvarientid.price * item.quantity}</span>
                  <TbTrashFilled className='trash-icon' onClick={() => handleDelete(item._id)} />
                </div>
              ))}
            </div>

            <div className='cart-Total'>
              <div className='cart-heading'>
                <span>Cart Totals</span>
              </div>

              <div className='cart-items-price'>
                <div className='cart-items-st'>
                  <span>Subtotal</span>
                  <span>Total</span>
                </div>

                <div className='cart-rs'>
                  <span>Rs. {totalAmount}</span>
                  <span>Rs. {totalAmount}</span>
                </div>
              </div>

              <div className='cart-checkout-button'>
                <Link className='head-link-title' to="/checkout">
                  <button className='cart-button'>Check Out</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WarrantyDetail />
    </>
  );
};

export default Cart;
