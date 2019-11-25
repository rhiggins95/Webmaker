import React from 'react'

export default function () {
    return (
        <div>
  <nav classname="navbar navbar-light bg-light fixed-top">
    <div>
      <a href="WidgetList.html" classname="text-dark">
        <i classname="fas fa-chevron-left" />
      </a>
      <span classname="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
    </div>
    <a href="WidgetList.html" classname="text-dark">
      <i classname="fas fa-check" />
    </a>
  </nav>
  <main classname="container">
    <form>
      <div classname="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" classname="form-control" id="name" placeholder="Enter widget name..." />
      </div>
      <div classname="form-group">
        <label htmlFor="text">Text</label>
        <input type="text" classname="form-control" id="text" placeholder="Enter Widget text..." />
      </div>
      <div classname="form-group">
        <label htmlFor="url">URL</label>
        <input type="text" classname="form-control" id="url" placeholder="Enter large address..." />
      </div>
      <div classname="form-group">
        <label htmlFor="width">Width</label>
        <input type="range" classname="form-control" min={1} max={100} id="width" />
      </div>
      <div classname="form-group">
        <label htmlFor="upload">Upload</label>
        <input type="file" classname="form-control" id="upload" />
      </div>
      <button classname="text-dark btn btn-light btn-block">Upload Image</button>
      <a href="WidgetList.html" classname="text-dark btn btn-light btn-block">Delete</a>
    </form>
  </main>
  <footer classname="navbar navbar-light bg-light fixed-bottom">
    <span />
    <a href classname="text-dark"><i classname="fas fa-user" /></a>
  </footer>
</div>

    )
}
