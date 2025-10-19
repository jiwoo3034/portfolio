import React from 'react';
import PageTransition from './PageTransition';
import './Contact.css';

function Contact() {
  return (
    <PageTransition>
      <section id="contact">
        <div className="contact-container">
          <h1>Contact</h1>
          
          <div className="contact-info">
            <div className="contact-item">
              <span className="label">Email</span>
              <a href="mailto:ljw030301@gmail.com">ljw030301@gmail.com</a>
            </div>
            
            <div className="contact-item">
              <span className="label">LinkedIn</span>
              <a href="https://linkedin.com/in/jiwoo--lee" target="_blank" rel="noopener noreferrer">
                jiwoo--lee
              </a>
            </div>
            
            <div className="contact-item">
              <span className="label">GitHub</span>
              <a href="https://github.com/jiwoo3034" target="_blank" rel="noopener noreferrer">
                jiwoo3034
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="sr-only">Name</label>
                <input 
                  id="name"
                  type="text" 
                  placeholder="Name" 
                  className="form-input"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  id="email"
                  type="email" 
                  placeholder="Email" 
                  className="form-input"
                  required
                  aria-required="true"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea 
                  id="message"
                  placeholder="Message"
                  className="form-textarea"
                  rows="4"
                  required
                  aria-required="true"
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
