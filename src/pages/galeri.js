import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/galeri.scss'

const GaleriPage = () => (
  <Layout>
     <div className="galeri">
      <div className="gambar">
        <div className="hero-text">
          <h1>Galeri</h1>
          <p>SMA Negeri 6 Cimahi</p>
        </div>
      </div>
      <h1 className="galeri-title">Dokumentasi SMAN 6 Cimahi</h1>
      <p className="subtitle">Dokumentasi kegiatan SMA Negeri 6 Cimahi.</p>
      <div className="galeri-content">
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan1.png" alt="Kegiatan 1"/>
        </div>
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan2.png" alt="Kegiatan 2"/>
        </div>
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan3.png" alt="Kegiatan 3"/>
        </div>
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan4.png" alt="Kegiatan 4"/>
        </div>
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan5.png" alt="Kegiatan 5"/>
        </div>
        <div className="galeri-item">
          <StaticImage src="../images/kegiatan6.png" alt="Kegiatan 6"/>
        </div>
        </div>
    </div>
  </Layout>
)

export default GaleriPage