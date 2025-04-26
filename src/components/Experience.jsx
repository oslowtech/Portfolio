import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Recovery Engineer & Software Engineer',
      company: 'Team IGNITION',
      period: 'August 2025 - Present',
    description: 'Designing and developing recovery systems for model Rockets. Working on rocket simulation software using RocketPy. Working with the Active TVC Control And Fin Actuators.',
    },
    {
      title: 'Projects Lead',
      company: 'Robotics Club',
      period: 'April 2025 - Present',
      description: 'Working and helping people with different Projects in the field of Robotics.',
    },
    {
      title: 'Projects Member',
      company: 'Robotics Club',
      period: 'August 2024 - April 2025',
      description: 'Worked on Different Projects in the field of Robotics.',
    },
    {
      title: 'Technical Team',
      company: 'Auto Vit Club',
      period: 'August 2024 - Present',
      description: 'Working on Different Projects in the field of Robotics.',
    },
    // Add more experiences
  ];

  return (
    <div className={styles.experience}>
      <h2 className={styles.til2}>Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className={styles.period}>{exp.period}</p>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
