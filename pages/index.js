import PageHead from '../components/atoms/head/PageHead';
import styles from '../styles/Home.module.css';
import ComHome from '../components/Composed/ComHome';
import Display from '../components/display/display';

export default function Home() {
  return (
    <>
      <PageHead title='Froalncer | Homepage' />
      <Display />
      <div className={styles.home}>
        <ComHome />
      </div>
    </>
  );
}
