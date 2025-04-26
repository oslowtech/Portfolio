import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.til1}>Contact Me</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <input type="text" placeholder="Name" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.formGroup}>
          <textarea placeholder="Message" className={styles.textarea}></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
