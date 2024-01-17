import styles from './style.module.scss';
import pageStyles from "@/app/pageStyles.module.scss";

export default function WhyIncentive() {
  return (
    <div className="container" id="whyIncentive">
      <section className={`${pageStyles.section} ${pageStyles.section_whyIncentive}`}>
        <div className={pageStyles.sectionHeader}>
          <h4 className={pageStyles.sectionLabel}>Why Incentive?</h4>
          <h2 className={pageStyles.sectionTitle}>Here’s why you need a challenging platform</h2>
        </div>

        <div className={styles.whyIncentive}>
          <div className={styles.whyIncentiveItem}>
            <i className={`${styles.whyIncentiveIcon} ${styles.whyIncentiveIcon_engagement}`}>
              <i className={styles.whyIncentiveIconBg} />
            </i>

            <h3 className={styles.whyIncentiveTitle}>It Drives Engagement</h3>
            <p className={styles.whyIncentivePara}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>

          <div className={styles.whyIncentiveItem}>
            <i className={`${styles.whyIncentiveIcon} ${styles.whyIncentiveIcon_productivity}`}>
              <i className={styles.whyIncentiveIconBg} />
            </i>

            <h3 className={styles.whyIncentiveTitle}>It Boosts Productivity</h3>
            <p className={styles.whyIncentivePara}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>

          <div className={styles.whyIncentiveItem}>
            <i className={`${styles.whyIncentiveIcon} ${styles.whyIncentiveIcon_time}`}>
              <i className={styles.whyIncentiveIconBg} />
            </i>

            <h3 className={styles.whyIncentiveTitle}>It Saves You Time</h3>
            <p className={styles.whyIncentivePara}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
      </section>
    </div>
  )
}