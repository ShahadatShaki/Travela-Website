import styles from "../../styles/Home.module.scss";

const DownloadSection = () => {
  return (
    <div className={ styles.downloadSection}>
      <div className={styles.containerFluid}>
        <div
          className={styles.downloadWrapper}
        >
          <div style={{ flexGrow: 1 }}>
            <h2>Download the app</h2>
            <span>
              Download now & avail all of our services through the app
            </span>

            <div className={styles.downloadButtons}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="images/button-app.png" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="images/button-play.png" alt="" />
              </a>
            </div>
          </div>
          <div style={{alignSelf: 'flex-end'}}>
            <img src="images/mobiles.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
