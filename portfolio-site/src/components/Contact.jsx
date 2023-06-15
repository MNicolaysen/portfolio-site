import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
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
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);
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

  const mapContainerStyle = {
    height: '300px',
    width: '80%',
  };

  const center = {
    lat: 51.55005,
    lng: -0.14899,
  };

  const handleMarkerClick = () => {
    setInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setInfoWindowOpen(false);
  };

  return (
    <div className='contact'>
      <h3 className='main-header'>Contact Me</h3>
      <EmailForm onSubmit={handleSubmit} message={message} setMessage={setMessage} />
      {isSmallScreen && <ContactLinks />}

      <div className='map'>
        <LoadScript googleMapsApiKey="AIzaSyA30ZDq_zS1GIMotMsdyP1eQhXqjbgtbcM">
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
            <Marker position={center} onClick={handleMarkerClick} />

            {infoWindowOpen && (
              <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
                <div>
                  <h4>Marker Info</h4>
                  <p>Additional information about the marker.</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default Contact;
