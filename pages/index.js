import AppLAyout from '../components/layout/AppLAyout';
import PageHead from '../components/atoms/head/PageHead';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ComHome from '../components/Composed/ComHome';

export default function Home() {
  return (
    <>
      <PageHead title='Froalncer | Homepage' />
      <div className={styles.home}>
        <ComHome />
      </div>
    </>
  );
}
