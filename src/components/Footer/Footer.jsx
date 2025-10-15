import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer class="portfolio-footer">
      <div class="footer-content">
        <div class="footer-info">
          <p class="logo-text">Ritika Mehta</p>
          <p class="tagline">Innovate. Create. Develop.</p>
        </div>
        <div class="footer-links">
          <p class="connect-text">Let's Connect:</p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/me-ritika-mehta/" className="icon-link"><FaLinkedin /></a>
            <a href="https://www.github.com/ritikamehta11/" className="icon-link"><FaGithub /></a>
            <a href="mailto:mehtaritika@gmail.com" className="icon-link"><FaRegEnvelope /></a>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 All Rights Reserved.</p>
      </div>
    </footer>
  )
}
