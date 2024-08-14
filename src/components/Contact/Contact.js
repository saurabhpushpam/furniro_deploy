import React, { useState } from "react";
import "./contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import CommonHeader from "./CommonHeader";
import WarrantyDetail from "../Shop/WarrantyDetail";

import axios from 'axios';


export default function Contact() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [subject, setsubject] = useState('');

  const handleSubmit = async () => {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (!token) {
      console.error('No token found');
      return;
    }
    try {
      const response = await axios.post('https://furniro-backend-4vg0.onrender.com/api/addcontact', {
        name,
        email,
        subject

      }
        , {
          headers: {
            // Authorization: `Bearer ${token}`
            Authorization: `${token}`
          }
        });
      console.log(response.data);
      setname('');
      setemail('');
      setsubject('');

    } catch (error) {
      console.error('There was an error sending the data!', error);
    }
  };

  return (
    <>
      <div >

        <CommonHeader />
        <div className="container-one" style={{ paddingTop: "3%" }}>
          <div className="contact-head">
            <text className="head-1">Get In Touch With Us</text>
            <text className="head-2">
              For More Information About Our Product & Services. Please Feel Free
              To Drop Us <br />{" "}
              <span>
                An Email. Our Staff Always Be There To Help You Out. Do Not
                Hesitate!
              </span>{" "}
            </text>
          </div>
          <div className="contact-description">
            <div className="apw-header">
              <div className="desc-part">
                <div className="desc-iocn">
                  <FaLocationDot
                    style={{ color: "#000000", width: "18%", height: "20%" }}
                  />
                </div>

                <div className="desc-desc">
                  <text className="desc-desc-content">
                    Address
                    <br />
                  </text>
                  <text className="desc-address">
                    236 5th SE Avenue, New
                    <br /> York NY10000, United
                    <br />
                    States
                  </text>
                </div>
              </div>

              <div className="desc-part">
                <div className="desc-iocn">
                  <FaPhoneAlt
                    style={{ color: "#000000", width: "18%", height: "20%" }}
                  />
                </div>

                <div className="desc-desc">
                  <text className="desc-desc-content">
                    Phone
                    <br />
                  </text>
                  <text className="desc-address">
                    Mobile: +(84) 546-6789

                    <br />Hotline: +(84) 456-6789

                  </text>
                </div>
              </div>

              <div className="desc-part">
                <div className="desc-iocn">
                  <BsFillClockFill
                    style={{ color: "#000000", width: "18%", height: "20%" }}
                  />
                </div>

                <div className="desc-desc">
                  <text className="desc-desc-content">
                    Working Time
                    <br />
                  </text>
                  <text className="desc-address">
                    Monday-Friday: 9:00 - 22:00

                    <br />22:00
                    <br />
                    Saturday-Sunday: 9:00 -
                    <br />
                    21:00
                  </text>
                </div>
              </div>
            </div>
            <div className="nas-header">
              <div className="input-fields">
                <div className="inputs">
                  <text>Your Name </text>

                  {/* The value attribute in the input element binds the input field's value to the state variable 'name'. This means that whatever is stored in the 'name' state variable will be displayed in the input field. */}

                  <input className="input-text" placeholder="Abc" value={name}
                    onChange={(e) => setname(e.target.value)}></input>
                </div>

                <div className="inputs">
                  <text>Email address </text>
                  <input className="input-text" placeholder="Abc" value={email}
                    onChange={(e) => setemail(e.target.value)}></input>
                </div>

                <div className="inputs">
                  <text>Subject</text>
                  <input className="input-text" placeholder="Abc" value={subject}
                    onChange={(e) => setsubject(e.target.value)}></input>
                </div>


              </div>

              <div className="input-button">
                <div className="input-button-inner">
                  <button onClick={handleSubmit}>
                    Submit
                  </button> </div>


              </div>

            </div>
          </div>
        </div>

      </div>

      <WarrantyDetail></WarrantyDetail>
    </>
  );
}