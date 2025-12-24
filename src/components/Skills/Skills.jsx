import React from 'react';
import { FaReact, FaNode, FaHtml5, FaCss3, FaPython, FaWordpress } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiMysql } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const size = 50;
const SKILLS = [
  { name: 'React', icon: <FaReact size={size} />, color: '#61DAFB' },
  { name: 'Node.js', icon: <FaNode size={size} />, color: '#339933' },
  { name: 'JavaScript', icon: <SiJavascript size={size} />, color: '#F7DF1E' },
  { name: 'Python', icon: <FaPython size={size} />, color: '#3776AB' },
  { name: 'MongoDB', icon: <SiMongodb size={size} />, color: '#47A248' },
  { name: 'MySQL', icon: <SiMysql size={size} />, color: '#4479A1' },
  { name: 'HTML5', icon: <FaHtml5 size={size} />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3 size={size} />, color: '#1572B6' },
  { name: 'Bootstrap', icon: <BsBootstrap size={size} />, color: '#7952B3' },
  { name: 'WordPress', icon: <FaWordpress size={size} />, color: '#21759B' },
];

export const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <h3>Technical Stack</h3>
        <div className="logos">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-card" title={skill.name}>
              <div className="icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};