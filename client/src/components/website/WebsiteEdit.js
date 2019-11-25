import React from 'react'

export default function WebsiteEdit() {
    return (
        <div>
  <nav classname="navbar navbar-dark bg-primary fixed-top row">
    {/* Left Navbar */}
    <div classname="col-lg-3 d-none d-lg-block">
      <div classname="navbar">
        <div>
          <a classname="text-light" href="WebsiteList.html">
            <i classname="fas fa-chevron-left" />
          </a>
          <span classname="navbar-brand mb-0 h1 ml-4">Websites</span>
        </div>
        <a classname="text-light" href="WebsiteNew.html">
          <i classname="fas fa-plus" />
        </a>
      </div>
    </div>
    {/* Right Navbar */}
    <div classname="col-lg-9 navbar">
      <div>
        <a classname="text-light d-lg-none " href="WebsiteList.html">
          <i classname="fas fa-chevron-left" />
        </a>
        <span classname="navbar-brand mb-0 h1 ml-4">Shopping Cart</span>
      </div>
      <a classname="text-light" href="WebsiteList.html">
        <i classname="fas fa-check" />
      </a>
    </div>
  </nav>
  <div classname="row">
    <div classname="col-lg-3 d-none d-lg-block">
      <div classname="container">
        <ul classname="list-group list-group-flush font-style">
          <li classname="list-group-item">
            <a href="../page/PageList.html">Add/Remove Item</a>
            <a classname="float-right" href="WebsiteEdit.html">
              <i classname="fas fa-cog" />
            </a>
          </li>
          <li classname="list-group-item">
            <a href="../page/PageList.html">Add/Remove Item</a>
            <a classname="float-right" href="WebsiteEdit.html">
              <i classname="fas fa-cog" />
            </a>
          </li>
          <li classname="list-group-item">
            <a href="../page/PageList.html">Add/Remove Item</a>
            <a classname="float-right" href="WebsiteEdit.html">
              <i classname="fas fa-cog" />
            </a>
          </li>
          <li classname="list-group-item">
            <a href="../page/PageList.html">Add/Remove Item</a>
            <a classname="float-right" href="WebsiteEdit.html">
              <i classname="fas fa-cog" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div classname="col-lg-9">
      <div classname="container">
        <form>
          <div classname="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your name..." id="name" classname="form-control" defaultValue="Blogger" />
          </div>
          <div classname="form-group">
            <label htmlFor="description">Feedback</label>
            <textarea classname="form-control" placeholder="Enter your feedback here..." rows={5} defaultValue={""} />
          </div>
        </form></div></div></div></div>

    )
}
