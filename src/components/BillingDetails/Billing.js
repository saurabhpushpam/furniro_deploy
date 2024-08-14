// import React from 'react'
// import { FaCircle } from "react-icons/fa";
// import { FaRegCircle } from "react-icons/fa";

// const Billing = () => {


//   // const options = [
//   //   { id: 1, value: 'India', label: 'India' },
//   //   { id: 2, value: 'Sri Lanka', label: 'Sri Lanka' },
//   // ]


//   return (
//     <>
//       <div className='billing-main'>
//         <div className='billing-container'>
//           <div className='billing-inputdata'>
//             <div className='billing-title'>Billing details</div>
//             <div className='billing-name'>
//               <div className='billing-fname'>
//                 <p className='billing-all-text'>First Name</p>
//                 <input type='text' className='billing-nameinput'></input>
//               </div>
//               <div className='billing-lname'>
//                 <p className='billing-all-text'>Last Name</p>
//                 <input className='billing-nameinput'></input>
//               </div>
//             </div>
//             <div className='billing-companyname'>
//               <p className='billing-all-text'>Company Name (Optional)</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-country'>
//               <p className='billing-all-text'>Country / Region</p>
//               <input className='billing-all-input' placeholder="Sri Lanka"></input>



//               {/* <select options={options} placeholder="Sri Lanka" className='billing-country-input'>
//                 <option className='billing-country-input-option' value="" disabled selected hidden>
//                   Sri Lanka
//                 </option>
//                 {options.map((option) => (
//                   <option key={option.id} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select> */}




//             </div>
//             <div className='billing-street'>
//               <p className='billing-all-text'>Street address</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-town'>
//               <p className='billing-all-text'>Town / City</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-provience'>
//               <p className='billing-all-text'>Province</p>
//               <input className='billing-all-input' placeholder='Western Province'></input>
//             </div>
//             <div className='billing-zip'>
//               <p className='billing-all-text'>ZIP code</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-phone'>
//               <p className='billing-all-text'>Phone</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-email'>
//               <p className='billing-all-text'>Email address</p>
//               <input className='billing-all-input'></input>
//             </div>
//             <div className='billing-additional'>
//               <input type='text' placeholder='Additional information' className='billing-all-input'></input>
//             </div>
//           </div>
//           <div className='billing-detail'>
//             <div className='billing-order-detail'>
//               <div className='billing-detail-bill'>
//                 <div className='billing-detail-product'>
//                   <p className='billing-text-product'>Product</p>
//                   <div className='billing-product-name'>
//                     <p className='billing-product-text'>Asgaard sofa </p>
//                     <p className='billing-quantity'>X &nbsp;1</p>
//                   </div>
//                   <p className='billing-text-total'>Subtotal</p>
//                   <p className='billing-text-total'>Total</p>
//                 </div>
//                 <div className='billing-detail-subtotal'>
//                   <p className='billing-text-product'>Subtotal</p>
//                   <p className='billing-text-price'>Rs. 250,000.00</p>
//                   <p className='billing-text-price'>Rs. 250,000.00</p>
//                   <p className='billing-text-totalprice'>Rs. 250,000.00</p>
//                 </div>
//               </div>
//               <div className='billing-detail-desc'>
//                 <div className='billing-desc-upper'>
//                   <div className='bill-direct-order'>
//                     <FaCircle />
//                     <p className='bill-direct-order-text'> &nbsp; &nbsp;Direct Bank Transfer</p>
//                   </div>
//                   <p className='bill-desc-upper-text'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
//                 </div>
//                 <div className='billing-desc-middle'>
//                   {/* <ul>
//                     <li className='bill-desc-middle-list'>Direct Bank Transfer</li>
//                     <li className='bill-desc-middle-list'>Cash On Delivery</li>
//                   </ul> */}

//                   <div className='bill-direct-order'>
//                     <FaRegCircle className='circle-logo'></FaRegCircle>
//                     <div className='bill-middle-order-text'> &nbsp; &nbsp;Direct Bank Transfer</div>
//                   </div>

//                   <div className='bill-direct-order'>
//                     <FaRegCircle className='circle-logo'></FaRegCircle>
//                     <div className='bill-middle-order-text'> &nbsp; &nbsp;Cash On Delivery</div>
//                   </div>

//                 </div>
//                 <div className='billing-desc-bottom'>
//                   <p className='bill-desc-bottom-text'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='bill-bottom-privacy'>privacy policy.</span></p>
//                 </div>
//               </div>
//               <div className='billing-detail-btn'>
//                 <button className='bill-btn-placeorder'>Place order</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Billing

import React, { useEffect, useState } from 'react';
import { FaCircle, FaRegCircle } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Billing = () => {

  const navigate = useNavigate();


  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/getactivecartitems');
        const data = await response.json();


        // Assuming the API response has the structure { success: true, data: [...] }
        if (data.success) {
          setCartItems(data.data);
          setCartItemIds(data.data.map(item => item._id));


          console.log('data.data', data.data);
          console.log('data.data', data.data.map(item => item._id));

          // Calculate subtotal and total
          const calculatedSubtotal = data.data.reduce((acc, item) => acc + (item.productvarientid.price * item.quantity), 0);
          setSubtotal(calculatedSubtotal);
          setTotal(calculatedSubtotal); // Adjust if there's additional logic for total
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);






  const [billingDetails, setBillingDetails] = useState({
    firstname: '',
    lastname: '',
    companyname: '',
    country: 'Sri Lanka',
    streetaddress: '',
    city: '',
    province: 'Western Province',
    zipcode: '',
    phone: '',
    email: '',
    additionalinfo: '',
    paymentMethod: 'Direct Bank Transfer'
  });

  const [cartItemIds, setCartItemIds] = useState([]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Cart Item IDs before submission:', cartItemIds);
      const token = localStorage.getItem('token'); // Read token from localStorage
      const response = await axios.post(
        // 'http://localhost:5000/api/addaddress',
        'http://localhost:5000/api/neworder',
        // billingDetails,
        { ...billingDetails, cartitemid: cartItemIds },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      console.log('Data submitted successfully:', response.data);

      await axios.post(
        'http://localhost:5000/api/updatestatus',
      );

      // window.location.reload();

      alert("Congratulations, Order successful");

      navigate('/');

      // setBillingDetails({
      //   firstname: '',
      //   lastname: '',
      //   companyname: '',
      //   country: 'Sri Lanka',
      //   streetaddress: '',
      //   city: '',
      //   province: 'Western Province',
      //   zipcode: '',
      //   phone: '',
      //   email: '',
      //   additionalinfo: '',
      // });

    } catch (error) {
      console.error('Error submitting data:', error);

    }
  };




  return (
    <>
      <div className='billing-main'>
        <div className='billing-container'>
          <div className='billing-inputdata'>
            <div className='billing-title'>Billing details</div>
            <div className='billing-name'>
              <div className='billing-fname'>
                <p className='billing-all-text'>First Name</p>
                <input type='text' className='billing-nameinput' name="firstname" value={billingDetails.firstname} onChange={handleChange} />
              </div>
              <div className='billing-lname'>
                <p className='billing-all-text'>Last Name</p>
                <input type='text' className='billing-nameinput' name="lastname" value={billingDetails.lastname} onChange={handleChange} />
              </div>
            </div>
            <div className='billing-companyname'>
              <p className='billing-all-text'>Company Name (Optional)</p>
              <input type='text' className='billing-all-input' name="companyname" value={billingDetails.companyname} onChange={handleChange} />
            </div>
            <div className='billing-country'>
              <p className='billing-all-text'>Country / Region</p>
              <input type='text' className='billing-all-input' name="country" value={billingDetails.country} onChange={handleChange} placeholder="Sri Lanka" />
            </div>
            <div className='billing-street'>
              <p className='billing-all-text'>Street address</p>
              <input type='text' className='billing-all-input' name="streetaddress" value={billingDetails.streetaddress} onChange={handleChange} />
            </div>
            <div className='billing-town'>
              <p className='billing-all-text'>Town / City</p>
              <input type='text' className='billing-all-input' name="city" value={billingDetails.city} onChange={handleChange} />
            </div>
            <div className='billing-provience'>
              <p className='billing-all-text'>Province</p>
              <input type='text' className='billing-all-input' name="province" value={billingDetails.province} onChange={handleChange} placeholder='Western Province' />
            </div>
            <div className='billing-zip'>
              <p className='billing-all-text'>ZIP code</p>
              <input type='text' className='billing-all-input' name="zipcode" value={billingDetails.zipcode} onChange={handleChange} />
            </div>
            <div className='billing-phone'>
              <p className='billing-all-text'>Phone</p>
              <input type='text' className='billing-all-input' name="phone" value={billingDetails.phone} onChange={handleChange} />
            </div>
            <div className='billing-email'>
              <p className='billing-all-text'>Email address</p>
              <input type='email' className='billing-all-input' name="email" value={billingDetails.email} onChange={handleChange} />
            </div>
            <div className='billing-additional'>
              <input type='text' placeholder='Additional information' className='billing-all-input' name="additionalinfo" value={billingDetails.additionalinfo} onChange={handleChange} />
            </div>
          </div>


          <div className='billing-detail'>
            <div className='billing-order-detail'>


              {/* <div className='billing-detail-bill'>
                <div className='billing-detail-product'>
                  <p className='billing-text-product'>Product</p>
                  <div className='billing-product-name'>
                    <p className='billing-product-text'>Asgaard sofa </p>
                    <p className='billing-quantity'>X &nbsp;1</p>
                  </div>
                  <p className='billing-text-total'>Subtotal</p>
                  <p className='billing-text-total'>Total</p>
                </div>
                <div className='billing-detail-subtotal'>
                  <p className='billing-text-product'>Subtotal</p>
                  <p className='billing-text-price'>Rs. 250,000.00</p>
                  <p className='billing-text-price'>Rs. 250,000.00</p>
                  <p className='billing-text-totalprice'>Rs. 250,000.00</p>
                </div>
              </div> */}

              <div className='billing-detail-bill'>
                <div className='billing-detail-product'>
                  <p className='billing-text-product'>Product</p>
                  {cartItems.map((item, index) => (
                    <div key={index} className='billing-product-name'>
                      <p className='billing-product-text'>{item.productvarientid.productid.productname}</p>
                      <p className='billing-quantity'>X &nbsp;{item.quantity}</p>
                    </div>
                  ))}



                  {/* <p className='billing-text-total'>Subtotal</p>
                  <p className='billing-text-total'>Total</p> */}
                </div>
                <div className='billing-detail-subtotal'>
                  <p className='billing-text-product'>Subtotal</p>
                  <p className='billing-text-price'>Rs. {subtotal}</p>
                  {/* <p className='billing-text-price'>Rs. {subtotal}</p> */}
                  <p className='billing-text-totalprice'>Rs. {total}</p>
                </div>
              </div>


              <div className='billing-detail-desc'>
                <div className='billing-desc-upper'>
                  <div className='bill-direct-order'>
                    <FaCircle />
                    <p className='bill-direct-order-text'> &nbsp; &nbsp;Direct Bank Transfer</p>
                  </div>
                  <p className='bill-desc-upper-text'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                </div>
                <div className='billing-desc-middle'>
                  <div className='bill-direct-order'>
                    <FaRegCircle className='circle-logo'></FaRegCircle>
                    <div className='bill-middle-order-text'> &nbsp; &nbsp;Direct Bank Transfer</div>
                  </div>

                  <div className='bill-direct-order'>
                    <FaRegCircle className='circle-logo'></FaRegCircle>
                    <div className='bill-middle-order-text'> &nbsp; &nbsp;Cash On Delivery</div>
                  </div>
                </div>
                <div className='billing-desc-bottom'>
                  <p className='bill-desc-bottom-text'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='bill-bottom-privacy'>privacy policy.</span></p>
                </div>
              </div>
              <div className='billing-detail-btn'>
                <button className='bill-btn-placeorder' onClick={handleSubmit}>Place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
