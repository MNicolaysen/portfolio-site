export default function ContactLinks() {
  return (
    <ul className="contact-links">
      <li className="contact-link-header">
        <a style={{ color: 'rgb(11,102,194)' }} href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a style={{ color: 'black' }} href="https://github.com/MNicolaysen" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a className='facebook-icon' href="https://m.me/nicolaysen1995" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-messenger"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a className='instagram-icon' href="https://www.instagram.com/morton_nicolaysen/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
}
