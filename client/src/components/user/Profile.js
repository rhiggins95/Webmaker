import React from 'react'
import { Link } from "react-router-dom";

export default function Profile() {
    return (
    <div>
  <div>
    <nav classname="navbar bg-primary navbar-dark fixed-top">
      <span classname="navbar-brand h1 mb-0">Create Account</span>
      <i classname="fas fa-check text-light">
      </i></nav><i classname="fas fa-check text-light">
      <div classname="container">
        <form>
          <div classname="form-group">
            <label htmlfor="username">Username</label>
            <input type="text" classname="form-control" id="username" placeholder="Enter Username..." />
          </div>
          <div classname="form-group">
            <label htmlfor="email">Email</label>
            <input type="email" classname="form-control" id="email" placeholder="Enter your valid email..." />
          </div>
          <div classname="form-group">
            <label htmlfor="first name">First Name</label>
            <input type="text" classname="form-control" id="FirstName" placeholder="Enter your first name..." />
          </div>
          <div classname="form-group">
            <label htmlfor="last name">Last Name</label>
            <input type="text" classname="form-control" id="LastName" placeholder="Enter your last name..." />
          </div>
        </form>
        <Link to="/user" href="../website/WebsiteList.html" classname="btn btn-primary btn-block">Websites</Link>
        <Link classname="btn btn-danger btn-block" to="/login"> Logout</Link>
      </div>
      <nav classname="navbar bg-primary fixed-bottom">
        <span>
          <a classname="text-light" href="Profile.html"><i classname="Fas fa-user" /></a><i classname="Fas fa-user">
          </i></span></nav><i classname="Fas fa-user">
      </i></i></div> <Link classname="fas fa-check text-light"to ="/user/:uid">
        <i classname="Fas fa-user"/> 
        </Link>
    </div>


    )
}
