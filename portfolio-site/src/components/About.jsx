import { useState, useEffect } from 'react';
import "./About.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import imageImports from './aboutImages';

export default function About() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imageImports);
  }, []);

  const aboutContent = [
    {
      title: 'Keep it short',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis um temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi.',
    },
    {
      title: 'In depth',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis um temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi.',
    },
  ];

  return (
    <div>
      <h2 className='main-header'>About</h2>
      <div className="about">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          emulateTouch={true}
          stopOnHover={true}
          transitionTime={500}
        >
          {images.map((image, index) => (
            <div className="carousel" key={index}>
              <img className="carousel-img" src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>

        <Tabs>
          <TabList>
            {aboutContent.map((content, index) => (
              <Tab key={index}>{content.title}</Tab>
            ))}
          </TabList>

          {aboutContent.map((content, index) => (
            <TabPanel key={index}>
              <p>{content.text}</p>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
