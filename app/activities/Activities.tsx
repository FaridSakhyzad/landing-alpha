'use client';

import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import styles from './styles.module.scss';
import pageStyles from "@/app/pageStyles.module.scss";

export default function Activities () {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    variableWidth: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const sliderRef = useRef(null);

  const handleSliderPrevClick = () => {
    // @ts-ignore
    sliderRef?.current?.slickPrev();
  };

  const handleSliderNextClick = () => {
    // @ts-ignore
    sliderRef?.current?.slickNext();
  };

  return (
    <section className={`${pageStyles.section} ${pageStyles.section_activities}`}>
      <div className="container">
        <div className={pageStyles.sectionHeader}>
          <div className={pageStyles.sectionHeader_activitiesCol}>
            <h4 className={pageStyles.sectionLabel}>Activities</h4>
            <h2 className={pageStyles.sectionTitle}>Team Building Activities For Work</h2>
            <p className={pageStyles.sectionPara}>A single platform that seamlessly operates various types of activities. Select an activity, set a start date and duration, and invite your team</p>
          </div>
          <div className={styles.activitiesSliderControls}>
            <div className={`${styles.activitiesSliderArrow} ${styles.activitiesSliderArrow_prev}`} onClick={handleSliderPrevClick} />
            <div className={`${styles.activitiesSliderArrow} ${styles.activitiesSliderArrow_next}`} onClick={handleSliderNextClick} />
          </div>
        </div>

        <div className={styles.activities}>
          <Slider {...settings} ref={sliderRef}>
            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-0.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Step Challenges</h3>
              <p className={styles.activitiesSlidePara}>Improve employee wellbeing, boost morale, and increase the sense of belonging at your company with the world&apos;s #1 workplace step challenge. Start for free</p>
            </div>

            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-1.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Meditation Club</h3>
              <p className={styles.activitiesSlidePara}>Create a team support club to inspire each other in meditation and compare meditation minutes. Including an in-app range of meditation options</p>
            </div>

            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-2.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Photo Challenge</h3>
              <p className={styles.activitiesSlidePara}>Members will receive a daily prompt, take a picture in response, and anonymously rate others&apos; responses. This will create a collage of fun and happy pictures</p>
            </div>

            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-3.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Squat Challenge</h3>
              <p className={styles.activitiesSlidePara}>Empower your team to compete in daily average squats, automatically counted using AI computer vision technology</p>
            </div>
            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-4.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Challenge</h3>
              <p className={styles.activitiesSlidePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-5.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Challenge</h3>
              <p className={styles.activitiesSlidePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-6.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Challenge</h3>
              <p className={styles.activitiesSlidePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.activitiesSlide}>
              <div className={styles.activitiesSlideImageBox}>
                <img className={styles.activitiesSlideImage} src="/img--activities-7.jpg" alt="" />
              </div>

              <h3 className={styles.activitiesSlideTitle}>Challenge</h3>
              <p className={styles.activitiesSlidePara}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  )
}