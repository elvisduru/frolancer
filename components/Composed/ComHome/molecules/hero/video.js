import styles from './Hero.module.css';

const Video = () => (
  <div className={styles.fill}>
    <video
      // src={require('')}
      width='100%'
      height='100%'
      autoPlay={false}
    />
  </div>
);

export default Video;
