import styles from "../../styles/Common.module.scss";

const MenuDrawer = ({ open, onClose }) => {
  return open ? (<>
    <div className="drawer">
        <div className={styles.mobileMenuCardBottomWrapper}>
        <img
          onClick={onClose}
          src="images/icons/close.svg" style={{
            margin: '0 auto',
            width: '150',
            display: 'flex',
            justifyContent: 'center',
            cursor: 'pointer',
            marginBottom: '1rem'
          }} />
          <div className={styles.mobileMenuCardBottom}>
            <div className={styles.menuLinksContainer}>
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
      </div>
      <div class={styles.drawerOverlay} id="modal-overlay"></div>
    </>): null;
}
 
export default MenuDrawer;