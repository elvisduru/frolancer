import Image from 'next/image';
import styles from './Extra.module.css';

const Extra = () => {
  return (
    <div className={styles.extra}>
      <article className={styles.heading}>
        <h2>Join the {`world's`} work market place</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Pariatur, inventore blanditiis
          ut dicta consectetur ab repellendus optio eligendi
          quos quo, magnam facere, rerum distinctio deserunt
          hic non consequatur eaque assumenda tempore. Autem
          aut hic eos explicabo, et sit. Facere eveniet
        </p>
      </article>
      <article className={styles.img}>
        <Image
          src='/images/Cover Image.png'
          alt='client'
          width={1170}
          height={450}
          layout='responsive'
        />
      </article>
    </div>
  );
};

export default Extra;
