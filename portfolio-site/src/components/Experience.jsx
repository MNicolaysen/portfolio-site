import { useState } from 'react';
import { technicalSkillsData } from './experienceData';
import './Experience.css';

function TechnicalSkillsSection({ handleSkillHover, hoveredSkill }) {
  return (
    <div className="section">
      <h3>Tools I used:</h3>
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
      <TechnicalSkillsSection handleSkillHover={handleSkillHover} hoveredSkill={hoveredSkill} />
    </div>
  );
}
