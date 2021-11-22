import { useState } from 'react';
import Image from 'next/image';
import styles from './Goals.module.css';
import goals from './data';

const Goals = () => {
  const [items, setItems] = useState(goals);
  const { title, subtitle, items: goal_items } = items;
  return (
    <div className={`${styles.goals} ${styles.home}`}>
      <article className={styles.header}>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
      </article>
      <article>
        {goal_items.length > 0 && (
          <div className={styles.items}>
            {goal_items.map(item => {
              const { id, goal, icon, value } = item;
              return (
                <div key={id} className={styles.item}>
                  <div className={styles.icon}>
                    <Image
                      src={icon}
                      alt={goal}
                      width={'32px'}
                      height={'32px'}
                    />
                  </div>
                  <div className={styles.details}>
                    <h2>{value}</h2>
                    <h5>{goal}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </article>
    </div>
  );
};

export default Goals;
