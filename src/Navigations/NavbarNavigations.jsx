import React from 'react'
import { Link } from 'react-router-dom'
import "./NavbarNavigation.css"

export default function NavbarNavigations() {
  return (
    <div>
      <header>
        <div>
            <h1>Navbar</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/HomeNavigation">Home</Link></li>
                <li><Link to="/AboutNavigation">About</Link></li>
                <li><Link to="/DatashowNavigation">DataShow</Link></li>
                <li><Link to="/Form1">Form</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
