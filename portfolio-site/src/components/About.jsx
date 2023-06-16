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
      text: (
        <>
          <p>Hey, I'm Morton, a 27-year-old aspiring web developer living in London. I made the move here a little over a year ago to pursue a career as a web developer. I wasted no time and jumped right into a full-stack web developer bootcamp with Le Wagon, which was the best intro into web development I could have asked for.</p><br />
          <p>Since then, I've been working on personal projects to advance my skills and taking another online course from home to learn more advanced concepts and learn React.js. The more I learn and the more I progress make me super excited to dive into a web developer role.</p><br />
          <p>Check out my portfolio to see what I've been up to!</p>
        </>
      ),
    },
    {
      title: 'In depth',
      text: (
        <>
          <p>Hey, I'm Morton, a 27 year old web developer originally from a small village called Llangrannog in West Wales. Over a year ago, I made the exciting move to London to pursue a career in web development. Let me share a bit about my journey.</p><br />
          <p>In my younger years, I had a genuine love for technology. I was always fascinated by the latest gadgets and computer features. However, as time went on, I lost touch with that passion. Growing up in Llangrannog, a quaint coastal village heavily reliant on tourism, there were no tech-based opportunities available. To make a living, I took on various jobs, from working behind the bar in local pubs to picking kiwis in New Zealand and lifeguarding on the beautiful beaches of Ceredigion. These seasonal roles allowed me to indulge in my love for travel, particularly to surf destinations like New Zealand, Portugal, Bali, the Canary Islands, and France.</p><br />
          <p>During the lockdown, I had the privilege of living with a close friend who happened to be a web developer. It was during this time that my eyes were reopened to the world of technology. My friend guided me in exploring coding for myself, and I was instantly captivated. The process of turning lines of code, which initially seemed like gibberish to me, into tangible web elements like headers, forms, and images was incredibly satisfying.</p><br />
          <p>As the lockdown restrictions eased, I made the decision to pursue web development as a career. The first step was to leave Llangrannog and seek opportunities in a place that offered a thriving tech scene. Before I knew it, I was packing up my car and embarking on a new chapter in London.  I wasted no time upon my arrival, I enrolled in Le Wagon's fullstack web developer bootcamp, which provided me with an exceptional introduction to the world of web development. By the end of the bootcamp, I had a solid understanding of how it all works.</p><br />
          <p>However, I wanted to further refine my skills before diving into a web developer role. I took the time to settle into London, embrace the city, and explore everything it had to offer. Additionally, I enrolled in an online course with Scrimba, which allows me to learn at my own pace. Currently, I'm focusing on mastering React.js and plan to expand my skills in SQL and backend development.</p><br />
          <p>Check out my portfolio to see some of the projects I've been working on!</p>
        </>
      )
    },
  ];

  return (
    <div className='about-container'>
      <div className="about">
        <div className='carousel'>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            showStatus={false}
            emulateTouch={true}
            stopOnHover={true}
            transitionTime={700}
            swipeable={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-prev"
                >
                  <span className="arrow-left">←</span>
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  className="carousel-arrow carousel-arrow-next"
                >
                  <span className="arrow-right">→</span>
                </button>
              )
            }
          >
            {images.map((image, index) => (
              <div className="carousel" key={index}>
                <img
                  className="carousel-img"
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </div>
        <h2 className="main-header">About Me</h2>
        <Tabs>
          <TabList>
            {aboutContent.map((content, index) => (
              <Tab key={index} selectedClassName="selected-tab">
                {content.title}
              </Tab>
            ))}
          </TabList>

          {aboutContent.map((content, index) => (
            <TabPanel key={index}>
              <div className="about-content">{content.text}</div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
