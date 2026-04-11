import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [rangeValue, setRangeValue] = useState(50);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(135deg, #121212, #1e1e1e)' }}>
      <div className="card text-center border border-warning-subtle" style={{ width: '20rem', backgroundColor: '#1e1e1e', border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ color: '#FFD700' }}>Register</h5>
          <form>

            <div className="mb-3">
              <label htmlFor="exampleInputUsername1" className="form-label" style={{ color: '#FFD700' }}>Username</label>
              <input 
                type="text" 
                className="form-control input-animate" 
                id="exampleInputUsername1" 
                aria-describedby="UsernameHelp" 
                style={{ backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444' }} 
              />
              
            </div>

            
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: '#FFD700' }}>Email address</label>
              <input 
                type="email" 
                className="form-control input-animate" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                style={{ backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444' }} 
                value={email} 
                onChange={handleEmailChange} 
              />
              {emailError && <div className="form-text text-danger">{emailError}</div>}
            </div>


            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: '#FFD700' }}>Password</label>
              <div className="input-group">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  className="form-control input-animate" 
                  id="exampleInputPassword1" 
                  style={{ backgroundColor: '#2c2c2c', color: '#fff', border: '1px solid #444' }} 
                />
                <button 
                  type="button" 
                  className="btn btn-outline-warning" 
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

             
              <label htmlFor="range4" className="form-label" style={{ color: '#FFD700' }}>Age</label>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={rangeValue}
                id="range4"
                onChange={e => setRangeValue(e.target.value)}
              />
              <output htmlFor="range4" id="rangeValue" aria-hidden="true" style={{ color: '#FFD700' }}>
                {rangeValue}
              </output>


            </div>
            <button type="submit" className="btn w-100 btn-animate" style={{ backgroundColor: '#74008b', color: '#FFD700', border: 'none' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
