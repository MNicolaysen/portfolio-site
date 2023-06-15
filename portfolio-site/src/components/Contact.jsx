import { useState, useEffect } from 'react';
import ContactLinks from '../components/ContactLinks'
import './Contact.css';

function EmailForm({ onSubmit, message, setMessage }) {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <h4 className="email-header">Email:</h4>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </div>
    </form>
  );
}

function Contact() {
  const [message, setMessage] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:morton.nicolaysen@gmail.com?subject=${encodeURIComponent(
      'New Contact Form Submission'
    )}&body=${encodeURIComponent(`${message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='contact'>
      <h3 className='main-header'>Contact Me</h3>
      <EmailForm onSubmit={handleSubmit} message={message} setMessage={setMessage} />
      {isSmallScreen && <ContactLinks />}
    </div>
  );
}

export default Contact;
