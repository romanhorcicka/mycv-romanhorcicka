import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section} id="about">
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.paragraph}>
          I am an enthusiastic and detail-oriented professional with a strong foundation in Linux administration and web development. 
          My passion lies in cybersecurity, and I am committed to continuously learning and growing in this field. 
          I thrive in environments where I can solve complex problems and contribute to secure, efficient systems.
        </p>
      </section>

      <section className={styles.section} id="skills">
        <h2 className={styles.heading}>Skills</h2>
        <ul>
          <li>Linux Administration (Ubuntu, CentOS, Bash Scripting)</li>
          <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
          <li>Version Control (Git, GitHub)</li>
          <li>Networking Fundamentals (TCP/IP, DNS, SSH)</li>
          <li>Basic Cybersecurity Concepts (OWASP, Vulnerability Scanning)</li>
        </ul>
      </section>

      <section className={styles.section} id="goals">
        <h2 className={styles.heading}>Career Goals</h2>
        <p className={styles.paragraph}>
          My immediate goal is to secure a position as a junior Linux administrator or web developer, where I can apply my skills and gain hands-on experience. 
          In the long term, I aim to specialize in cybersecurity, focusing on penetration testing and web application security analysis. 
          I am driven by a desire to make systems more secure and resilient against modern threats.
        </p>
      </section>

      <section className={styles.section} id="contact">
        <h2 className={styles.heading}>Contact</h2>
        <p className={styles.paragraph}>
          Feel free to reach out to me for opportunities or collaborations:
        </p>
        <div className={styles.buttonContainer}>
          <a className={styles.button} href="mailto:romanhorcicka@gmail.com">Email Me</a>
          <a className={styles.button} href="tel:+420724955133">Call Me</a>
          <a className={styles.button} href="https://www.linkedin.com/in/roman-horcicka-23188b35b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={styles.button} href="https://github.com/romanhorcicka" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Home;