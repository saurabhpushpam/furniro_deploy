
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Product/product.css';
import { AiFillDelete } from "react-icons/ai";


const GetContact = () => {
  const [contact, setcontact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchcontact = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getallcontact');
        setcontact(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchcontact();
  }, []);




  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* <h2>All Categories :</h2> */}
      <div className="categories-container">

        {contact.map((contactdata) => (
          <div key={contactdata.id} className="category-card">
            {/* <button onClick={() => handleDelete(category._id)}><AiFillDelete /></button> */}

            <h4><b>Name : </b>{contactdata.name}</h4>
            <p><b>Email : </b>{contactdata.email}</p>
            <p><b>Subject : </b>{contactdata.subject}</p>

          </div>
        ))}
      </div>
    </>
  );
};

export default GetContact;
