import styles from "../../styles/Common.module.scss";

const PlayDownloadButtons = () => {
  return (
    <div className={styles.downloadButtons}>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="images/button-app.png" alt="" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img src="images/button-play.png" alt="" />
      </a>
    </div>
  );
};

export default PlayDownloadButtons;
