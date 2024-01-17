import styles from './styles.module.scss';
import pageStyles from "@/app/pageStyles.module.scss";

export default function JoinedCompanies() {
  const Companies = () => (
    <div className={styles.joinedCompaniesBlock}>
      <img src="/pic-joined-logo-1.svg" alt="" />
      <img src="/pic-joined-logo-2.svg" alt="" />
      <img src="/pic-joined-logo-3.svg" alt="" />
      <img src="/pic-joined-logo-4.svg" alt="" />
      <img src="/pic-joined-logo-5.svg" alt="" />
      <img src="/pic-joined-logo-6.svg" alt="" />
      <img src="/pic-joined-logo-7.svg" alt="" />
      <img src="/pic-joined-logo-8.svg" alt="" />
      <img src="/pic-joined-logo-9.svg" alt="" />
      <img src="/pic-joined-logo-10.svg" alt="" />
      <img src="/pic-joined-logo-11.svg" alt="" />
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