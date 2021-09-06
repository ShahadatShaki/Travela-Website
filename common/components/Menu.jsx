import DownloadButton from "./DownloadButton";
import MenuDrawer from './MenuDrawer';
import styles from "../../styles/Common.module.scss";
import { useState } from "react";

const Menu = ({aboutContent, stays}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerData, setDrawerData] = useState(null);

  const handleDrawerOnClose = () => {
    setMenuOpen(false);
    setDrawerOpen(prevState => !prevState);
  }

  const handleDrawerOpen = (data) => {
    setDrawerData(data);
    setMenuOpen(false);
    setDrawerOpen(true);
  }

  const mobileMenuToggle = () => setMenuOpen(prevState => !prevState);

  return (
    <>
      <div className={styles.containerPadded}>
        <div className={styles.menu}>
          <div className={styles.leftPart}>
            <div className={styles.logo}>
              <img src="images/travela-logo.png" alt="Travela" height={34} />
            </div>
            <div className={`${styles.mobileRightOptions}`} onClick={() => mobileMenuToggle()}>
              <img src="images/icons/Lineburger.svg" alt="" />
            </div>
            <div className={`${styles.menuLinks} ${!menuOpen ? styles.menuLinksHidden: 'Hidden'}`}>
              <div className={styles.menuLink}>
                <a href="#">
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>Home</span>
                </a>
              </div>
              <div
                className={[styles.menuLink, styles.dropDown].join(" ")}
                onClick={
                  () => handleDrawerOpen({ type: 'stays', data: stays })
                }
              >
                <span>
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>Stays</span>
                </span>

                <div className={styles.dropDownCard}>
                  <div className={styles.dropDownLinksContainer}>
                    {stays?.map((stay, index) => (
                      <div className={styles.dropDownLink} key={index}>
                        <img src={stay?.icon} alt="" />
                        <div>
                          <h3>{stay?.title}</h3>
                          <p>{stay?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={styles.dropDownFooter}>
                    <h3>Download the app</h3>
                    <div className={styles.downloadButtons}>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="images/button-app.png" alt="" />
                      </a>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="images/button-play.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={[styles.menuLink, styles.dropDown].join(" ")}
                onClick={
                  () => handleDrawerOpen({ type: 'about', data: aboutContent })
                }>
                <span>
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>About Us</span>
                </span>
                <div className={styles.dropDownCard} style={{ width: 481 }}>
                  <div
                    className={styles.dropDownLinksContainer}
                    style={{ display: "block" }}
                  >
                    <div>
                      <h3 style={{ fontSize: 24, marginBottom: 15 }}>
                        About Us
                      </h3>
                      <p>
                        {aboutContent ? aboutContent : ''}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.menuLink}>
                <a href="">
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>Contact Us</span>
                </a>
              </div>
              <div className={styles.mobileDownloadBtn}>
                <DownloadButton styleObjects={{ margin: 0, display: 'block', width: '100%', textAlign: 'center' }} />
              </div>
            </div>
          </div>
          <div className={styles.rightPart}>
            <DownloadButton styleObjects={{ margin: 0 }} />
          </div>
        </div>
      </div>
      <MenuDrawer
        open={drawerOpen}
        onClose={handleDrawerOnClose}
        data={drawerData} />
    </>
  );
};

export default Menu;
