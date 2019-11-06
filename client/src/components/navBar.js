import React from 'react'

const Navbar = () => {
    return (
<nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <a className="navbar-brand" href="#">CM</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/dashboard">Home
          <span className="sr-only"></span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/candidates">Candidates
          <span className="sr-only"></span>
        </a>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item avatar">
      <a className="nav-link" href="/logout"><i className="fas fa-power-off"></i> Log Off
          <span className="sr-only"></span>
        </a>
      </li>
    </ul>
  </div>
</nav>

    )
}

export default Navbar;