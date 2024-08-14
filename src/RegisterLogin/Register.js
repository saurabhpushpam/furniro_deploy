import React, { useState } from "react";
import * as Components from './Components';
import './Login.css'
// import { useHistory } from 'react-router-dom';


function App() {

  const [signIn, toggle] = useState(true);

  const [signupData, setSignupData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    profileimage: null,
  });


  const [loginData, setLoginData] = useState({
    userid: '', // This could be email or phone
    password: ''
  });


  const [loginError, setLoginError] = useState('');


  // const handleSignUp = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:5000/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(signupData),
  //     });
  //     const result = await response.json();
  //     // Handle the result as needed
  //     console.log('Sign up successful:', result);
  //   } catch (error) {
  //     console.error('Error during sign up:', error);
  //   }
  // };


  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginData),
  //     });
  //     const result = await response.json();
  //     // Handle the result as needed
  //     console.log('Login successful:', result);
  //   } catch (error) {
  //     console.error('Error during login:', error);
  //   }
  // };


  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Use FormData to handle file uploads
      const formData = new FormData();
      formData.append('firstname', signupData.firstname);
      formData.append('lastname', signupData.lastname);
      formData.append('email', signupData.email);
      formData.append('phone', signupData.phone);
      formData.append('password', signupData.password);
      formData.append('profileimage', signupData.profileImage); // Append the profile image file

      const response = await fetch('https://furniro-backend-4vg0.onrender.com/api/register', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      // Handle the result as needed
      console.log('Sign up successful:', result);

      // Clear all fields after signup
      setSignupData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        profileImage: null,
      });
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://furniro-backend-4vg0.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.success);
        if (result.success) {
          // Assuming the API response contains a field named "token" for the auth token
          // const  token  = result.data.token;
          // const { token } = result.data;
          const { token, usertype } = result.data;


          // console.log('token', token);
          console.log('usertype', usertype);



          // Store the token in local storage
          localStorage.setItem('token', token);
          localStorage.setItem('usertype', usertype);
          localStorage.setItem('isLoggedin', true);


          if (usertype === 'admin') {
            window.location.href = '/user';
          } else {
            window.location.href = '/';
          }

          // Redirect to the home page or another protected route
          setLoginError('');
          console.log('Login successful, token saved to local storage.');

          // Clear login fields
          setLoginData({
            userid: '',
            password: ''
          });

          // Redirect to the home page
          // window.location.href = '/';
        }
        else {


          console.log(result.msg);
          setLoginError(result.msg || 'Login failed: Invalid credentials'); // Set the error message

          // Handle errors, such as invalid credentials
          console.error('Login failed ', response.status);
        }
      } else {

        const errorResult = await response.json();
        console.log(errorResult);
        setLoginError(errorResult.msg || 'Login failed: Invalid credentials'); // Set the error message

        // Handle errors, such as invalid credentials
        console.error('Login failed:', response.status);
      }
    } catch (error) {

      console.error('Error during login:', error.message);
    }
  };



  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };


  const handleFileChange = (e) => {
    setSignupData((prev) => ({ ...prev, profileImage: e.target.files[0] }));
  };




  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };




  return (
    <div className="bodyclass">
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={handleSignUp}>
            {/* <Components.Title className="register-input">Sign Up</Components.Title> */}
            <Components.Input type='text' placeholder='FirstName' name="firstname" value={signupData.firstname} onChange={handleSignupChange} className="register-input" />
            <Components.Input type='text' placeholder='LastName' name="lastname" value={signupData.lastname} onChange={handleSignupChange} />
            <Components.Input type='email' placeholder='Email' name="email" value={signupData.email} onChange={handleSignupChange} />
            <Components.Input type='text' placeholder='Phone' name="phone" value={signupData.phone} onChange={handleSignupChange} />
            <Components.Input type='password' placeholder='Password' name="password" value={signupData.password} onChange={handleSignupChange} />
            <Components.Input type="file" accept="image/*" onChange={handleFileChange} />
            <Components.Button type="submit">Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={handleLogin}>
            <Components.Title>Log In</Components.Title>
            {/* <Components.Input type='email' placeholder='Email' /> */}
            <Components.Input type='text' placeholder='Email or Phone' name="userid" value={loginData.userid} onChange={handleLoginChange} />
            <Components.Input type='password' placeholder='Password' name="password" value={loginData.password} onChange={handleLoginChange} />
            {/* <Components.Anchor href='#'>Forgot your password?</Components.Anchor> */}
            {loginError && <p className="error-message">{loginError}</p>}
            <Components.Button type="submit">Log In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>

            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                To keep connected with us please login with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Log In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>

          </Components.Overlay>
        </Components.OverlayContainer>

      </Components.Container>
    </div>
  )
}

export default App;