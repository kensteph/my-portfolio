import Seo from '@/components/Seo';
import { data } from '@/data/projects';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/WebDev.module.css';

const WebDev = ({ projects }) => {
  return (
    <>
      <Seo
        title="Web Development"
        description="Kender Romain Web development page"
      />
      <h1 className={styles.title}>WEB DEVELOPMENT</h1>
      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <Image
              className={styles.projectImg}
              src={project.img}
              alt="Project screenshot"
            />
            <div className={styles.desc}>
              <p>{project.desc}</p>
              <div className={styles.btns}>
                <a href={project.src} target="_blank">
                  See Source
                </a>
                <a href={project.demo} target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WebDev;

// Fetch data before rendering
export const getStaticProps = async () => {
  const projects = data;
  return { props: { projects } };
};
