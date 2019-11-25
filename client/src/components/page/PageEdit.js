import React from 'react'

export default function PageEdit() {
    return (
        <div>
              <nav className="navbar navbar-light bg-light fixed-top">
<div>
    <a href="PageList.html"><i className="fas fa-chevron-left"></i></a>
    <span className="navbar-brand h1 mb-0 m1-4">Check Your Order</span>
</div>
<a className="text-dark" href="PageList.html"><i className="fas fa-check"></i>
    </a>
</nav>
<main className="container">
    <form>
        <div className="form-group">
            <label for="name">Name</label>
        <input
        type="text"
        id="name"
        className="form-control"
        placeholder="Enter page name..."
        value="Enter your name..."
        />
    </div>
    <div className="form-group">
            <label for="title">Tracking number...</label>
        <input
        type="text"
        id="title"
        className="form-control"
        placeholder="Enter tracking # 000-0000"
        />
    </div>
    <a href="PageList.html" className="btn btn-danger btn-block">Delete</a>
    </form>
</main>
        </div>
    )
}
