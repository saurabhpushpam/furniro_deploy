// Users.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GetUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getalluserdata');
        setUsers(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  console.log(users);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="users-container">

      <div key={'001'} className="user-card" style={{ backgroundColor: "black", color: "white" }}>
        <h2><b style={{ color: "white" }}>UserName </b></h2>
        <p><b style={{ color: "white" }}>Email </b> </p>
        <p><b style={{ color: "white" }}>Phone </b></p>
        <p><b style={{ color: "white" }}>UserType </b></p>
      </div>

      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2>{`${user.firstname} ${user.lastname}`}</h2>
          <p> {user.email}</p>
          <p> {user.phone}</p>
          <p> {user.usertype}</p>
        </div>
      ))}
    </div>
  );
};

export default GetUser;
