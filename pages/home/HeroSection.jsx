import DownloadButton from '../../common/components/DownloadButton';
import styles from '../../styles/Home.module.scss';

const HeroSection = ({bookingCount, usersCount, downloadRef, downloadRefScroll}) => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.heroSection}>
        <div className={styles.banner}>
          <div className={styles.textContent}>
            <h1>Accommodation sharing platform</h1>
            <h3>Find and book a great experience.</h3>
            {/* <a href="" className={[styles.button, styles.downloadApps].join(' ')}>
              Download Apps
            </a> */}
            <DownloadButton
              downloadRef={downloadRef}
              downloadRefScroll={downloadRefScroll}
            />
          </div>
          <div className={styles.megaSearchBox}>
            <div>
              <img src="images/icons/user.svg" alt="Registered User" />
              <h1 className={styles.count}>{usersCount}+</h1>
              <p>Registered users</p>
            </div>
            <div>
              <img src="images/icons/booking.svg" alt="Booking" />
              <h1 className={styles.count}>{bookingCount}+</h1>
              <p>Bookings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;