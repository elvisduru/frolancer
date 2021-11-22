import Image from 'next/image';
import { useState } from 'react';
import styles from './Features.module.css';
import { features } from './data';

const Features = () => {
  const [all, setAll] = useState(features);
  const { title, subtitle, items } = all;

  return (
    <div className={`${styles.features} ${styles.home}`}>
      <article className={styles.header}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </article>
      <article className={styles.body}>
        {items.map(item => {
          const { id, content, title: cat, icon } = item;
          return (
            <div className={styles.item} key={id}>
              <Image
                src={icon}
                alt={title}
                width={'32px'}
                height={'32px'}
              />
              <h3>{cat}</h3>
              <p>{content}</p>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Features;
