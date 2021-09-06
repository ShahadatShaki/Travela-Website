import styles from "../../styles/Common.module.scss";

const MenuDrawer = ({ open, onClose, stays }) => {
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