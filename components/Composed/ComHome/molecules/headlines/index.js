import Image from 'next/image';
import styles from './Headlines.module.css';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Headlines = () => {
  return (
    <div className={styles.headlines}>
      <article className={styles.img}>
        <Image
          src='/images/Client Photo.png'
          alt='client'
          width={350}
          height={450}
          layout='responsive'
        />
      </article>
      <article className={styles.details}>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cum illum facere dolor maxime
          voluptates. Ipsum repudiandae autem tempora
          incidunt at sed quasi amet libero vitae voluptas,
          ad, perferendis cum eum! Mollitia deserunt nulla a
          veritatis aliquid asperiores libero autem dolorum
          voluptates, error voluptatibus? Nam similique aut
          asperiores. Doloremque, nulla sint. Facilis,
          laboriosam. Magnam ratione velit nisi neque
          veritatis omnis culpa.
        </p>
        <button className={styles.headline_btn}>
          get started
          <FaAngleDoubleRight className={styles.icon} />
        </button>
      </article>
    </div>
  );
};

export default Headlines;
