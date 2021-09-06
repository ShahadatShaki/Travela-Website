import styles from "../../styles/Common.module.scss";
import PlayDownloadButtons from "./PlayDownloadIButtons";

const MenuDrawer = ({ open, onClose, data }) => {
  const stays = data?.type === 'stays' ? data.data : null;
  const aboutData = data?.type === 'about' ? data.data : null;

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
            {stays && stays?.map((stay, index) => (
              <div className={styles.dropDownLink} key={index}>
                <img src={stay?.icon} alt="" />
                <div>
                  <h3>{stay?.title}</h3>
                  <p>{stay?.description}</p>
                </div>
              </div>
            ))}
            
            {aboutData && <p>{aboutData}</p>}
            </div>
            <div className={styles.dropDownFooter}>
              <h3>Download the app</h3>
              <PlayDownloadButtons />
            </div>
          </div>
        </div>
      </div>
      <div class={styles.drawerOverlay} id="modal-overlay"></div>
    </>): null;
}

export default MenuDrawer;