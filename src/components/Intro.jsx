import Image from 'next/image';
import React from 'react';
import styles from '../styles/Intro.module.css';
import kr from '../assets/kr2.png';
import Circle from './Circle';
const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="orange" top="-50vh" left="-50vh" />
      <Circle backgroundColor="green" right="-50vh" />
      <div className={styles.block1}>
        <h1 className={styles.title}>
          Hello there👋!
          <br />
          My name is <br />
          <span className={styles.name}>Kender ROMAIN</span>
        </h1>

        <p className={styles.devTitle}>
          I am a full stack developer proficient in HTML, CSS, JavaScript, SQL,
          and NodeJS. For 2 years I have worked as an SQL developer for DIGICEL
          MONCASH, a Telecom, and Mobile Financial Service company; which
          allowed me to combine technical knowledge with business management
          strategies. I am a student at Microverse, a remote software
          development program that uses pair programming and project building to
          teach development. Hence I have mastered how to work remotely and
          collaboratively.
          <br />
          <br />
          Front-End: HTLM5, CSS3, JavaScript, React, Redux
          <br />
          Back-End: NodeJS, MySQL, Oracle, MongoDB
          <br />
          Tools & Methods: Git, Github, Render, Heroku, Netlify, Mobile
          Development, TDD
          <br />
          Professional: Remote Pair-Programming, Teamwork, Mentoring
          <br />
          <br />
          If you have an application you are interested in developing, a feature
          that you need to build, or a project that needs coding. I’d love to
          help with it!
        </p>
      </div>
      <div className={styles.block2}>
        <Image
          className={styles.introPicture}
          src={kr}
          alt="Kender Romain picture"
        />
      </div>
    </div>
  );
};

export default Intro;
