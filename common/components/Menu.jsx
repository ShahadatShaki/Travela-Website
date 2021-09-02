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

            <div className={styles.dropDownCard}
            >
              <div className={styles.dropDownLinksContainer}>
                <div className={styles.dropDownLink}>
                  <img src="home1.png" alt="" />
                  <div>
                    <h3>Apartment</h3>
                    <p>On Demand Apartment at anytime</p>
                  </div>
                </div>
                <div className={styles.dropDownLink}>
                  <img src="home1.png" alt="" />
                  <div>
                    <h3>Apartment</h3>
                    <p>On Demand Apartment at anytime</p>
                  </div>
                </div>
                <div className={styles.dropDownLink}>
                  <img src="home1.png" alt="" />
                  <div>
                    <h3>Apartment</h3>
                    <p>On Demand Apartment at anytime</p>
                  </div>
                </div>
                <div className={styles.dropDownLink}>
                  <img src="home1.png" alt="" />
                  <div>
                    <h3>Apartment</h3>
                    <p>On Demand Apartment at anytime</p>
                  </div>
                </div>
              </div>
              <div className={styles.dropDownFooter}>
                <h3>Download the app</h3>
                <div className={styles.downloadButtons}>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="images/button-app.png" alt="" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src="images/button-play.png" alt="" />
              </a>
            </div>
              </div>
            </div>
          </div>
          <div className={[styles.menuLink, styles.dropDown].join(' ')}>
            <a href="">About Us</a>
            <div className={styles.dropDownCard} style={{width: 481}}>
              <div className={styles.dropDownLinksContainer} style={{display: 'block'}}>
                <div>
                  <h3 style={{fontSize: 24, marginBottom: 15}}>About Us</h3>
                  <p>
                    Founded in 2021, Travela is among the fastest growing startups in Bangladesh which connects Space owners with Users looking to find & and book spaces for their needs.
                  </p>
                </div>
              </div>
            </div>
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
