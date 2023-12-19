import styles from './styles.module.scss';
import pageStyles from "@/app/pageStyles.module.scss";

export default function JoinedCompanies() {
  const Companies = () => (
    <div className={styles.joinedCompaniesBlock}>
      <img src="/pic-joined-logo-1.jpg" />
      <img src="/pic-joined-logo-2.jpg" />
      <img src="/pic-joined-logo-3.jpg" />
      <img src="/pic-joined-logo-4.jpg" />
      <img src="/pic-joined-logo-5.jpg" />
      <img src="/pic-joined-logo-6.jpg" />
      <img src="/pic-joined-logo-7.jpg" />
      <img src="/pic-joined-logo-8.jpg" />
      <img src="/pic-joined-logo-9.jpg" />
      <img src="/pic-joined-logo-10.jpg" />
      <img src="/pic-joined-logo-11.jpg" />
    </div>
  );

  return (
    <section className={`${pageStyles.section} ${pageStyles.section_joinedCompanies}`}>
      <div className={pageStyles.sectionHeader}>
        <p className={pageStyles.sectionPara}>Join 100+ companies already growing</p>
      </div>
      <div className={styles.joinedCompanies}>
        <Companies />
        <Companies />
        <Companies />
      </div>
    </section>
  )
}