import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import PopupModal from './PopupModal'; // Import the PopupModal component

const LoginSignup = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleContinue = () => {
    // Perform your registration logic here
    // For example, call an API to register the user

    // After successful registration, set isRegistered to true
    setIsRegistered(true);
  };

  const closeModal = () => {
    // Close the modal by setting isRegistered to false
    setIsRegistered(false);
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button onClick={handleContinue}>Continue</button>
        <p className='loginsignup-login'>
          Already have an account?<span>Login here</span>
        </p>
        <div className='loginsignup-agree'>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
      </div>

      {/* Render the modal if isRegistered is true */}
      {isRegistered && <PopupModal closeModal={closeModal} />}
    </div>
  );
};

export default LoginSignup;
