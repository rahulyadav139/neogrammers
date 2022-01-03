import styles from './Interests.module.css';
import { useRef } from 'react';
import { sendData } from '../store/helper-functions';

const Interests = props => {
  const formRef = useRef();
  const submitHandler = e => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    let userData = { ...props.info };
    for (const entry of data) {
      userData[entry[0]] = entry[1];
    }
    sendData(userData);
    props.onCancel();
  };
  return (
    <form className={styles.form} onSubmit={submitHandler} ref={formRef}>
      <h2 className={styles.title}>Favourites</h2>
      <div className={styles.row}>
        <h3 className={styles.title}>Food</h3>
        <label htmlFor="biryani">
          1. <input id="biryani" type="radio" value="Biryani" name="Food" />
          Biryani
        </label>
        <label htmlFor="veg-pulao">
          2. <input id="veg-pulao" type="radio" value="Veg-Pulao" name="Food" />
          Veg-Pulao
        </label>
        <label htmlFor="dal-bati">
          3. <input id="dal-bati" type="radio" value="Dal Bati" name="Food" />
          Dal Bati
        </label>
        <label htmlFor="idli-sambhar">
          4.{' '}
          <input
            id="idli-sambhar"
            type="radio"
            value="Idli Sambhar"
            name="Food"
          />
          Idli Sambhar
        </label>
        <label htmlFor="chhole-bhature">
          5.{' '}
          <input
            id="chhole-bhature"
            type="radio"
            value="Chhole Bhature"
            name="Food"
          />
          Chhole Bhature
        </label>
      </div>
      <div className={styles.row}>
        <h3 className={styles.title}>Dessert</h3>
        <label htmlFor="gulabjamun">
          1.{' '}
          <input
            id="gulabjamun"
            type="radio"
            value="Gulabjamun"
            name="Dessert"
          />
          Gulabjamun
        </label>
        <label htmlFor="rasmalai ">
          2.{' '}
          <input id="rasmalai" type="radio" value="Rasmalai" name="Dessert" />
          Rasmalai
        </label>
        <label htmlFor="jalebi">
          3. <input id="jalebi" type="radio" value="Jalebi" name="Dessert" />
          Jalebi
        </label>
        <label htmlFor="rasgulla">
          4.{' '}
          <input id="rasgulla" type="radio" value="Rasgulla" name="Dessert" />
          Rasgulla
        </label>
        <label htmlFor="sohanpapdi">
          5.{' '}
          <input
            id="sohanpapdi"
            type="radio"
            value="Sohanpapdi"
            name="Dessert"
          />
          Sohanpapdi
        </label>
      </div>
      <div className={styles.row}>
        <h3 className={styles.title}>Sport</h3>
        <label htmlFor="cricket">
          1. <input id="cricket" type="radio" value="Cricket" name="Sport" />
          Cricket
        </label>
        <label htmlFor="basketball">
          2.{' '}
          <input id="basketball" type="radio" value="Basketball" name="Sport" />
          Basketball
        </label>
        <label htmlFor="volleyball">
          3.{' '}
          <input id="volleyball" type="radio" value="Volleyball" name="Sport" />
          Volleyball
        </label>
        <label htmlFor="football">
          4. <input id="football" type="radio" value="Football" name="Sport" />
          Football
        </label>
        <label htmlFor="hockey">
          5. <input id="hockey" type="radio" value="Hockey" name="Sport" />
          Hockey
        </label>
      </div>
      <div className={styles.row}>
        <h3 className={styles.title}>Movie Genre</h3>
        <label htmlFor="sci-fi ">
          1. <input id="sci-fi" type="radio" value="Sci-Fi" name="Movie" />
          Sci-Fi
        </label>
        <label htmlFor="horror">
          2. <input id="horror" type="radio" value="Horror" name="Movie" />
          Horror
        </label>
        <label htmlFor="suspense-triller">
          3.{' '}
          <input
            id="suspense-triller"
            type="radio"
            value="Suspense-triller"
            name="Movie"
          />
          Suspense-triller
        </label>
        <label htmlFor="fantasy">
          4. <input id="fantasy" type="radio" value="Fantasy" name="Movie" />
          Fantasy
        </label>
        <label htmlFor="biopic">
          5. <input id="biopic" type="radio" value="Biopic" name="Movie" />
          Biopic
        </label>
      </div>
      <div className={styles.buttons}>
        <button onClick={props.onCancel} type="button">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Interests;
