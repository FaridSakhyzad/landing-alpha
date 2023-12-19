import styles from './styles.module.scss';

interface IProps {
  open: boolean
  onMenuItemClick: () => void
}

export default function SandwichMenu ({ open, onMenuItemClick }: IProps) {
  const handleMenuItemClick = () => {
    onMenuItemClick();
  }

  return (
    <div className={`${styles.sandwichMenu} ${open ? styles.sandwichMenu_isOpen : ''}`}>
      <nav className={styles.menu}>
        <a href="#home" className={styles.menuItem} onClick={handleMenuItemClick}>Home</a>
        <a href="#whyIncentive" className={styles.menuItem} onClick={handleMenuItemClick}>Why Incentive</a>
        <a href="#features" className={styles.menuItem} onClick={handleMenuItemClick}>Features</a>
        <a href="#dashboard" className={styles.menuItem} onClick={handleMenuItemClick}>Dashboard</a>
        <a href="#testimonials" className={styles.menuItem} onClick={handleMenuItemClick}>Testimonials</a>
        <a href="#pricing" className={styles.menuItem} onClick={handleMenuItemClick}>Pricing</a>
      </nav>

      <a href="" className={`button ${styles.getStartedButton}`} onClick={handleMenuItemClick}>Get Started</a>
    </div>
  )
}