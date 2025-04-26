import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bubbles}>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
        <div className={styles.bubble}></div>
      </div>
      <div className={styles.hero}>
        <div className={styles.avatarContainer}>
          <img 
            src="/images/vr-avatar.png" 
            alt="Developer Avatar" 
            className={styles.avatar}
          />
        </div>
        <h1>Hi, I'm Pranjal Giri</h1>
        <h2>Computer Science Student</h2>
        <p>Passionate about technology and innovation</p>
      </div>
    </div>
  );
};

export default Home;
