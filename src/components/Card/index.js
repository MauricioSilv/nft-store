import styles from './styles.module.css';

export default function Card({ nft }) {
  return (
    <div className={styles.card}>
      <img src={nft.imgUrl} alt={nft.name} className={styles.image} />
      <div className={styles.details}>
        <h5>{nft.name}</h5>
        <span>{nft.author.name}</span>
        <h4>{nft.price}</h4>
      </div>
    </div>
  );
}
