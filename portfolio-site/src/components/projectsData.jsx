import memeGenerator from '../components/images/projects/meme-generator.png';
import restaurantApp from "../components/images/projects/restaurant.png";
import passwordGenerator from "../components/images/projects/password-generator.png";
import unitConverter from "../components/images/projects/unit-converter.png";
import travelJournal from "../components/images/projects/travel-journal.png";

export const projectsData = [
  {
    title: 'Meme Generator',
    imageSrc: memeGenerator,
    alt: "Meme Generator",
    framework: 'React.js',
    description: 'This is a project that I completed in my course with Scrimba. Through the module, I put into practice the use of useState, useEffect, props, and APIs.',
    linkOne: 'https://sparkly-alpaca-2bb10d.netlify.app',
    linkTwo: '',
  },
  {
    title: "Travel Journal",
    imageSrc: travelJournal,
    alt: "Travel Jouranl",
    framework: "React.js",
    description: "The purpose of this app was for me to put to practice the use of props in React. It is a travel jouranl for my recent trips to Malaysia and Indonesia.",
    linkOne: "https://verdant-tapioca-d5a576.netlify.app",
    linkTwo: 'https://github.com/MNicolaysen/scrimba-travel-journal',
  },
  {
    title: "Restaurant Ordering App",
    imageSrc: restaurantApp,
    alt: "Restaurant",
    framework: "JavaScript",
    description: "I created this app with vanilla JavaScript. It's a simple restauant ordering app that allows you to add items into your basket, romve them from the basket and proceed to checkout.",
    linkOne: "https://monumental-platypus-9e161c.netlify.app",
    linkTwo: 'https://github.com/MNicolaysen/mobile-restaurant-menu',
  },
  {
    title: "Password Generator",
    imageSrc: passwordGenerator,
    alt: "Password Generator",
    framework: "JavaScript",
    description: "This is an early app I made with my course with Scrimba. It generates a random password for you each time the buttom is clicked.",
    linkOne: "https://gilded-tapioca-d75ef6.netlify.app",
    linkTwo: 'https://github.com/MNicolaysen/password-generator',
  },
  {
    title: "Unit Converter",
    imageSrc: unitConverter,
    alt: "Unit Converter",
    framework: "JavaScript",
    description: "This is one of the first apps I created using JavaScript. It will convert any number you put in the input field into either, Meters/ Feet, Litres/ Gallons, Kilos/ Pounds",
    linkOne: "https://lovely-speculoos-f313a9.netlify.app",
    linkTwo: 'https://github.com/MNicolaysen/scrimba-unit-converter',
  },
];
