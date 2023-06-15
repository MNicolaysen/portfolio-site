import { projectsData } from './projectsData';
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

  const CardContent = () => (
    <>
      <h3 className="card-title">{title}</h3>
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
    </>
  );

  return (
    <div className="card-container">
      {window.innerWidth >= 1000 ? (
        <div className="card" onClick={handleClick}>
          <img className="project-img" src={imageSrc} alt={alt} />
          <div className='details'>
            <h3 className="card-title">{title}</h3>
            <h4>Framework: {framework}</h4>
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="card" onClick={handleClick}>
          <CardContent />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <h2 className='main-header'>My Projects</h2>
      {projectsData.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}
