import styles from "../../styles/Home.module.scss";

const AvailableSliderSection = () => {
  return (
    <div className={styles.containerPadded}>
      <div className={styles.availableSection}>
        <div className={styles.heading}>
          <div>
            <h2>We are available at</h2>
            <p className={styles.sectionSubTitle}>Let’s go on an adventure</p>
          </div>
          <div className={styles.arrowsAtSectionHead}>
            <button className={styles.arrowBtn}>
              <img src="images/icons/left-arr2.png" />
            </button>
            <button className={[styles.arrowBtn, styles.arrowBtnActive].join(' ')}>
              <img src="images/icons/right-arr2.png" />
            </button>
          </div>
        </div>

        <div className={styles.areaCardsContainer}>
          {[
            styles.areaBadgeDark,
            styles.areaBadgeDark,
            styles.areaBadgeGreen,
          ].map((color) => (
            <div className={styles.areaCard}>
              <div className={styles.cardTopContent}>
                <span className={[styles.areaBadge, color].join(" ")}>
                  20% off
                </span>
                <img src="images/dhaka.png" alt="Dhaka" />
              </div>
              <div className={styles.cardBottomContent}>
                <div>
                  <h3 style={{ marginBottom: 8 }}>Dhaka</h3>
                  <small className={styles.smallTxt}>
                    <img
                      src="images/icons/home.svg"
                      style={{ marginRight: 6 }}
                    />
                    500+ properties
                  </small>
                </div>
                <a href="#" className={styles.buttonCircle}>
                  <img src="images/icons/arr-ri.svg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableSliderSection;
