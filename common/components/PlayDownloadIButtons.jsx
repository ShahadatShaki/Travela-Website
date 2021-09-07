import styles from "../../styles/Common.module.scss";

const PlayDownloadButtons = () => {
  return (
    <div className={styles.downloadButtons}>
      <a href="https://apps.apple.com/app/id1562887010"
        target="_blank"
        title="Travela on App Store"
        rel="noopener noreferrer">
        <img src="images/button-app.png" alt="" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.travela.xyz"
        target="_blank"
        title="Travela on Google Play"
        rel="noopener noreferrer">
        <img src="images/button-play.png" alt="" />
      </a>
    </div>
  );
};

export default PlayDownloadButtons;
