import React from 'react'

export default function WidgetHeading() {
    return (
     <div>
  <nav classname="navbar bg-light navbar-light fixed-top">
    <div>
      <a classname="text-dark" href="WidgetList.html">
        <i classname="fas fa-chevron-left" />
      </a>
      <span classname="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
    </div>
    <a classname="text-dark" href="WidgetList.html">
      <i classname="fas fa-check" />
    </a>
  </nav>
  <main classname="container">
    <form>
      <div classname="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" classname="form-control" placeholder="Enter Widget Name..." id="name" />
      </div>
      <div classname="form-group">
        <label htmlFor="text">Text</label>
        <input type="text" classname="form-control" placeholder="Enter Widget Text" id="text" />
      </div>
      <div>
        <div classname="form-group">
          <label htmlFor="size">Size</label>
          <input type="range" min={1} max={6} classname="form-control" id="size" />
        </div>
        <button classname="btn btn-danger btn-block">Delete</button>
      </div></form></main>
  <footer classname="navbar navbar-light bg-light fixed-bottom">
    <span />
    <a href="../User/Profile.html" classname="text-dark">
      <i classname="fas fa-user" />
    </a>
  </footer>
</div>

    )
}
