import React, { useState } from 'react'
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import '../styles/contact.scss'

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formState)
    setIsSubmitted(true)
  }

  return (
    <Layout>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Kontak Kami</h1>

          <div className="contact-info">
            <div className="info-item">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              <p>sman6@email.com</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <p>(022) 6010934</p>
            </div>
            <div className="info-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
              <p>Jl. Melong Raya No.172</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="button-container">
              <button type="submit" onClick={handleSubmit}>Kirim</button>
            </div>
          </form>

          {isSubmitted && (
            <div className="thank-you">
              <h2>Terima kasih!</h2>
              <p>Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage