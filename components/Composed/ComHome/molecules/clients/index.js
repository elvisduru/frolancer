import styles from './Clients.module.css';
import Image from 'next/image';

const Clients = () => {
  return (
    <div className={styles.clients}>
      <div className={styles.item}>
        <Image
          src='/logo/bob.png'
          alt='client'
          width={90}
          height={28}
        />
      </div>
      <div className={styles.item}>
        <Image
          src='/logo/Layer 2.png'
          alt='client'
          width={84}
          height={24}
        />
      </div>
      <div className={styles.item}>
        <Image
          src='/logo/Google logo.png'
          alt='client'
          width={84}
          height={23}
        />
      </div>
      <div className={styles.item}>
        <Image
          src='/logo/Microsoft Logo.png'
          alt='client'
          width={124}
          height={26}
        />
      </div>
      <div className={styles.item}>
        <Image
          src='/logo/Walmart Logo.png'
          alt='client'
          width={111}
          height={26}
        />
      </div>
      <div className={styles.item}>
        <Image
          src='/logo/FedEx Logo.png'
          alt='client'
          width={80}
          height={24}
        />
      </div>
    </div>
  );
};

export default Clients;
