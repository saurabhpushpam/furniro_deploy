import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const UserDetail = () => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState([]);
  const [profileImage, setProfileImage] = useState('');



  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/getuserdatabyid/66a0955132cea539007d79fb')
  //     .then(response => setUser(response.data.data))
  //     .catch(error => console.error('Error fetching user data:', error));

  //   setProfileImage('http://localhost:5000/api/profileimg/66acd50474f9eb6757b2754b');
  // }, []);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

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

        // Extract user ID
        const userId = userData._id;


        // const imageResponse = await axios.get(`http://localhost:5000/api/profileimg/${userId}`);
        // setProfileImage(imageResponse.data.imageUrl);

        setProfileImage(`http://localhost:5000/api/profileimg/${userId}`);

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  if (!user) {
    return <p>Loading...</p>;
  }

  console.log('hii', user);
  // console.log('object', profileImage);

  // const { firstname, lastname, email, phone, profileimage } = user;
  const { firstname, lastname, email, phone } = user;

  return (
    <div className="user-profile">
      {profileImage && (
        <div className="user-profile-image">
          <img src={profileImage} alt={`${firstname} ${lastname}`} />
        </div>
      )}
      <div className="user-profile-details">
        <h2>{firstname} {lastname}</h2>
        {email && (
          // <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
          <p><b>Email: </b>{email}</p>
        )}
        {phone && (
          // <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
          <p><b>Phone: </b>{phone}</p>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
