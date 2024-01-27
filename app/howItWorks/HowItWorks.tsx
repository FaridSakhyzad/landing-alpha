import { useState } from 'react';

import styles from './styles.module.scss';
import pageStyles from '../pageStyles.module.scss';
import Accordion from '../accordion';

export default function HowItWorks () {
  const accData = [
    {
      header: (
        <h3 className={styles.howItWorksContentTitle}>
          <i className={`accordionItemHeaderFrontIcon ${styles.howItWorksIcon} ${styles.howItWorksIcon_participate}`} />
          <span>Participate in Challenges</span>
        </h3>
      ),
      content: (
        <p className={styles.howItWorksContentPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      ),
    },
    {
      header: (
        <h3 className={styles.howItWorksContentTitle}>
          <i className={`accordionItemHeaderFrontIcon ${styles.howItWorksIcon} ${styles.howItWorksIcon_recognitions}`} />
          <span>Make a Recognitions</span>
        </h3>
      ),
      content: (
        <p className={styles.howItWorksContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      ),
    },
    {
      header: (
        <h3 className={styles.howItWorksContentTitle}>
          <i className={`accordionItemHeaderFrontIcon ${styles.howItWorksIcon} ${styles.howItWorksIcon_communicate}`} />
          <span>Communicate with Temmates</span>
        </h3>
      ),
      content: (
        <p className={styles.howItWorksContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      ),
    },
    {
      header: (
        <h3 className={styles.howItWorksContentTitle}>
          <i className={`accordionItemHeaderFrontIcon ${styles.howItWorksIcon} ${styles.howItWorksIcon_rewards}`} />
          <span>Get Rewards</span>
        </h3>
      ),
      content: (
        <p className={styles.howItWorksContentPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      ),
    }
  ]

  const [activeAccItemIdx, setActiveAccItemIdx] = useState(0);

  const handleActiveAccItemChange = (index: number) => {
    setActiveAccItemIdx(index);
  }

  return (
    <div className="container" id="features">
      <section className={pageStyles.section}>
        <div className={pageStyles.sectionHeader}>
          <h4 className={pageStyles.sectionLabel}>How it works</h4>
          <h2 className={pageStyles.sectionTitle}>How it work in 4 simple steps</h2>
          <p className={pageStyles.sectionPara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>

        <div className={styles.howItWorks}>
          <div className={`${styles.howItWorksImageWrapper} slide${activeAccItemIdx}`}>
            <div className={styles.howItWorksImageBox1}>
              <div className={`${styles.howItWorksImage} ${styles.howItWorksImage1_1}`} />
              <div className={`${styles.howItWorksImage} ${styles.howItWorksImage1_2}`} />
            </div>
            <div className={styles.howItWorksImageBox2}>
              <div className={`${styles.howItWorksImage} ${styles.howItWorksImage2_1}`} />
              <div className={`${styles.howItWorksImage} ${styles.howItWorksImage2_2}`} />
              <div className={`${styles.howItWorksImage} ${styles.howItWorksImage2_3}`} />
            </div>
            <svg width="596" height="580" viewBox="0 0 596 580" xmlns="http://www.w3.org/2000/svg" className={styles.howItWorksImageBg}>
              <path d="M0.0013956 24.9114C0.151664 37.7948 8.59856 49.1296 20.8724 52.9021C34.6793 57.1458 51.4835 55.4827 58.7873 42.9799C65.5113 31.4697 55.601 18.7041 46.569 8.91406C39.7105 1.47986 29.8201 -2.05163 20.2696 1.22913C9.42449 4.95471 -0.13276 13.4066 0.0013956 24.9114ZM0.0137247 264.678C1.48199 390.702 84.0115 501.577 203.932 538.479C338.832 579.99 503.018 563.721 574.381 441.421C640.076 328.832 543.248 203.96 455.002 108.196C387.991 35.4762 291.356 0.930789 198.043 33.0234C92.0817 69.4664 -1.29743 152.141 0.0137247 264.678Z" />
            </svg>
          </div>
          <div className={styles.howItWorksContent}>
            <Accordion items={accData} onActiveItemChange={handleActiveAccItemChange} />
          </div>
        </div>

        <div className={styles.howItWorksMore}>
          <div className={styles.howItWorksMoreCol}>
            <div className={styles.howItWorksMoreItems}>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-1.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-2.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-3.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-4.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-5.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-6.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--fav-tools-7.jpg" alt="" />
              </div>
            </div>

            <h4 className={styles.howItWorksMoreTitle}>Integrate with your favorite tools</h4>
          </div>
          <div className={styles.howItWorksMoreCol}>
            <div className={styles.howItWorksMoreItems}>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-1.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-2.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-3.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-4.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-5.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-6.jpg" alt="" />
              </div>
              <div className={styles.howItWorksMoreItem}>
                <img className={styles.howItWorksMoreItemImage} src="/pic--offer-rewards-7.jpg" alt="" />
              </div>
            </div>

            <h4 className={styles.howItWorksMoreTitle}>Offer rewards that delight employees</h4>
          </div>
        </div>
      </section>
    </div>
  )
}