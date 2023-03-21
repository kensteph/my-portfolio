import Seo from '@/components/Seo';
import React from 'react';
import styles from '../styles/WebDev.module.css';

const WebDev = () => {
  return (
    <>
    <Seo title="Web Development" description="Kender Romain Web development page"/>
    <div className={styles.title}>WebDev Page</div>
    </>
  )
}

export default WebDev