import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-info">
          <p className="logo-text profileName">Ritika Mehta</p>
          <p className="tagline">Innovate. Create. Develop.</p>
        </div>
        <div className="footer-links">
          <p className="connect-text">Let's Connect:</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/me-ritika-mehta/" className="icon-link" aria-label="Visit Ritika's LinkedIn Profile"><FaLinkedin /></a>
            <a href="https://www.github.com/ritikamehta11/" className="icon-link" aria-label="Visit Ritika's GitHub Profile"><FaGithub /></a>
            <a href="mailto:mehtaritika@gmail.com" className="icon-link" aria-label="Visit Ritika's email"><FaRegEnvelope /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2025 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
