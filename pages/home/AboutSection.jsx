import styles from "../../styles/Home.module.scss";

const AboutSection = ({contactContent}) => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.containerFluid}>
        <div style={{ margin: "112px auto", maxWidth: 455 }}>
          <h2>Contact Us</h2>

          <div className={styles.textContent}>
            <h2 className={styles.contactSub}>{contactContent?.office_name}</h2>
          <p>
            <img src="images/icons/phone.png" alt="" />
            {contactContent?.phone}
          </p>
          <p>
            <img src="images/icons/mail.png" alt="" />
            {contactContent?.email}
          </p>
          <p>
              <img src="images/icons/location.png" alt="" />
              {contactContent?.address}
          </p>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <a href="https://www.facebook.com/travelaxyz/" target="_blank"> 
              <img src="images/icons/Facebook.svg" alt="Travela Facebook Page" />
            </a>
            <a href="" target="_blank">
              <img src="images/icons/Twitter.svg" alt="Travela on Twitter" />
            </a>
            <a href="" target="_blank">
              <img src="images/icons/Instagram.svg" alt="Travela on Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
