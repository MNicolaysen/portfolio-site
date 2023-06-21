export default function ContactLinks() {
  return (
    <ul className="contact-links">
      <li className="contact-link-header">
        <a style={{ color:'white' }} href="https://www.linkedin.com/in/morton-nicolaysen/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a style={{ color:'white' }} href="https://github.com/MNicolaysen" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a style={{ color:'white' }} href="https://m.me/nicolaysen1995" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook-messenger"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a style={{ color:'white' }} href="https://www.instagram.com/morton_nicolaysen/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li className="contact-link-header">
        <a style={{color: 'white', textDecoration: 'none', fontSize:'17px'}} href="./src/components/CV_compressed.pdf" download>
          <i className="cv">CV</i>
        </a>
      </li>
    </ul>
  );
}
