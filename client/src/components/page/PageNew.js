import React from 'react';
import { Link } from "react-router-dom";

export default function PageNew() {
 return (
    <div>
      <nav classname="navbar navbar-light bg-light fixed-top">
        <div>
          <Link to="/user/:uid/website/:wid/page" classname="text-dark">
            <i classname="fas fa-chevron-left" /></Link>
      <span classname="navbar navbar-brand h1 m1-4 mb-0">New Page</span>
    </div>
   <Link to="/user/:uid/website/:wid/page" classname="text-dark">
      <i classname="fas fa-check" />
    </Link>
  </nav>
  <main classname="container">
    <form>
      <div classname="form group">
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        classname="form-control" 
        placeholder="Enter page name..." 
        id="name" />
      </div>
      <div classname="form-group">
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        classname="form-control" 
        placeholder="Enter page title..." 
        id="title" />
      </div>
      </form>
      </main>
  <footer classname="navbar navbar-light bg-light fixed-bottom">
    <span />
   <Link to="/user/:uid">
     <i classname="fas fa-user" />
     </Link>
  </footer>
</div>
    )
}
