import Image from 'next/image';
import styles from './Display.module.css';

const Display = () => {
  return (
    <article className={styles.fixed}>
      <Image
        src='/logo/Hero Illustration.svg'
        alt='hero'
        width={740}
        height={740}
        className={styles.img}
      />
    </article>
  );
};

export default Display;
