import styles from "../../styles/Home.module.scss";

const MakeMoneySection = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.sectionHead}>
        <h2>Make money on your unused space! 🎉</h2>
        <span>Find trips that fit a flexible lifestyle</span>
      </div>
      <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        <div className={styles.firstCol}>
          <img className={styles.roundedImage} src="images/gallery/lady-half.png" alt="Travela rooms" />
          <div>
            <img className={styles.roundedImage} src="images/gallery/bedpic.png" alt="Travela rooms" />
            <img className={[styles.roundedImage, styles.imageTop].join(' ')} src="images/gallery/selfie.png" alt="Travela rooms" />
          </div>
        </div>
        <div className={styles.secondCol}>
            <img className={styles.roundedImage}
              src="images/gallery/invitinglady.png" style={{ zIndex: 3, position: 'relative' }}
              alt="Travela rooms"
            />
            <img className={styles.roundedImage} src="images/gallery/baby.png"
              style={{ zIndex: 5, position: 'relative' }}
              alt="Travela rooms"
            />
        </div>
        <div className={styles.thirdCol}>
            <img className={styles.roundedImage}
              src="images/gallery/lady-tea.png" style={{ zIndex: 4, position: 'relative' }}
              alt="Travela rooms"
            />
            <img className={styles.roundedImage}
              src="images/gallery/smiling-woman.png"
              style={{ zIndex: 7, position: 'relative' }}
              alt="Travela rooms"
            />
        </div>
      </div>
    </div>
      </div>
  );
}
 
export default MakeMoneySection;