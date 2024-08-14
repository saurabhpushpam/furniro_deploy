// Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getallneworder');
        setOrders(response.data.data);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  console.log(orders);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log('ddkjcndihcbdobject', orders);



  return (
    <>



      <div className="orders-container">
        <div key={'001'} className="order-card" style={{ backgroundColor: "black", color: "white" }}>
          <div className="order-info">
            <div><b>UserName</b></div>
            <div><b>productname</b></div>
            <div><b>quantity </b></div>
            <div><b>Price</b></div>
            <div><b>totalamount</b></div>
            <div><b>city</b></div>
            <div><b>province</b></div>
            <div><b>Date & Time</b></div>
          </div>
        </div>

        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-info">
              <div>{order.firstname} {order.lastname}</div>
              {/* <div>{order.cartitemid.productvarientid.productid.productname}</div> */}
              {/* <div>{order.cartitemid.quantity}</div> */}


              <div>
                {order.cartitemid.map((cartItem, index) => (
                  <div key={index}>
                    {cartItem.productvarientid.productid.productname}
                    {/* <div>{cartItem.productvarientid.productid.productname}</div>
                      <div>{cartItem.quantity}</div> */}
                  </div>
                ))}
              </div>

              <div>
                {order.cartitemid.map((cartItem, index) => (
                  <div key={index} style={{ marginTop: "15px" }}>
                    {cartItem.quantity}
                  </div>
                ))}
              </div>


              <div>
                {order.cartitemid.map((cartItem, index) => (
                  <div key={index} style={{ marginTop: "15px" }}>
                    Rs.{cartItem.productvarientid.price}
                  </div>
                ))}
              </div>

              {/* <div>${order.price.toFixed(2)}</div> */}

              {/* <div>
                {order.cartitemid.map((cartItem, index) => (
                  <div key={index}>
                    {cartItem.productvarientid.price * cartItem.quantity}
                  </div>
                ))}
              </div> */}

              <div>Rs.{order.cartitemid.reduce((orderSum, cartItem) => orderSum + cartItem.productvarientid.price * cartItem.quantity, 0)}</div>


              {/* <div>${order.totalamount}</div> */}


              <div>{order.city}</div>
              <div>{order.province}</div>
              <div>{order.orderdate}</div>
            </div>
          </div>
        ))}


        {/* {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-info">
              <div>{order.orderid.userid.firstname} {order.orderid.userid.lastname}</div>
              <div>{order.productvarientid.productid.productname}</div>
              <div>{order.quantity}</div>
              {/* <div>${order.price.toFixed(2)}</div> */}
        {/* <div>${order.orderid.totalamount}</div> */}
        {/* <div>{order.orderid.addressid.city}</div> */}
        {/* <div>{order.orderid.addressid.province}</div> */}
        {/* </div> */}
        {/* </div> */}

        {/* // ))} */}

      </div>
    </>
  );
};

export default Orders;
