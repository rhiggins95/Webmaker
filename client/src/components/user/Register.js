import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Register() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [username, setPassword2] = useState("");


  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <input 
          type="text" 
           className="form-control"
           placeholder="Username" 
           value={username} 
           onChange={e => setUsername(e.target.value)} />
        </div>
    <div className="form-group">
      <input 
      type="password" 
      className="form-control" 
      placeholder="password" />
      value={password}
      onChange={e => setPassword(e.target.value)} />
    </div>
    <div className="form-group">
      <input 
      type="password" 
      className="form-control" 
      placeholder="Verify Password" />
      value={password2}
      onChange={e => setPassword2(e.target.value)}
      </div>
    <Link to="/user/:uid" className="btn btn-primary btn-block" href="Profile.html">Register</Link>
    <Link to="/login" className="btn btn-success btn-block" href="Register.html">Cancel</Link>
  </form>
</div>

    )
}
