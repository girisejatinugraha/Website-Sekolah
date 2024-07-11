import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import '../styles/header.scss'

const Header = () => (
  <header>
    <div className="container">
      <h1 className="logo">
        <img src={logo} alt="SMAN 6 Cimahi Logo"/>
      </h1>
      <nav>
        <ul>
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/about">Tentang</Link></li>
          <li><Link to="/program">Program</Link></li>
          <li><Link to="/informasi">Informasi</Link></li>
          <li><Link to="/galeri">Galeri</Link></li>
        </ul>
      </nav>
      <div className="contact-button">
        <Link to="/contact">Kontak Kami</Link>
      </div>
    </div>
  </header>
)

export default Header