import React from 'react';
import { useLoading } from '../contexts/LoadingContext';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Loader;
