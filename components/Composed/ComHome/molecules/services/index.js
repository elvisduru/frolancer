import Image from 'next/image';
import { useState } from 'react';
import { serviceData } from './data';
import styles from './Services.module.css';

const Services = () => {
  const [ind, setInd] = useState(0);
  const [data, setData] = useState(serviceData);

  const handleImage = value => {
    setInd(value);
  };

  return (
    <div className={`${styles.Services}`}>
      <article className={styles.header}>
        <div className={styles.home}>
          <h1>Hire talented people for any work</h1>
        </div>
      </article>
      <article className={styles.item}>
        <div
          className={`${styles.home} ${styles.container}`}>
          <div className={styles.Services_img}>
            <Image
              src={
                serviceData[ind]?.img_url
                  ? serviceData[ind].img_url
                  : '/images/pexels-mikhail-nilov-7988756.jpg'
              }
              alt='service_img'
              width={445}
              height={525}
              layout='responsive'
            />
          </div>
          <div className={styles.Services_content}>
            {data.length > 0 && (
              <div className={styles.servicesContainer}>
                {data.map((item, index) => {
                  const {
                    id,
                    icon_url,
                    title,
                    categories,
                  } = item;
                  return (
                    <div
                      className={` ${
                        ind === index
                          ? styles.service_current
                          : styles.service
                      }`}
                      key={id}
                      onMouseOver={() => handleImage(index)}
                      onClick={() => handleImage(index)}>
                      <article className={styles.icon}>
                        <Image
                          src={
                            icon_url
                          }
                          alt='service_img'
                          width={20}
                          height={20}
                        />
                      </article>
                      <article>
                        <h5>{title}</h5>
                        {categories.length > 0 && (
                          <ul
                            className={
                              styles.sub_categories
                            }>
                            {categories.map(categ => {
                              const { id, category } =
                                categ;
                              return (
                                <li
                                  key={id}
                                  className={`${styles.category}
                                   `}>
                                  {category}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </article>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default Services;
