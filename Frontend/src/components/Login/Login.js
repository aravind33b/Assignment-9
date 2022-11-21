import React, {useState} from 'react';
import  './Login.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:3200/user/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

function Login({ setLoggedIn }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const loggedIn = await loginUser({
      email,
      password
    });
    setLoggedIn(loggedIn);
    console.log(loggedIn.data.userName);
    if(loggedIn.data.isUserLoggedIn)
    {
      navigate("/Home");
    }
    else
    {
      alert("No user found with the entered details");
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-element">
        <label class="form-label">Email Id</label>
          <input type="email" id='loginEmail' onChange={e => setEmail(e.target.value)}/>
      </div>
      <div class="form-element">
        <label class="form-label">Password</label>
        <input type="password" id="loginPassword" onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
      <button type="submit" id="Submit">Login</button>
      </div>
    </form>

    </div>
  )
}

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}

export default Login;