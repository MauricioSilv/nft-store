import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.filters}>
          <button className={styles.button}>Filters</button>
          <button className={styles.button}>NFT's</button>
          <input
            type="text"
            placeholder="Search by collection, user or NFT..."
            className={styles.input}
          />
          <button className={styles.button}>Trending</button>
          <button className={styles.smallButton}>G</button>
          <button className={styles.smallButton}>L</button>
        </div>
      </div>
    </div>
  );
}