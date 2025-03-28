import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>
            &copy; 2025 Daham Senevinayaka <br/>
            All right reserved.
        </p>
    </section>
  )
}

export default Footer