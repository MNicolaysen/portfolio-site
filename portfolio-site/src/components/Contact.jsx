import { useState } from 'react';
import "./Contact.css"

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:morton.nicolaysen@gmail.com?subject=${encodeURIComponent('New Contact Form Submission')}&body=${encodeURIComponent(`${message}`)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className='container'>
      <h3>Contact Me</h3>
      <h4 className='email-header'>Email:</h4>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required></textarea>
          <button type="submit">Submit</button>
        </div>
      </form>

      <ul className='contact-links'>
        <li className="contact-link">
          <a href="https://www.linkedin.com/in/morton-nicolaysen/"><i className="fa-brands fa-linkedin"></i></a>
        </li>
        <li className="contact-link">
          <a href="https://github.com/MNicolaysen"><i className="fa-brands fa-github"></i></a>
        </li>
        <li className="contact-link">
          <a href="https://m.me/nicolaysen1995"><i className="fa-brands fa-facebook-messenger"></i></a>
        </li>
        <li className="contact-link">
          <a href="https://www.instagram.com/morton_nicolaysen/"><i className="fa-brands fa-instagram"></i></a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
