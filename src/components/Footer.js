import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://www.instagram.com/jiwooniq/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/jiwoo--lee" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/jiwoo3034" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:ljw030301@gmail.com" className="social-link">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Jiwoo Lee's Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
