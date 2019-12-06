import React from 'react';
import {Link} from "react-router-dom";

export default function WebsiteEdit() {
 return (
    <div>
      <nav classname="navbar navbar-dark bg-primary fixed-top row">
        {/* Left Navbar */}
        <div classname="col-lg-3 d-none d-lg-block">
        <div classname="navbar">
        <div>
          <Link classname="text-light" to="/user/:uid/website">
            <i classname="fas fa-chevron-left" />
          </Link>
          <span classname="navbar-brand mb-0 h1 ml-4">Websites</span>
        </div>
        <Link classname="text-light" to="/user/:uid/website/new">
          <i classname="fas fa-plus" />
        </Link>
      </div>
    </div>
    {/* Right Navbar */}
    <div classname="col-lg-9 navbar">
      <div>
        <Link classname="text-light d-lg-none " to="/user/:uid/website">
          <i classname="fas fa-chevron-left" />
        </Link>
        <span classname="navbar-brand mb-0 h1 ml-4">Shopping Cart</span>
      </div>
      <Link classname="text-light" to="/user/:uid/website/list">
        <i classname="fas fa-check" />
      </Link>
    </div>
  </nav>
  <div classname="row">
    <div classname="col-lg-3 d-none d-lg-block">
      <div classname="container">
        <ul classname="list-group list-group-flush font-style">
          <li classname="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
            <Link classname="float-right" to="/user/:uid/website/:wid">
              <i classname="fas fa-cog" />
            </Link>
          </li>
          <li classname="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Blogger</Link>
            <Link classname="float-right" to="/user/:uid/website/:wid">
              <i classname="fas fa-cog" />
            </Link>
          </li>
          <li classname="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
            <Link classname="float-right" to="/user/:uid/website/:wid">
              <i classname="fas fa-cog" />
            </Link>
          </li>
          <li classname="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
            <Link classname="float-right" to="/user/:uid/website/:wid">
              <i classname="fas fa-cog" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div classname="col-lg-9">
      <div classname="container">
        <form>
          <div classname="form-group">
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            placeholder="Enter your name..." 
            id="name" 
            classname="form-control" 
            defaultValue="Blogger" />
          </div>
          <div classname="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
            classname="form-control" 
            placeholder="Enter your feedback here..." 
            rows={5} 
            defaultValue={""} 
            />
          </div>
        <Link 
        to="/user/:uid/website"
        className="btn btn-danger btn-block">
          Delete
        </Link> 
        </form>
        </div>
        </div>
        </div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
          <span/>
          <Link className="text-light"to="/user/:uid">
        <i className="fas fa-user" />
          </Link>
        </nav>
        </div>
    );
}
