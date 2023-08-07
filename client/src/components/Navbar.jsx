import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './styles/Navbar.css'

export default function Navbar() {

  return (

    <div className="navbar" >
      <div className="logo">
        <Link to='/'>
          pawsitively PALS
        </Link>
      </div>
      <div className="links">
        <Link to="/reviews">TESTIMONIALS</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
      </div>
    </div>
  )
}