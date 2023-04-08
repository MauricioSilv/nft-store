import styles from './styles.module.css';
import Search from '../../assets/icons/Search';
import Lock from '../../assets/icons/Lock';
import Hamburger from '../../assets/icons/Hamburger';

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
          <Search />
        </li>
        <li className={styles.authContainer}>
          <Lock />
          <span>Sign In</span>
        </li>
        <li className={styles.hamburgerContainer}>
          <Hamburger />
        </li>
      </ul>
    </div>
  );
}
