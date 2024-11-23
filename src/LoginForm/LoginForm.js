import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState(''); // username -> email
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Temporary admin account
    const ADMIN_EMAIL = "admin@test.com";  // username -> email
    const ADMIN_PASSWORD = "admin123";
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {  // username -> email
      console.log('Admin login successful!');
      onLoginSuccess();
    } else {
      console.log('Login failed: Email or password is incorrect');  // username -> email
      alert('Invalid email or password'); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="input-group">
        <input
          type="email"  // text -> email
          value={email}  // username -> email
          onChange={(e) => setEmail(e.target.value)}  // setUsername -> setEmail
          placeholder="      Enter your email"  // username -> email
        />
      </div>
      <div className="input-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="      Enter your password"
        />
      </div>
      <button type="submit" className="sign-in-button">
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
