import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLoading } = useLoading();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
    if (isOpen) toggleMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.active : ''}`}></span>
      </div>
      <ul className={`${styles.navList} ${isOpen ? styles.active : ''}`}>
        <li><Link onClick={handleClick} to="/" className={styles.navLink}>Home</Link></li>
        <li><Link onClick={handleClick} to="/about" className={styles.navLink}>About</Link></li>
        <li><Link onClick={handleClick} to="/skills" className={styles.navLink}>Skills</Link></li>
        <li><Link onClick={handleClick} to="/experience" className={styles.navLink}>Experience</Link></li>
        <li><Link onClick={handleClick} to="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
