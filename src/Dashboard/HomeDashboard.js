import React, { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import UserDetail from './UserDetail'
import { Link } from 'react-router-dom'
import axios from 'axios'



function HomeDashboard() {

  const [orders, setOrders] = useState('');
  const [user, setuser] = useState('');
  const [product, setproduct] = useState('');
  const [category, setcategory] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchuser = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getalluserdata');
      setuser(response.data.data.length);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


  const fetchproduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getallproductvarient');
      setproduct(response.data.data.length);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };


  const fetchcategory = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getallcategory');
      setcategory(response.data.data.length);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getallneworder');
      setOrders(response.data.data.length);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchuser();
    fetchcategory();
    fetchproduct();
    fetchOrders();
  }, []);



  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <Link to="/user/getuser" className='upper-text-data card'>
          <div className='card'>
            <div className='card-inner'>
              <h3>USERS</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>{user}</h1>
          </div>
        </Link>

        <Link to="/user/addcategory" className='upper-text-data card'>
          <div className='card2'>
            <div className='card-inner'>
              <h3>CATEGORIES</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
            </div>
            <h1>{category}</h1>
          </div>
        </Link>

        <Link to="/user/product" className='upper-text-data' id='cardthird'>
          <div className='card' id='cardthird'>
            <div className='card-inner'>
              <h3>PRODUCTS</h3>
              <BsFillArchiveFill className='card_icon' />
            </div>
            <h1>{product}</h1>
          </div>
        </Link>

        <Link to="/user/order" className='upper-text-data' id='cardfour'>
          <div className='card' id='cardfour'>
            <div className='card-inner'>
              <h3>ORDERS</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>{orders}</h1>
            {/* <h1>42</h1> */}
          </div>
        </Link>

      </div>
      <UserDetail></UserDetail>

    </main>
  )
}

export default HomeDashboard