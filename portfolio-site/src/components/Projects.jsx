import { projectsData } from './projectsData';
import { useState, useEffect, useRef } from 'react';
import "./Projects.css";

function Card({ title, imageSrc, framework, alt, description, linkOne, linkTwo }) {
  const [showDetails, setShowDetails] = useState(false);


  const handleButton1Click = () => {
    window.open(linkOne, '_blank');
  };

  const handleButton2Click = () => {
    window.open(linkTwo, '_blank');
  };

  const toggleDetails = (event) => {
    event.stopPropagation();
    setShowDetails(!showDetails);
  };

  const frameworkLabel = framework === 'React.js' ? 'Framework:' : 'Language:';

  return (
    <div className="card-container">
      {window.innerWidth >= 1000 ? (
        <div className={`card ${framework === 'React.js' ? 'react-framework' : ''}`}>
          <img className="project-img" src={imageSrc} alt={alt} />
          <div className='details'>
            <h3 className="card-title">{title}</h3>
            <h4>{frameworkLabel} {framework}</h4>
            <p>{description}</p>
            <div className="button-group">
              <button className="card-button" onClick={handleButton1Click}>
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
              <button className="card-button" onClick={handleButton2Click}>
                <i className="fa-brands fa-github"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card">
          <h3 className="card-title">{title}</h3>
          <img className="project-img" src={imageSrc} alt={alt} />
          {showDetails && (
            <div>
              <h4>{frameworkLabel} {framework}</h4>
              <p>{description}</p>
            </div>
          )}
          <button className="see-more-button" onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className='projects'>
      <h2 className='main-header'>My Projects</h2>
      <div className='card-group'>
        {projectsData.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
