import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {

  return (

    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  )
}
