import { useState } from 'react';
import { webDevelopmentData, workHistoryData, technicalSkillsData } from './experienceData';
import './Experience.css';

function Section({ title, data }) {
  return (
    <div className="section">
      <h3>{title}</h3>
      {data.map((exp) => (
        <div key={exp.title}>
          <h4>{exp.title}</h4>
          <h5>{exp.establishment}</h5>
          <h5>{exp.date}</h5>
          <ul>
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <br />
        </div>
      ))}
    </div>
  );
}

function EducationSection() {
  return (
    <div className="section education">
      <h3>Education</h3>
      <h4>Aberaeron Comprehensive School</h4>
      <h5>GCSE</h5>
      <h5>09/2007 - 06/2011</h5>
      <li>8 GCSE’s A - C including English, Maths & Science</li><br />

      <h4>Aberaeron Sixth Form</h4>
      <h5>A Level</h5>
      <h5>08/2011 - 06/2013</h5>
      <li>Engineering, IT & Welsh baccalaureate</li>
    </div>
  );
}

function SoftSkillsSection() {
  return (
    <div className="section">
      <h3>Soft Skills</h3>
      <div className='soft-skills'>
        <ul>
          <li>
            <h4>Communication:</h4>
            Regularly communicated with clients and customers as an Event Manager to provide progress updates and media content of the campaign.
          </li>
          <li>
            <h4>Attention to Detail:</h4>
            Coordinating all aspects of the event campaigns and maintaining accurate records. Transferring this accuracy to my role as a Web Developer.
          </li>
          <li>
            <h4>Time Management:</h4>
            Managed event timelines, including setup and breakdown, effectively prioritising tasks as an Event Manager.
          </li>
          <li>
            <h4>Problem-solving:</h4>
            Proven ability to quickly resolve issues and find solutions as an event manager, successfully adapting this problem-solving mindset to tackle complex challenges in web development.
          </li>
          <li>
            <h4>Team Collaboration:</h4>
            Fostered a collaborative and supportive environment, encouraging open communication and teamwork to deliver the final project at Le Wagon.
          </li>
        </ul>
      </div>
    </div>
  );
}

function TechnicalSkillsSection({ handleSkillHover, hoveredSkill }) {
  return (
    <div className="section">
      <h3>Technical Skills</h3>
      <ul className="technical-skills-ul">
        {technicalSkillsData.map((skill) => (
          <li
            key={skill.id}
            className={`technical-skills-li${hoveredSkill === skill.id ? ' hovered' : ''}`}
            style={{ color: skill.color }}
            onMouseEnter={() => handleSkillHover(skill.id)}
            onMouseLeave={() => handleSkillHover(null)}
          >
            <i className={`${skill.icon}`}></i>
            {hoveredSkill === skill.id && <span className="hovered-skill-content">{skill.content}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (skillId) => {
    setHoveredSkill(skillId);
  };

  return (
    <div className="experience">
      <h2 className='main-header'>My Experience</h2>
      <Section title="Web Development" data={webDevelopmentData} />
      <Section title="Work History" data={workHistoryData} />
      <EducationSection />
      <SoftSkillsSection />
      <TechnicalSkillsSection handleSkillHover={handleSkillHover} hoveredSkill={hoveredSkill} />
    </div>
  );
}
