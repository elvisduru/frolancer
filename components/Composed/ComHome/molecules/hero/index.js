import { useState } from 'react';
import styles from './Hero.module.css';
import Video from './video';
import { AiOutlineMail } from 'react-icons/ai';

const Hero = () => {
  const [mail, setmMil] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setmMil(value);
  };

  return (
    <div className={styles.hero}>
      <article className={styles.hero_content}>
        <div className={styles.hero_video}>
          <Video />
        </div>
        <div className={styles.hero_form}>
          <h1>Join our community of frolancers today!</h1>
          <form>
            <div className={styles.mail_icon}>
              <AiOutlineMail />
            </div>
            <input
              type='text'
              placeholder='Enter your email address'
              onChange={handleChange}
            />
            <button className={styles.form_btn}>
              Get early access
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default Hero;
