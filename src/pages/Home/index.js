import Card from '../../components/Card';
import Header from '../../components/Header';
import { nfts } from './mock';
import styles from './styles.module.css';
import Filter from '../../assets/icons/Filter';
import Dropdown from '../../assets/icons/Dropdown';
import Column from '../../assets/icons/Column';
import List from '../../assets/icons/List';
import Reload from '../../assets/icons/Reload';
import Search from '../../assets/icons/Search';
import { useState } from 'react';

export function Home() {
  const [searchValue, setSearchValue] = useState('');

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  const filteredNFTs = nfts.filter((nft) =>
    nft.name.toLocaleLowerCase().includes(searchValue)
  );

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.filters}>
          <button className={styles.button}>
            <Filter />
            Filters
          </button>
          <button className={styles.button}>
            NFT's
            <Dropdown />
          </button>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Search by collection, user or NFT..."
              className={styles.input}
              onChange={handleInputChange}
              value={searchValue}
            />
            <div className={styles.inputIconContainer}>
              <Search />
            </div>
          </div>
          <button className={styles.button}>
            Trending
            <Dropdown />
          </button>
          <button className={styles.smallButton}>
            <Column />
          </button>
          <button className={styles.smallButton}>
            <List />
          </button>
        </div>
        <div className={styles.nfts}>
          {filteredNFTs.map((nft) => (
            <Card key={nft.id} nft={nft} />
          ))}
        </div>
        <div className={styles.loadMoreContainer}>
          <div>
            <Reload />
          </div>
          <span>show more</span>
        </div>
      </div>
    </div>
  );
}
