import "./About.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import picOne from "../components/images/business card.png"
import picTwo from "../components/images/IMG_3179 2.jpg"
import picThree from "../components/images/screenshot_2023-06-02-08-49-30-0000.png"

const images = [
  { src: picOne, alt: 'Image 1' },
  { src: picTwo, alt: 'Image 2' },
  { src: picThree, alt: 'Image 3' },
];

export default function About() {
  return (
    <div className="about">
      <h3>About</h3>
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
            <img className="carousel-img" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>

      <Tabs>
        <TabList>
          <Tab>Keep it short</Tab>
          <Tab>In depth</Tab>
        </TabList>

        <TabPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis um temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi.
          </p>
        </TabPanel>

        <TabPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis um temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla itaque ut nemo at consequuntur labore unde saepe, facilis voluptates numquam aperiam obcaecati optio earum temporibus, maxime corrupti magnam nisi.
          </p>
        </TabPanel>
      </Tabs>
    </div>
  );
}
