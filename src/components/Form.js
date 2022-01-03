import styles from './Form.module.css';
import { useRef } from 'react';
import { textFormatter } from '../store/helper-functions';

const Form = props => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const twitterRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const twitter = twitterRef.current.value;
    if (!firstName || !lastName || !twitter) return;

    props.onNext({
      name: `${textFormatter(firstName)} ${textFormatter(lastName)}`,
      twitter: twitter.toLowerCase(),
    });
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.row}>
        <label>First Name</label>
        <input ref={firstNameRef} type="text" />
      </div>
      <div className={styles.row}>
        <label>Last Name</label>
        <input ref={lastNameRef} type="text" />
      </div>
      <div className={styles.row}>
        <label>Twitter</label>
        <input ref={twitterRef} type="text" />
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
export default Form;
