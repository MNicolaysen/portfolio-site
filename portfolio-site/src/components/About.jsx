import "./About.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function About() {
  const aboutContent = [
    {
      title: 'Keep it short',
      text: (
        <>
          <div className='sheet'>
            <p className='sheet-text'>Hey,&nbsp; I'm Morton,&nbsp; a 27 year old aspiring web developer living in London.&nbsp; I made the move here a little over a year ago to pursue a career as a web developer.&nbsp; I wasted no time and jumped right into a fullstack web developer bootcamp with Le Wagon,&nbsp; which was the best intro into web development I could have asked for.</p><br />
            <p className='sheet-text'>Since then,&nbsp; I've been working on personal projects to advance my skills and taking another online course from home to learn more advanced concepts and learn React.js.&nbsp; The more I learn and the more I progress make me super excited to dive into a web developer role.</p><br />
            <p className='sheet-text'>Check out my portfolio to see what I've been up to!</p>
          </div>
        </>
      ),
    },
    {
      title: 'In depth',
      text: (
        <>
          <div className='sheet'>
            <p className='sheet-text'>Hey,&nbsp; I'm Morton,&nbsp; a 27 year old web developer originally from a small village called Llangrannog in West Wales. Over a year ago,&nbsp; I made the exciting move to London to pursue a career in web development.&nbsp; Let me share a bit about my journey.</p><br />
            <p className='sheet-text'>In my younger years,&nbsp; I had a genuine love for technology.&nbsp; I was always fascinated by the latest gadgets and computer features. However,&nbsp; as time went on, I lost touch with that passion.&nbsp; Growing up in Llangrannog,&nbsp; a quaint coastal village heavily reliant on tourism, there were no tech-based opportunities available.&nbsp; To make a living,&nbsp; I took on various jobs,&nbsp; from working behind the bar in local pubs to picking kiwis in New Zealand and lifeguarding on the beautiful beaches of Ceredigion.&nbsp; These seasonal roles allowed me to indulge in my love for travel,&nbsp; particularly to surf destinations like New Zealand,&nbsp; Portugal,&nbsp; Bali,&nbsp; the Canary Islands,&nbsp; and France.</p><br />
            <p className='sheet-text'>During the lockdown,&nbsp; I had the privilege of living with a close friend who happened to be a web developer.&nbsp; It was during this time that my eyes were reopened to the world of technology.&nbsp; My friend guided me in exploring coding for myself,&nbsp; and I was instantly captivated.&nbsp; The process of turning lines of code,&nbsp; which initially seemed like gibberish to me,&nbsp; into tangible web elements like headers,&nbsp; forms,&nbsp; and images was incredibly satisfying.</p><br />
            <p className='sheet-text'>As the lockdown restrictions eased,&nbsp; I made the decision to pursue web development as a career.&nbsp; The first step was to leave Llangrannog and seek opportunities in a place that offered a thriving tech scene.&nbsp; Before I knew it,&nbsp; I was packing up my car and embarking on a new chapter in London.&nbsp;  I wasted no time upon my arrival,&nbsp; I enrolled in Le Wagon's fullstack web developer bootcamp,&nbsp; which provided me with an exceptional introduction to the world of web development.&nbsp; By the end of the bootcamp,&nbsp; I had a solid understanding of how it all works.</p><br />
            <p className='sheet-text'>However,&nbsp; I wanted to further refine my skills before diving into a web developer role.&nbsp; I took the time to settle into London,&nbsp; embrace the city,&nbsp; and explore everything it had to offer.&nbsp; Additionally,&nbsp; I enrolled in an online course with Scrimba,&nbsp; which allows me to learn at my own pace.&nbsp; Currently, I'm focusing on mastering React.js and plan to expand my skills in SQL and backend development.</p>
            <p className='sheet-text'>Check out my portfolio to see some of the projects I've been working on!</p>
          </div>
        </>
      )
    },
  ];

  return (
    <div className='about-container'>
      <div className="about">
        <h2 className="main-header">About Me</h2>
        <Tabs>
          <TabList style={{borderBottom:'1px solid black'}}>
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
