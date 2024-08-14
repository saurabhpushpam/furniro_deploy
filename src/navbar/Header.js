import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './header.css';
import House_Logo from '../images/House_Logo.png'
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom'



const Header = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [usertype, setusertype] = useState('');


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        const usertypedata = localStorage.getItem('usertype');
        setusertype(usertypedata);

        if (!token) {
          console.error('No token found');
          return;
        }

        // Fetch user data using the token
        const response = await axios.get('http://localhost:5000/api/getuserdatabytoken', {
          headers: { Authorization: `${token}` }
        });

        const userData = response.data.data;
        setUser(userData);
        console.log('userdata', userData.usertype);

        // Extract user ID
        // const usertype = userData.usertype;


      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  // const handleUserIconClick = () => {
  //   if (user) {
  //     if (user.usertype === 'admin') {
  //       navigate('/user');
  //     } else {
  //       navigate('/userdetail');
  //     }
  //   } else {
  //     console.error('User data is not available');
  //   }
  // };


  const handleUserIconClick = () => {
    if (usertype) {
      if (usertype === 'admin') {
        navigate('/user');
      } else {
        navigate('/userdetail');
      }
    } else {
      console.error('User data is not available');
    }
  };





  const handlenavigate = () => {
    navigate('/');
  }

  return (
    <>
      <div className='head-top'>
        <div className='head-container'>

          <div className='head-logo' onClick={handlenavigate}>

            <img src={House_Logo} alt="House Logo" className='head-img' />
            <p className='head-title'>Furniro</p>
            {/* <Link to="/home" className='head-title'>Furniro</Link> */}

          </div>

          <div className='head-link'>


            <Link className='head-link-title' to={"/"}>Home</Link>
            <Link className='head-link-title' to={"/shop"}>Shop</Link>
            {/* <Link className='head-link-title' to={"/cart"}>About</Link> */}
            <Link className='head-link-title' to={"/"}>About</Link>
            <Link className='head-link-title' to={"/contact"}>Contact</Link>

            {/* <p className='head-link-title'>Home</p> */}
            {/* <p className='head-link-title'>Shop</p> */}
            {/* <p className='head-link-title'>About</p> */}
            {/* <p className='head-link-title'>Contact</p> */}

          </div>

          <div className='head-symbol'>

            {/* <Link to={"/user"} style={{ color: 'black' }}><FaUser className='head-icon' /></Link> */}

            <span onClick={handleUserIconClick} style={{ color: 'black', cursor: 'pointer' }}>
              <FaUser className='head-icon' />
            </span>

            <FiSearch className='head-icon' />
            <FaRegHeart className='head-icon' />
            {/* <AiOutlineShoppingCart className='head-icon' /> */}

            <Link className='head-link-icon' to={"/cart"}><AiOutlineShoppingCart className='head-icon' /></Link>

          </div>

        </div>

      </div>
      {/* 
      <Navbar expand="lg" className="bg-body-tertiary, head-top">
        <Container>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className='head-title'>
                <img src={House_Logo} alt="House Logo" />
                <Nav.Link href="#home" >Furniro</Nav.Link>
              </div>

              <Nav.Link href="#link" className='head-value'>Home</Nav.Link>
              <Nav.Link href="#link" className='head-value'>Shop</Nav.Link>
              <Nav.Link href="#link" className='head-value'>About</Nav.Link>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
 */}

    </>
  )
}

export default Header


