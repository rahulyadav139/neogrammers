import styles from './Filter.module.css';
import { useEffect, useState } from 'react';
import { getData } from '../store/helper-functions';
import twitterImg from '../Assets/twitter.png';

const filters = {
  Food: ['Biryani', 'Veg-Pulao', 'Dal Bati', 'Idli Sambhar', 'Chhole Bhature'],
  Dessert: ['Gulabjamun', 'Rasmalai', 'Jalebi', 'Rasgulla', 'Sohanpapdi'],
  Sport: ['Cricket', 'Basketball', 'Volleyball', 'Football', 'Hockey'],
  Movie: ['Sci-Fi', ' Horror', 'Suspense-triller', 'Fantasy', 'Biopic'],
};

const Filter = props => {
  const [item, setItem] = useState('unselected');
  const [subItem, setSubItem] = useState('unselected');
  const [usersData, setUsersData] = useState([]);

  const filterByItems = Object.keys(filters);

  const itemsChangeHandler = e => {
    setItem(e.target.value);
    setSubItem('unselected');
  };
  const subItemChangeHandler = e => {
    setSubItem(e.target.value);
  };
  const { register } = props;

  useEffect(() => {
    const data = async () => {
      const gotData = await getData();

      let filteredByItem;
      if (item === 'unselected' || subItem === 'unselected') {
        filteredByItem = gotData;
      } else {
        filteredByItem = gotData.filter(el => el[item] === subItem);
      }

      setUsersData(filteredByItem);
    };
    try {
      data();
    } catch (error) {
      console.log(error);
    }
  }, [item, subItem, register]);

  return (
    <div>
      <div className={styles.filters}>
        <div className={styles.text}>Filter by</div>
        <div className={styles.filterItem}>
          <select value={item} onChange={itemsChangeHandler}>
            <option value="unselected">--select--</option>
            {filterByItems.map(el => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <select value={subItem} onChange={subItemChangeHandler}>
            <option value="unselected">--select--</option>
            {item === 'unselected'
              ? ''
              : filters[item].map(el => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
          </select>
        </div>
      </div>
      <div className={styles.filtered}>
        {usersData.map(el => {
          return (
            <a
              key={el.name}
              href={`https://twitter.com/${el.twitter}`}
              target="_blank"
            >
              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={twitterImg} alt="twitter" />
                </div>
                <h2 className={styles.name}>{el.name}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Filter;
