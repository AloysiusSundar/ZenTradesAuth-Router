import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (emailRegex.test(username) && passwordRegex.test(password)) {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password format');
    }
  };

  return (
    <div className="login-container">
      <img src="./assets/logo.png" alt="Login Image" />
      <form onSubmit={handleSubmit}>
        <div className="login-flex">
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <button type="submit" className="login-button">Login</button>
        </div>
        <div className="forgot-password" onClick={() => alert('Forgot password link clicked')}>
         <p> <span style={{ textDecoration: 'underline' }}> Forgot your password? </span></p>
      </div>
      </form>
    </div>
  );
}

export default Login;
