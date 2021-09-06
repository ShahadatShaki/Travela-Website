import DownloadButton from "./DownloadButton";
import MenuDrawer from './MenuDrawer';
import styles from "../../styles/Common.module.scss";
import { useState } from "react";

const Menu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOnClose = () => setDrawerOpen(prevState => !prevState);

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
                <a href="">
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>Home</span>
                </a>
              </div>
              <div className={[styles.menuLink, styles.dropDown].join(" ")}
              onClick={() => setDrawerOpen(true)}>
                <a href="">
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>Stays</span>
                </a>

                <div className={styles.dropDownCard}>
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
              <div className={[styles.menuLink, styles.dropDown].join(" ")}>
                <a href="">
                  <img className={styles.mobileOnly} src="images/icons/home.svg" />
                  <span>About Us</span>
                </a>
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
                        Founded in 2021, Travela is among the fastest growing
                        startups in Bangladesh which connects Space owners with
                        Users looking to find & and book spaces for their needs.
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
            </div>
          </div>
          <div className={styles.rightPart}>
            <DownloadButton styleObjects={{ margin: 0 }} />
          </div>
        </div>
      </div>
      <MenuDrawer open={drawerOpen} onClose={handleOnClose} />
    </>
  );
};

export default Menu;
