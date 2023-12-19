import styles from './styles.module.scss';
import pageStyles from "@/app/pageStyles.module.scss";
import Accordion from "@/app/accordion";

export default function Dashboard() {
  const accData = [
    {
      header: (
        <h3 className={styles.dashboardContentTitle}>
          <i className={`${styles.dashboardContentIcon} ${styles.dashboardContentIcon_dashboard}`} />
          <span>Dashboard</span>
        </h3>
      ),
      content: (
        <p className={styles.dashboardContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      )
    },
    {
      header: (
        <h3 className={styles.dashboardContentTitle}>
          <i className={`${styles.dashboardContentIcon} ${styles.dashboardContentIcon_challenges}`} />
          <span>Setup Challenges</span>
        </h3>
      ),
      content: (
        <p className={styles.dashboardContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      )
    },
    {
      header: (
        <h3 className={styles.dashboardContentTitle}>
          <i className={`${styles.dashboardContentIcon} ${styles.dashboardContentIcon_invite}`} />
          <span>Invite Employees</span>
        </h3>
      ),
      content: (
        <p className={styles.dashboardContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      )
    },
    {
      header: (
        <h3 className={styles.dashboardContentTitle}>
          <i className={`${styles.dashboardContentIcon} ${styles.dashboardContentIcon_rewards}`} />
          <span>Setup Rewards</span>
        </h3>
      ),
      content: (
        <p className={styles.dashboardContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      )
    }
  ];

  return (
    <div className="container" id="dashboard">
      <section className={pageStyles.section}>
        <div className={pageStyles.sectionHeader}>
          <h4 className={pageStyles.sectionLabel}>Dashboard</h4>
          <h2 className={pageStyles.sectionTitle}>Powerful Dashboard for your Company</h2>
          <p className={pageStyles.sectionPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.dashboardContent}>
            <Accordion items={accData} />
          </div>
          <div className={styles.dashboardImageBox}>
            <svg width="596" height="559" viewBox="0 0 596 559" xmlns="http://www.w3.org/2000/svg" className={styles.dashboardImageBg}>
              <path d="M0.0013956 24.9114C0.151664 37.7948 8.59856 49.1296 20.8724 52.9021C34.6793 57.1458 51.4835 55.4827 58.7873 42.9799C65.5113 31.4697 55.601 18.7041 46.569 8.91406C39.7105 1.47986 29.8201 -2.05163 20.2696 1.22913C9.42449 4.95471 -0.13276 13.4066 0.0013956 24.9114ZM0.0137247 264.678C1.48199 390.702 84.0115 501.577 203.932 538.479C338.832 579.99 503.018 563.721 574.381 441.421C640.076 328.832 543.248 203.96 455.002 108.196C387.991 35.4762 291.356 0.930789 198.043 33.0234C92.0817 69.4664 -1.29743 152.141 0.0137247 264.678Z" />
            </svg>
            <div className={styles.dashboardImage}></div>
          </div>
        </div>
      </section>
    </div>
  )
}