import React from 'react';
import styles from '../styles/Contact.module.css';
import Circle from '../components/Circle';
const Contact = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="orange" top="-27vh"/>
      <br />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <p className={styles.call}>
        If you have an application you are interested in developing, a feature
        that you need, built or a project that needs coding. I’d love to help
        with it.
      </p>
      <form className={styles.contactForm}>
        <input
          className={styles.inputText}
          required
          type="text"
          placeholder="Your name"
        />
        <input
          className={styles.inputText}
          required
          type="email"
          placeholder="Your email"
        />
        <textarea
          className={styles.inputText}
          required
          cols={3}
          rows={6}
          placeholder="Your message"
        />
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
