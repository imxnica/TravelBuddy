import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm';
import './SignUpPage.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/');  // 로그인 페이지로 돌아가기
  };

  return (
    <div className="signup-container">
      <h1>Sign Up to TravelBuddy</h1>
      <p className="subtitle">Please enter your details below.</p>
      
      <SignUpForm />
      
      <div className="login-link">
        Already have an account? {' '}
        <button onClick={handleBackToLogin}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
