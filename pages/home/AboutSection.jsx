import styles from "../../styles/Home.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.containerFluid}>
        <div style={{ margin: "112px auto", maxWidth: 455 }}>
          <h2>Contact Us</h2>

          <div className={styles.textContent}>
            <h2 className={styles.contactSub}>Dhaka Office</h2>
          <p>
            <img src="images/icons/phone.png" alt="" />
            +880-13-0508-5117
          </p>
          <p>
            <img src="images/icons/mail.png" alt="" />
            travelainfobd@gmail.com
          </p>
          <p>
            <img src="images/icons/location.png" alt="" />K 36, Kazi Nazrul
            Islam Road, Lalmatia, Dhaka 1000, Bangladesh{" "}
          </p>
          </div>
          <img src="images/socialicons.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
