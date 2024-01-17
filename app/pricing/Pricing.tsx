import pageStyles from '@/app/pageStyles.module.scss';
import styles from './styles.module.scss';
import Accordion from '../accordion';

export default function Pricing() {
  const accData = [
    {
      header: 'How does the free version work?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'What happens when more than 30 members join my app?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'Which premium plan is right for me?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'Can i increase the rewards budget?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'What languages are supported by the app?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'After purchase, can i change/cancel plan?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
    {
      header: 'Do you provide customer support?',
      content: (
        <>
          <p>Incentive incentivizes employees to engage in team building activities such as challenges, events and initiatives.</p>
          <p>Our free version include a light version of the platform for up to 15 members, without requiring an upgrade or commitment.</p>
          <p>This version include a step challenge, free program, progress sharing and points, and it’s a great way to see how implementing Reaction will quickly improve your team morale and boost engagement.</p>
        </>
      )
    },
  ];

  return (
    <section className={`${pageStyles.section} ${pageStyles.section_pricing}`} id="pricing">
      <div className={pageStyles.sectionHeader}>
        <h4 className={pageStyles.sectionLabel}>Pricing</h4>
        <h2 className={pageStyles.sectionTitle}>Plans that fit your scale</h2>
        <p className={pageStyles.sectionPara}>Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
      </div>

      <div className={styles.pricing}>
        <div className={styles.pricingBlock}>
          <div className={styles.pricingBlockHeader}>
            <h3 className={styles.pricingName}>Basic</h3>
            <h2 className={styles.pricingPrice}>Free</h2>
            <div className={styles.pricingDescription}>
              <p>Up to 15 users</p>
            </div>
          </div>

          <ul className={styles.pricingFeaturesList}>
            <li className={styles.pricingFeaturesItem}>Step Challenge</li>
            <li className={styles.pricingFeaturesItem}>Specific Rewards Only</li>
            <li className={styles.pricingFeaturesItem}>Feed with Activities</li>
            <li className={styles.pricingFeaturesItem}>Specific Integrations Only</li>
          </ul>

          <a href="#" className={`button ${styles.pricingChooseButton}`}>Choose</a>

          <div className={styles.pricingNote}>
            $5/ month for each additional user
          </div>
        </div>

        <div className={styles.pricingBlock}>
          <div className={styles.pricingBlockHeader}>
            <h3 className={styles.pricingName}>Core</h3>
            <h2 className={styles.pricingPrice}>$120 <span className={styles.pricingPriceText}>/ Month</span></h2>
            <div className={styles.pricingDescription}>
              <p>Up to 30 users</p>
            </div>
          </div>

          <ul className={styles.pricingFeaturesList}>
            <li className={styles.pricingFeaturesItem}>All Challenges</li>
            <li className={styles.pricingFeaturesItem}>All Rewards</li>
            <li className={styles.pricingFeaturesItem}>Feed with Activities</li>
            <li className={styles.pricingFeaturesItem}>Create Teams</li>
            <li className={styles.pricingFeaturesItem}>Direct, Teams and Challenges Messages</li>
            <li className={styles.pricingFeaturesItem}>All Integrations</li>
            <li className={styles.pricingFeaturesItem}>Analytics</li>
          </ul>

          <a href="#" className={`button ${styles.pricingChooseButton}`}>Choose</a>

          <div className={styles.pricingNote}>
            $5/ month for each additional user
          </div>
        </div>

        <div className={styles.pricingBlock}>
          <div className={styles.pricingBlockHeader}>
            <h3 className={styles.pricingName}>Pro</h3>
            <h2 className={styles.pricingPrice}>$349<span className={styles.pricingPriceText}>/ Month</span></h2>
            <div className={styles.pricingDescription}>
              <p>Up to 249 users</p>
            </div>
          </div>

          <ul className={styles.pricingFeaturesList}>
            <li className={styles.pricingFeaturesItem}>All Challenges</li>
            <li className={styles.pricingFeaturesItem}>All Rewards</li>
            <li className={styles.pricingFeaturesItem}>Feed with Activities</li>
            <li className={styles.pricingFeaturesItem}>Create Teams</li>
            <li className={styles.pricingFeaturesItem}>All Messages</li>
            <li className={styles.pricingFeaturesItem}>All Integrations</li>
            <li className={styles.pricingFeaturesItem}>Advanced Analytics</li>
            <li className={styles.pricingFeaturesItem}>Support</li>
          </ul>

          <a href="#" className={`button ${styles.pricingChooseButton}`}>Choose</a>

          <div className={styles.pricingNote}>
            $5/ month for each additional user
          </div>
        </div>
      </div>

      <div className={styles.pricingFaq}>
        <Accordion items={accData} onActiveItemChange={(index: number) => {}} />
      </div>

      <div className={styles.startForFree}>
        <div className={styles.startForFreeImage1} />
        <div className={styles.startForFreeImage2} />
        <div className={styles.startForFreeImage3} />
        <h2 className={styles.startForFreeTitle}>Start for free now</h2>
        <p className={styles.startForFreePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="#" className={`button ${styles.startForFreeButton}`}>Get Started</a>
      </div>
    </section>
  )
}
