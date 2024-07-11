import React from 'react';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => (
  <Layout>
    <div className="home">
      <div className="hero-content">
        <h1>Website SMAN 6 CIMAHI</h1>
        <p>
          Selamat datang di website resmi SMA Negeri 6 Cimahi, SMA 
          negeri 6 Cimahi adalah sekolah menengah atas yang didirikan 
          pada tanggal 3 September 1979, terletak di Jalan Melong Raya, 
          Kecamatan Cimahi Selatan, Kota Cimahi.
        </p>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="icons">
            <a href="https://www.instagram.com/sman6cmh/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@sman6cimahi">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/Sman-6-Cimahi">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        <button className="cta-button">
          <a href="/contact" className="cta-link">Tentang SMAN 6 CIMAHI</a>
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;