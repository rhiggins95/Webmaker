import React from 'react'
import { Link } from "react-router-dom";

export default function WebsiteList() {
    return (
       <div>
  <nav className="navbar .navbar-light bg-light fixed-top">
    <Link className="text-dark" to="/user/:uid">
      <i className="fas fa-chevron-left" />
    </Link>
    <em><span className="navbar-brand mb-0 h1 font-style"> Websites</span></em>
    <Link className="text-dark" to="/user/:uid/website/new">
      <i className="fas fa-plus" />
    </Link>
  </nav>
  <div className="text-center">
    <img src="https://learn.lindsayadlerphotography.com/wp-content/uploads/2017/06/model-lace-dress-film-noir-lindsay-adler-photography2.jpg" className="img-fluid img-thumbnail" alt="https://learn.lindsayadlerphotography.com/wp-content/uploads/2017/06/model-lace-dress-film-noir-lindsay-adler-photography2.jpg" />
  </div>  
  <div className="container">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Facebook</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-cog" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Twitter</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-cog" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">Instagram</Link>
        <Link className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-cog" />                        
        </Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page">MSIMBO</Link>
        <Link  className="float-right" to="/user/:uid/website/:wid">
          <i className="fas fa-cog" />        
        </Link>    
      </li>
    </ul>
  </div>
  <nav className="navbar navbar-light bg-light fixed-bottom">
    <span />
    <Link className="text-dark" href="/user/:uid">
        <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
