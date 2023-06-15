import { projectsData } from './projectsData';
import { useState, useEffect, useRef } from 'react';
import "./Projects.css";

function Card({ title, imageSrc, framework, alt, description, link }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    window.open(link, '_blank');
  };

  const toggleDetails = (event) => {
    event.stopPropagation();
    setShowDetails(!showDetails);
  };

  const frameworkLabel = framework === 'React.js' ? 'Framework:' : 'Language:';

  return (
    <div className="card-container">
      {window.innerWidth >= 1000 ? (
        <div className={`card ${framework === 'React.js' ? 'react-framework' : ''}`} onClick={handleClick}>
          <img className="project-img" src={imageSrc} alt={alt} />
          <div className='details'>
            <h3 className="card-title">{title}</h3>
            <h4>{frameworkLabel} {framework}</h4>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="card" onClick={handleClick}>
          <h3 className="card-title">{title}</h3>
          <img className="project-img" src={imageSrc} alt={alt} />
          {showDetails && (
            <div>
              <h4>{frameworkLabel} {framework}</h4>
              <p>{description}</p>
            </div>
          )}
          <button className="see-more-button" onClick={toggleDetails}>
            {showDetails ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const lastCardRef = useRef(null);

  useEffect(() => {
    const lastCard = lastCardRef.current;

    if (lastCard) {
      lastCard.classList.add('last-card');
    }
  }, []);

  return (
    <div className='projects'>
      <h2 className='main-header'>My Projects</h2>
      <div className='card-group'>
        {projectsData.map((project, index) => (
          <Card
            key={index}
            {...project}
            ref={index === projectsData.length - 1 ? lastCardRef : null}
          />
        ))}
      </div>
    </div>
  );
}
