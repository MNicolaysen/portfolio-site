import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [message, setMessage] = useState('');
  const defaultSubject = 'RE: Portfolio Site Contact Me';

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:morton.nicolaysen@gmail.com?subject=${encodeURIComponent(
      defaultSubject
    )}&body=${encodeURIComponent(`${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <h3 className="main-header">Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4 className="email-header">To: morton.nicolaysen@gmail.com</h4>
          <h4 className="email-header">Cc: N/A</h4>
          <h4 className="email-header">Subject: RE: Portfolio Site Contact Me</h4>
          <h4></h4>
          <div className='contact-elements'>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            ></textarea>
            <button type="submit"><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>
      </form>
      <ul className="contact-links">
        <li className="contact-link">
          <a style={{ color: 'rgb(11,102,194)' }} href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="contact-link">
          <a style={{ color: 'black' }} href="https://github.com/MNicolaysen" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="contact-link">
          <a style={{color: 'rgb(0,128,247)'}} href="https://m.me/nicolaysen1995" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-messenger"></i>
          </a>
        </li>
        <li className="contact-link">
          <a style={{color: 'rgb(229,37,90)'}} href="https://www.instagram.com/morton_nicolaysen/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
