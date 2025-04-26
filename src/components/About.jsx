import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.profileSection}>
          <img 
  src={process.env.PUBLIC_URL + '/images/my_img.jpg'} 
  alt="Profile" 
  className={styles.profileImage} 
/>
          <div className={styles.socialLinks}>
            <a href="https://github.com/oslowtech" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/pranjal-giri-057758260/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className={styles.infoSection}>
          <div className={styles.card}>
            <h3>Education</h3>
            <p>Computer Science student at Vellore Institute of Technology, Chennai</p>
            <p>Expected Graduation: 2028</p>
            <p>GPA: 9.26</p>
          </div>
          <div className={styles.card}>
            <h3>Interests</h3>
            <p>Software Development</p>
            <p>Artificial Intelligence</p>
            <p>Web Technologies</p>
          </div>
          <div className={styles.card}>
            <h3>Hobbies</h3>
            <p>Coding</p>
            <p>Problem Solving</p>
            <p>Tech Exploration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
