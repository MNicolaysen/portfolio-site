import { projectsData } from './projectsData'
import { useState } from 'react';
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

  return (
    <div className='container'>
      <div className='card' onClick={handleClick}>
        <h3>{title}</h3>
        <img className="project-img" src={imageSrc} alt={alt} />
        {showDetails && (
          <div>
            <h4>Framework: {framework}</h4>
            <p>{description}</p>
          </div>
        )}
        <button className="see-more-button" onClick={toggleDetails}>
          {showDetails ? 'See Less' : 'See More'}
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className='container'>
      <h3>Projects</h3>
      {projectsData.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}
