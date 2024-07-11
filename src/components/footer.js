import React from 'react';
import logo from '../images/logo.png'
import '../styles/footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-section logo">
      <img src={logo} alt="SMAN 6 Cimahi Logo"/>
        <address>
          JL. Melong Raya No.172, Melong,<br />
          Kec. Cimahi Sel., Kota Cimahi,<br />
          Jawa Barat 40534<br />
          (022) 6010934<br />
          info@sman6cmh.sch.id
        </address>
      </div>
      <div className="footer-section links">
        <h4>Link Partner</h4>
        <ul>
          <li><a href="#">Disdik Kota Cimahi</a></li>
          <li><a href="#">Disdik Provinsi Jawa Barat</a></li>
          <li><a href="#">Direktorat SMA</a></li>
          <li><a href="#">Kemendikbud Ristek</a></li>
        </ul>
      </div>
      <div className="footer-section links">
        <h4>Aplikasi</h4>
        <ul>
          <li><a href="#">Dapodik</a></li>
          <li><a href="#">e-Raport</a></li>
          <li><a href="#">Lms</a></li>
        </ul>
      </div>
      <div className="footer-section follow">
        <h4>Follow Us!</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/Sman-6-Cimahi"><i className="fab fa-facebook"></i></a>
          <a href="https://www.instagram.com/sman6cmh/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com/@sman6cimahi"><i className="fab fa-youtube"></i></a>
        </div>
        <a href="https://wa.me/082115623877" className="contact-button">Kontak WhatsApp</a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} ICT SMAN 6 CIMAHI. | K2NET Computer & Network Solutions</p>
    </div>
  </footer>
);

export default Footer;