// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
            alt="wave"
            className="wave-logo"
          />
          <h3 className="wave-text">Wave</h3>
        </div>
        <ul className="nav-options">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header
