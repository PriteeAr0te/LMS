import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({email:"", password:""})

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await fetch(
      `https://lms-shog-api.vercel.app/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json)
    if(json.success) {
      localStorage.setItem('token', json.authtoken)
      navigate('/');
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
       <div className="centered">
       <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value = {credentials.email} name ="email" onChange={onChange} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value = {credentials.password} onChange={onChange} name ="password" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
       </div>
      </form>
    </div>
  )
}

export default Login
