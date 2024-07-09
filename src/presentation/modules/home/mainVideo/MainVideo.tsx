import styles from "./MainVideo.module.css";

function MainVideo() {
  return (
    <section className={styles.mainVideoSection}>
      <div className={styles.videoContainer}>
        <video
          autoPlay={true}
          playsInline={true}
          loop={true}
          muted={true}
          className={styles.video}
          src="/videos/main_video.mp4"
        />
      </div>
    </section>
  );
}

export default MainVideo;
