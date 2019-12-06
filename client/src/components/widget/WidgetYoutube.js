import React from 'react';
import { Link } from "react-router-dom";

export default function WidgetYoutube() {
    return (
        <div>
             <nav className="navbar navbar-light bg-light fixed-top">
            <div>
                <Link 
                to="/user/:uid/website/:wid/page/:pid/widget/list"  className="text-dark">
                    <i className="fas fa-chevron-left"></i>
                </Link>
                <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
            </div>
            <Link 
            to="/user/:uid/website/:wid/page/:pid/widget/list" className="text-dark">
                <i className="fas fa-check"></i>
            </Link>
        </nav>
        <main className="container">
            <form>
                <div className="form-group">
                    <label for="name">Name</label>
                <input 
                type="text"
                id="name"
                placeholder="Enter Widget name..."
                className="form-control"
                />
                </div>
                <div className="form-group">
                    <label for="text">Text</label>
                <input
                type="text"
                id="text"
                placeholder="Enter widget text..."
                className="form-control"
                />
                </div>
                <div className="form-group">
                    <label for="url">URL</label>
                <input
                type="text"
                id="url"
                placeholder="Enter YouTube Address..."
                className="form-control"
                />
                </div>
              <div className="form-group">
                  <label for="width">Width</label>
              <input
              type="range"
              min="1"
              max="100"
              className="form-control"
              id="width"
              />
                </div>
                <button className="btn btn-danger btn-block">Delete</button>
            </form>
        </main>
        <footer className="navbar navbar-light fixed-bottom">
            <span></span>
            <Link to="/user/:uid" class="text-dark">
            <i className="fas fa-user"></i></Link>
        </footer>
        </div>
    )
}
