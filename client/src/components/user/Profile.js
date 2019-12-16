import React from 'react'
import { Link } from "react-router-dom";

export default function Profile() {
    return (
    <div>
  <div>
    <nav className="navbar bg-primary navbar-dark">
      <span className="navbar-brand h1 mb-0">Profile</span>
      <i className="fas fa-check text-dark">
      </i></nav><i className="fas fa-check text-dark">
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter Username..." />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your valid email..." />
          </div>
          <div className="form-group">
            <label htmlFor="first name">First Name</label>
            <input type="text" className="form-control" id="FirstName" placeholder="Enter your first name..." />
          </div>
          <div className="form-group">
            <label htmlFor="last name">Last Name</label>
            <input type="text" className="form-control" id="LastName" placeholder="Enter your last name..." />
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
