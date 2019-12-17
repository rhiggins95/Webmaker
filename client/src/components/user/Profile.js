import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function Profile() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (

  <div>
    <nav className="navbar bg-primary navbar-dark">
      <span className="navbar-brand h1 mb-0">Profile</span>
      <i className="fas fa-check text-dark"/>
      </nav>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Enter username here..."
            value={username}
            onChange={e=>seyUsername(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter your email here..." />
          </div>
          <div className="form-group">
            <label htmlFor="first name">First Name</label>
            <input 
            type="text" 
            className="form-control" 
            id="firstName" 
            placeholder="Enter your first name..." />
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label>
            <input type="text" 
            className="form-control" 
            id="LastName" 
            placeholder="Enter your last name..." />
            value={lastName}
            onChange={e => setLastName(e.target.value)} />
          </div>
        </form>
        <Link to="/user/:uid/website" className="btn btn-primary btn-block"> Websites</Link>
        <Link className="btn btn-danger btn-block" to="/login"> Logout</Link>
      </div>
      <nav className="navbar bg-primary fixed-bottom">
        <span>
          <Link className="text-light" to="/user/:uid"> <i className="Fas fa-user" /></Link><i className="Fas fa-user">
          </i></span></nav><i className="Fas fa-user">
      </i></i></div> <Link className="fas fa-check text-light"to ="/user/:uid">
        <i className="Fas fa-user"/> 
        </Link>
    </div>

  );
}
