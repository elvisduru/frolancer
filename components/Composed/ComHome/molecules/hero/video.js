import styles from './Hero.module.css';

const Video = () => (
  <div className={styles.fill}>
    {/* <video
      // src={require('')}
      width='100%'
      height='100%'
      autoPlay={false}
    /> */}
    <iframe
      width='100%'
      height='300px'
      src='https://www.youtube.com/embed/D4e4tnO83Xg'
      title='video player'
      frameBorder='0'
      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen={false}></iframe>
  </div>
);

export default Video;
