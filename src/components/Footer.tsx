import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 Roman Horcicka</p>
      <div>
        <a href="https://www.linkedin.com/in/romanhorcicka" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://github.com/romanhorcicka" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;