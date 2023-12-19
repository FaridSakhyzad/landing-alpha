import styles from './styles.module.scss';

export default function Hero() {
  return (
    <div className="container" id="home">
      <div className={styles.hero}>
        <div className={`${styles.col} ${styles.col_text}`}>
          <div className={styles.mainText}>
            <h1 className={styles.textTitle}>Participate in <strong className={styles.textTitleAccent}>challenges</strong> you like and <strong className={`${styles.textTitleAccent} ${styles.textTitleAccentWithSmudge}`}>get rewards</strong></h1>
            <p className={styles.textPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="button">Get Started</button>
          </div>
          <div className={styles.activeUsers}>
            <div className={styles.activeUsersList}>
              <div className={styles.activeUser}>
                <img className={styles.activeUserImage} src="/pic--avatar-1.jpg" alt="" />
              </div>
              <div className={styles.activeUser}>
                <img className={styles.activeUserImage} src="/pic--avatar-2.jpg" alt="" />
              </div>
              <div className={styles.activeUser}>
                <img className={styles.activeUserImage} src="/pic--avatar-3.jpg" alt="" />
              </div>
            </div>
            <div className={styles.activeUsersInfo}>
              <span className={styles.activeUsersCount}>14.3K</span>
              <h3 className={styles.activeUsersTitle}>
                Active Users Worldwide
              </h3>
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles.col_image}`}>
          <div className={styles.imageBox}>
            <div className={styles.appLinkBox}>
              <a href="#" className={`${styles.appLink} ${styles.appLinkAppStore}`} />
              <a href="#" className={`${styles.appLink} ${styles.appLinkGooglePlay}`} />
            </div>
            <div className={styles.image1}></div>
            <div className={styles.image2}></div>
          </div>
        </div>
      </div>
    </div>
  )
}