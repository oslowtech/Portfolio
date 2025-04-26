import React from 'react';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skills = {
    'Programming Languages': ['JavaScript', 'Python', 'Java', 'C/C++'],
    'Web Technologies': ['React', 'Node.js', 'HTML/CSS'],
    'Tools': ['Git', 'VS Code'],
    'Soft Skills': ['Team Work', 'Problem Solving', 'Communication']
  };

  return (
    <div className={styles.skills}>
      <h2 className={styles.til1}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <h3>{category}</h3>
            <ul>
              {items.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
