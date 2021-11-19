import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import footerData from './data';
import { FaSeedling } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const [data, setData] = useState(footerData);
  const [mail, setmMil] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setmMil(value);
  };
  const {
    copyright,
    rights,
    social,
    company,
    support,
    extra,
  } = data;
  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        <article className={styles.aside}>
          <div>
            <span className={styles.img}>
              <Image
                src='/logo/icon.png'
                alt='hero'
                width={21}
                height={18}
              />
            </span>
            <span>
              <Image
                src='/logo/frolancer.png'
                alt='hero'
                width={93}
                height={16}
                className={styles.img}
              />
            </span>
          </div>
          <div className={styles.content}>
            <h5>{copyright}</h5>
            <h5>{rights}</h5>
          </div>
          {social.length > 0 && (
            <div className={styles.socials}>
              {social.map(item => {
                const { id, icon } = item;
                return (
                  <div className={styles.social} key={id}>
                    {icon}
                  </div>
                );
              })}
            </div>
          )}
        </article>
        <article className={styles.mainContainer}>
          <div className={styles.main}>
            <h3>{company.name}</h3>
            {company.links.length > 0 && (
              <ul className={styles.holders}>
                {company.links.map(item => {
                  const { id, href, url } = item;
                  return (
                    <li key={id} className={styles.holder}>
                      <Link href={href}>
                        <a>{url}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className={styles.main}>
            <h3>{support.name}</h3>
            {support.links.length > 0 && (
              <ul className={styles.holders}>
                {support.links.map(item => {
                  const { id, href, url } = item;
                  return (
                    <li key={id} className={styles.holder}>
                      <Link href={href}>
                        <a>{url}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className={styles.main}>
            <h3>{extra}</h3>
            <div className={styles.hero_form}>
              <form>
                <input
                  type='text'
                  placeholder='Enter your email address'
                  onChange={handleChange}
                />
                <button className={styles.form_btn}>
                  <FaSeedling />
                </button>
              </form>
            </div>
          </div>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
