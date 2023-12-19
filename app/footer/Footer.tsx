import styles from './styles.module.scss';

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.contentText}>
            <a href="/" className={styles.logo} />

            <p className={styles.contentTextPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div className={styles.appLinks}>
              <a href="#" className={`${styles.appLink} ${styles.appLinkAppStore}`}></a>
              <a href="#" className={`${styles.appLink} ${styles.appLinkGooglePlay}`}></a>
            </div>
          </div>

          <div className={styles.contentMenu}>
            <nav className={styles.menu}>
              <a href="#home" className={styles.menuItem}>Home</a>
              <a href="#whyIncentive" className={styles.menuItem}>Why Incentive</a>
              <a href="#features" className={styles.menuItem}>Features</a>
              <a href="#dashboard" className={styles.menuItem}>Dashboard</a>
              <a href="#testimonials" className={styles.menuItem}>Testimonials</a>
              <a href="#pricing" className={styles.menuItem}>Pricing</a>
            </nav>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyrights}>
            &copy; 2023 Incentive. All rights reserved.
          </div>

          <div className={styles.media}>
            <a href="#" className={`${styles.mediaLink} ${styles.mediaLinkTwitter}`}></a>
            <a href="#" className={`${styles.mediaLink} ${styles.mediaLinkLinkedin}`}></a>
            <a href="#" className={`${styles.mediaLink} ${styles.mediaLinkFacebook}`}></a>
          </div>
        </div>
      </div>
    </footer>
  )
}