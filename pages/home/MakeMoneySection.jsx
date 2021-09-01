import styles from "../../styles/Home.module.scss";

const MakeMoneySection = () => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.sectionHead}>
        <h2>Make money on your unused space! 🎉</h2>
        <span>Find trips that fit a flexible lifestyle</span>
      </div>
      <div className={styles.galleryContainer}>
      <div className="gallery"
        style={{
          display: 'grid',
          position: 'relative',
          // gap: 5,
          gridTemplateColumns: '1fr 1fr 1fr',
        }}>
        <div className={styles.firstCol}>
          <img className={styles.roundedImage} src="images/gallery/lady-half.png" alt="" />
          <div style={{zIndex: 6, position: 'relative'}}>
            <img className={styles.roundedImage} src="images/gallery/bedpic.png" alt="" />
            <img className={[styles.roundedImage, styles.imageTop].join(' ')} src="images/gallery/selfie.png" alt="" />
          </div>
        </div>
        <div className={styles.secondCol}>
          <img className={styles.roundedImage} src="images/gallery/invitinglady.png" style={{zIndex: 3, position: 'relative'}} />
          <img className={styles.roundedImage} src="images/gallery/baby.png" style={{zIndex: 5, position: 'relative'}} />
        </div>
        <div className={styles.thirdCol}>
          <img className={styles.roundedImage} src="images/gallery/lady-tea.png" style={{zIndex: 4, position: 'relative'}} />
          <img className={styles.roundedImage} src="images/gallery/smiling-woman.png" style={{zIndex: 7, position: 'relative'}} />
        </div>
      </div>
    </div>
      </div>
  );
}
 
export default MakeMoneySection;