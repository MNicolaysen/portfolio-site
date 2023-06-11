import memeGenerator from '../components/images/screenshot_2023-06-02-08-49-30-0000.png';
import restaurantApp from "../components/images/Screenshot 2023-06-11 at 21.12.10.png";
import passwordGenerator from "../components/images/Screenshot 2023-06-11 at 21.27.26.png";
import unitConverter from "../components/images/Screenshot 2023-06-11 at 21.39.12.png";
import travelJournal from "../components/images/Screenshot 2023-06-11 at 21.52.08.png"
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
  const projects = [
    {
      title: 'Meme Generator',
      imageSrc: memeGenerator,
      alt: "Meme Generator",
      framework: 'React.js',
      description: 'This is a project that I completed in my course with Scrimba. Through the module, I put into practice the use of useState, useEffect, props, and APIs.',
      link: 'https://sparkly-alpaca-2bb10d.netlify.app'
    },
    {
      title: "Travel Journal",
      imageSrc: travelJournal,
      alt: "Travel Jouranl",
      framework: "React.js",
      description: "The purpose of this app was for me to put to practice the use of props in React. It is a travel jouranl for my recent trips to Malaysia and Indonesia.",
      link: "https://verdant-tapioca-d5a576.netlify.app",
    },
    {
      title: "Restaurant Ordering App",
      imageSrc: restaurantApp,
      alt: "Restaurant",
      framework: "JavaScript",
      description: "I created this app with vanilla JavaScript. It's a simple restauant ordering app that allows you to add items into your basket, romve them from the basket and proceed to checkout.",
      link: "https://monumental-platypus-9e161c.netlify.app"
    },
    {
      title: "Password Generator",
      imageSrc: passwordGenerator,
      alt: "Password Generator",
      framework: "JavaScript",
      description: "This is an early app I made with my course with Scrimba. It generates a random password for you each time the buttom is clicked.",
      link: "https://gilded-tapioca-d75ef6.netlify.app",
    },
    {
      title: "Unit Converter",
      imageSrc: unitConverter,
      alt: "Unit Converter",
      framework: "JavaScript",
      description: "This is one of the first apps I created using JavaScript. It will convert any number you put in the input field into either, Meters/ Feet, Litres/ Gallons, Kilos/ Pounds",
      link: "https://lovely-speculoos-f313a9.netlify.app",
    },
  ];

  return (
    <div className='container'>
      <h3>Projects</h3>
      {projects.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}
