import React from 'react'
import { Link } from "react-router-dom";

export default function WebsitList() {
    return (
       <div>
  <nav className="navbar .navbar-light bg-light fixed-top">
    <a className="text-dark" to="/user/:uid">
      <i className="fas fa-chevron-left" />
    </a>
    <em><span className="navbar-brand mb-0 h1 font-style"> Websites</span></em>
    <Link className="text-dark" to="/user/:uid/website/new">
      <i className="fas fa-shopping-bag" />
    </Link>
  </nav>
  <div className="text-center">
    <img src="https://learn.lindsayadlerphotography.com/wp-content/uploads/2017/06/model-lace-dress-film-noir-lindsay-adler-photography2.jpg" className="img-fluid img-thumbnail" alt="https://learn.lindsayadlerphotography.com/wp-content/uploads/2017/06/model-lace-dress-film-noir-lindsay-adler-photography2.jpg" />
  </div>  
  <div className="container">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-tshirt" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Blogger</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-tshirt" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-tshirt" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
        <Link to="/user/:uid/website/:wid" className="float-right">
          <i className="fas fa-tshirt" />        
        </Link>    
      </li>
    </ul>
  </div>
  <nav className="navbar navbar-light bg-light fixed-bottom">
    <span />
    <Link className="text-dark" href="/user/:uid">
        <i className="fab fa-apple-pay" />
        </Link>
      </nav>
    </div>
  );
}
