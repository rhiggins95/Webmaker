import React from 'react'

export default function PageNew() {
    return (
        <div>
  <nav classname="navbar navbar-light bg-light fixed-top">
    <div>
      <a href="PageList.html" classname="text-dark">
        <i classname="fas fa-chevron-left" /></a>
      <span classname="navbar navbar-brand h1 m1-4 mb-0">Reviews</span>
    </div>
    <a href="PageList.html" classname="text-dark">
      <i classname="fas fa-check" />
    </a>
  </nav>
  <main classname="container">
    <form>
      <div classname="form group">
        <label htmlFor="name">Name</label>
        <input type="text" classname="form-control" placeholder="Enter your name here..." id="name" />
      </div>
      <div classname="form-group">
        <label htmlFor="title">Email</label>
        <input type="text" classname="form-control" placeholder="Enter your email..." id="title" />
      </div></form></main>
  <footer classname="navbr navbar-light bg-light fixed-bottom">
    <span />
    <a href="../User/Profile.html"><i classname="fas fa-user" /></a>
  </footer>
</div>
    )
}
