import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaAngleDown,
} from 'react-icons/fa';
import { links as navlinks } from './data';
import styles from './Navbar.module.css';

const Navbar = () => {
  const linksContainer = useRef(null);
  const linkTarget = useRef(null);
  const [showlinks, setShowlinks] = useState(false);

  useEffect(() => {
    const linksHeight =
      linkTarget.current.getBoundingClientRect().height;
    if (showlinks) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = 0;
    }
  }, [showlinks]);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link href='/'>
            <a>
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
            </a>
          </Link>
          <button
            className={styles.nav_toggle}
            onClick={() => setShowlinks(!showlinks)}>
            {showlinks ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={styles.links_container}
          ref={linksContainer}>
          <ul className={styles.links} ref={linkTarget}>
            {navlinks.map(link => {
              const { id, url, text } = link;
              return (
                <li key={id} className={styles.link}>
                  <Link href={url}>
                    {text === 'more' ? (
                      <a
                        className={styles.special}
                        onClick={() => setShowlinks(false)}>
                        {text}
                        <span className={styles.fixed}>
                          <FaAngleDown />
                        </span>
                      </a>
                    ) : (
                      <a className={styles.special}>
                        {text}
                      </a>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
