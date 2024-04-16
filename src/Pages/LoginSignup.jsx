import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Aldready have an account? <span>Login</span></p>
<div className="loginsignup-agree">
  <input type='checkbox' name='' id=''/>
  <p>By contuning, agree to use terms of privacy & policy</p>
</div>
      </div>
    </div>
  )
}
