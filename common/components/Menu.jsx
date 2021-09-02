import DownloadButton from "./DownloadButton";
import styles from "../../styles/Common.module.scss";

const Menu = () => {
  return (
    <div className={styles.containerPadded}>
      <div
        className={styles.menu}
      >
        <div
          className={styles.leftPart}
        >
          <div className={styles.logo}>
            <img src="images/travela-logo.png" alt="Travela" height={34} />
          </div>
          <div className={styles.menuLink} style={{ paddingLeft: "2rem" }}>
            <a href="">Home</a>
          </div>
          <div className={[styles.menuLink, styles.dropDown].join(' ')}>
            <a href="">Stays</a>
          </div>
          <div className={[styles.menuLink, styles.dropDown].join(' ')}>
            <a href="">About Us</a>
          </div>
          <div className={styles.menuLink}>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className={styles.rightPart}>
          <DownloadButton styleObjects={{margin: 0}} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
