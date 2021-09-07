import PlayDownloadButtons from "../../common/components/PlayDownloadIButtons";
import styles from "../../styles/Home.module.scss";

const DownloadSection = ({downloadRef}) => {
  return (
    <div className={ styles.downloadSection} ref={downloadRef}>
      <div className={styles.containerFluid}>
        <div
          className={styles.downloadWrapper}
        >
          <div>
            <h2>Download the app</h2>
            <span>
              Download now & avail all of our services through the app
            </span>

            <PlayDownloadButtons />
          </div>
          <div className={ styles.mobileMockup}>
            <img src="images/mobiles.svg" alt="Travela App" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
