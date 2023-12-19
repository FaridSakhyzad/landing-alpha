'use client';

import styles from './styles.module.scss';

interface IProps {
  isSandwichMenuOpen: boolean
  onSandwichMenuToggle: () => void
}

export default function Header ({ isSandwichMenuOpen, onSandwichMenuToggle }: IProps) {
  const handleSandwichMenuClick = () => {
    onSandwichMenuToggle();
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <a href="#" className={`${styles.logo} ${isSandwichMenuOpen ? styles.logo_active : ''}`} />
          <nav className={styles.menu}>
            <a href="#home" className={styles.menuItem}>Home</a>
            <a href="#whyIncentive" className={styles.menuItem}>Why Incentive</a>
            <a href="#features" className={styles.menuItem}>Features</a>
            <a href="#dashboard" className={styles.menuItem}>Dashboard</a>
            <a href="#testimonials" className={styles.menuItem}>Testimonials</a>
            <a href="#pricing" className={styles.menuItem}>Pricing</a>
          </nav>

          <a
            href=""
            className={`${styles.getStartedButton} ${isSandwichMenuOpen ? styles.getStartedButton_hidden : ''}`}
          >Get Started</a>
          <button
            onClick={handleSandwichMenuClick}
            type="button"
            className={`${styles.sandwichMenuButton} ${isSandwichMenuOpen ? styles.sandwichMenuButton_active : ''}`}
          >
            <i className={styles.sandwichMenuButtonBar} />
          </button>
        </div>
      </div>
    </header>
  )
}