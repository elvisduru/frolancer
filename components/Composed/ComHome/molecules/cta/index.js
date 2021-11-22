import { useState } from 'react';
import Image from 'next/image';
import styles from './Cta.module.css';

const Cta = () => {
  const [mail, setmMil] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setmMil(value);
  };

  return (
    <div className={styles.home}>
      <div className={`${styles.Cta}`}>
        <div className={styles.center}>
          <article className={styles.item}>
            <Image
              src='/logo/Illustration.png'
              alt='cta'
              width={140}
              height={140}
            />
          </article>
          <article className={styles.item}>
            <h2>Join 569 people in the waitlist</h2>
            <div className={styles.hero_form}>
              <form>
                <input
                  type='text'
                  placeholder='input your work email address'
                  onChange={handleChange}
                />
                <button className={styles.form_btn}>
                  Join the waitlist
                </button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cta;
