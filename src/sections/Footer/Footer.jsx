import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Raji Rahoui <br />
        Portfolio built with React and hosted on GitHub Pages
      </p>
    </section>
  );
}

export default Footer;
