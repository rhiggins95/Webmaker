import React from 'react';
import { Link } from "react-router-dom";

export default function WidgetChooser() {
    return (
        <div>
  <nav className="navbar navbar-light bg-light fixed-top">
    <div>
      <Link to="/user/:uid/website/:wid/page/:pid/widget/list" className="text-dark">
        <i className="fas fa-chevron-left" />
      </Link>
      <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
    </div>
  </nav>
  <main className="container">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/edit">Header</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetLabel.html">Label</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetTextInput.html">Text Input</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetLink.html">Link</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetButton.html">Button</Link>
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/edit">Image</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetYoutube.html">Youtube</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetDataTable.html">Data Table</Link>
      </li>
      <li className="list-group-item">
        <Link href="WidgetRepeater.html">Repeater</Link>
      </li>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span>
          <Link to="/user/:uid"><i className="fas fa-user" /></Link><i className="fas fa-user">
          </i></span></footer><i className="fas fa-user">
      </i></ul></main></div>

    )
}
