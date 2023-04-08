import styles from './styles.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.menuContainer}>
        <div className={styles.logo}>Coders</div>
        <li>
          <span>Art</span>
          <span>/</span>
          <span>Community</span>
          <span>/</span>
          <span>Magazine</span>
          <span>/</span>
          <span>Shop</span>
        </li>
      </ul>
      <ul className={styles.userInfoContainer}>
        <li>
          <span>S</span>
        </li>
        <li>
          <span>L</span>
          <span>Sign In</span>
        </li>
        <li>
          <span>H</span>
        </li>
      </ul>
    </div>
  );
}
