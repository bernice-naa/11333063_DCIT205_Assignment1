import React, { useState } from 'react';

function Login ()  {
  const [id, setId] = useState('');
  const [pin, setPin] = useState('');
  const [idError, setIdError] = useState('');
  const [pinError, setPinError] = useState('');
  const [idSuccess, setIdSuccess] = useState('');
  const [pinSuccess, setPinSuccess] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  
 

  const handleLogin = () => {
    if (id === '123456') {
      setIdSuccess('ID validated!');
      setIdError('');
    } else {
      setIdError('Invalid ID. Please try again.');
      setIdSuccess('');
    }

    if (pin === '7890') {
      setPinSuccess('PIN validated!');
      setPinError('');
    } else {
      setPinError('Invalid PIN. Please try again.');
      setPinSuccess('');
    }

    if (id === '123456' && pin === '7890') {
      setLoginSuccess(true);
      setId('');
      setPin('');
      setIdSuccess(false);
      setPinSuccess(false);
      setTimeout(() => {
        setLoginSuccess(false);
        
      }, 3000);
    } else {
      alert('Please enter a valid ID and PIN first');
    }
  };



  return (
    <div className="container mt-5">       
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body d-flex flex-column align-items-center justify-content-center" style={{ height: '50%' }}>
              <h2 className="text-center mb-6 text-primary">LOGIN</h2>
              {loginSuccess && <div className="alert alert-success">Login Successful</div>}
              <form className="text-center w-75"> 
                <div className="form-group mt-3">
                    {idError && <div className="alert alert-danger">{idError}</div>}
                    {idSuccess && <div className="alert alert-success">{idSuccess}</div>}
                    <label htmlFor="id">STUDENT ID:</label>
                    <input type="text" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)}/>
                </div>
                <div className="form-group mt-3">
                    {pinError && <div className="alert alert-danger">{pinError}</div>}
                    {pinSuccess && <div className="alert alert-success">{pinSuccess}</div>}
                    <label htmlFor="pin">PIN:</label>
                    <input type="password" className="form-control" id="pin" value={pin} onChange={(e) => setPin(e.target.value)}/>
                </div>
                <div className="text-center mt-3">
                  <div className="row">
                    <div className="col">
                      <a href="/forgot-password">Forgot Password?</a>
                    </div>
                    <div className="col">
                      <a href="/reset-password">Reset Password</a>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                <button type="button" className="btn btn-primary" onClick={handleLogin} style={{ width: '50%' }}>
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
