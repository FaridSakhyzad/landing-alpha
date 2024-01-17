'use client';

import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import styles from './styles.module.scss';
import pageStyles from '@/app/pageStyles.module.scss';
import Stars from "@/app/stars/Stars";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    //fade: true,
    variableWidth: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  return (
    <div className="container" id="testimonials">
      <section className={pageStyles.section}>
        <div className={pageStyles.sectionHeader}>
          <h2 className={pageStyles.sectionTitle}>Explore Our Customers Success Stories</h2>
        </div>

        <div className={styles.testimonials}>
          <div className={styles.testimonialsWrapper}>
            <Slider {...settings} ref={sliderRef}>
              <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsImageBox}>
                  <div className={styles.testimonialsLogoBox}>
                    <img src="/pic--testimonials-logo-db.svg" alt="" className={styles.testimonialsLogo} />
                  </div>
                  <img className={styles.testimonialsImage} src="/img--testimonials-1.jpg" alt="" />
                </div>
                <div className={styles.testimonialsContent}>
                  <div className={styles.stars}>
                    <Stars rating={4.5} />
                  </div>
                  <blockquote>
                    <div className={styles.testimonialsText}>
                      <p>Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                    </div>
                    <cite>
                      <span className={styles.testimonialsAuthor}>— Olivia Rhye</span>
                      <span className={styles.testimonialsAuthorTitle}>Head of Design, Dropbox</span>
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsImageBox}>
                  <div className={styles.testimonialsLogoBox}>
                    <img src="/pic--testimonials-logo-db.svg" alt="" className={styles.testimonialsLogo} />
                  </div>
                  <img className={styles.testimonialsImage} src="/img--testimonials-2.jpg" alt="" />
                </div>
                <div className={styles.testimonialsContent}>
                  <div className={styles.stars}>
                    <Stars rating={4.5} />
                  </div>
                  <blockquote>
                    <div className={styles.testimonialsText}>
                      <p>2 Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                    </div>
                    <cite>
                      <span className={styles.testimonialsAuthor}>— Olivia Rhye</span>
                      <span className={styles.testimonialsAuthorTitle}>Head of Design, Dropbox</span>
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsImageBox}>
                  <div className={styles.testimonialsLogoBox}>
                    <img src="/pic--testimonials-logo-db.svg" alt="" className={styles.testimonialsLogo} />
                  </div>
                  <img className={styles.testimonialsImage} src="/img--testimonials-3.jpg" alt="" />
                </div>
                <div className={styles.testimonialsContent}>
                  <div className={styles.stars}>
                    <Stars rating={4.5} />
                  </div>
                  <blockquote>
                    <div className={styles.testimonialsText}>
                      <p>3 Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                    </div>
                    <cite>
                      <span className={styles.testimonialsAuthor}>— Olivia Rhye</span>
                      <span className={styles.testimonialsAuthorTitle}>Head of Design, Dropbox</span>
                    </cite>
                  </blockquote>
                </div>
              </div>

              <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsImageBox}>
                  <div className={styles.testimonialsLogoBox}>
                    <img src="/pic--testimonials-logo-db.svg" alt="" className={styles.testimonialsLogo} />
                  </div>
                  <img className={styles.testimonialsImage} src="/img--testimonials-4.jpg" alt="" />
                </div>
                <div className={styles.testimonialsContent}>
                  <div className={styles.stars}>
                    <Stars rating={4.5} />
                  </div>
                  <blockquote>
                    <div className={styles.testimonialsText}>
                      <p>3 Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                    </div>
                    <cite>
                      <span className={styles.testimonialsAuthor}>— Olivia Rhye</span>
                      <span className={styles.testimonialsAuthorTitle}>Head of Design, Dropbox</span>
                    </cite>
                  </blockquote>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}