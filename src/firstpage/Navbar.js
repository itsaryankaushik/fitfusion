import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Navbar() {
  const navigate=useNavigate();
  function Home(){
    navigate('/')
  }
  function loggedin(){
    navigate('loggedin')
  }
  function modules(){
    navigate('/modules')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >
      <img src="logo3-removebg.png" alt="" className='navbar-brand' onClick={Home}/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={Home}>
            Home
        </li>
        <li className="nav-item">
            Membership
        </li>
        <li className="nav-item">
            Nearby Gym
        </li>
        <li className="nav-item" onClick={modules}>
          Shop
        </li>
      </ul>
      <form className="d-flex" role="search">
        {/* <input
          className="form-control me-2 nav-search-form"
          type="search"
          placeholder="Search For Services"
          aria-label="Search"
        /> */}
        <button className="btn btn-success nav-search-btn" type="submit" onClick={loggedin}>
          Login
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
