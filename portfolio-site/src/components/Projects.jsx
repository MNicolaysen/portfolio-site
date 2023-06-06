import screenshotImage from '../components/images/screenshot_2023-06-02-08-49-30-0000.png';
import "./Projects.css";

export default function Projects() {
  const handleClick = () => {
    window.open('https://sparkly-alpaca-2bb10d.netlify.app', '_blank');
  };

  return (
    <div className='container'>
      <div className="card" onClick={handleClick}>
        <h3>Meme Generator</h3>
        <img className="screenshot" src={screenshotImage} alt="Project Screenshot" />
        <h4>Framework: React</h4>
        <p>This is a project that i completed in my course with Scrimba. Through the module I put into practice the use of useState, useEffect, props and API's</p>
      </div>
    </div>
  );
}
