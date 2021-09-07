import styles from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFluid}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            <img src="images/travela-logo.png" alt="Travela" />
          </div>
          <div className={styles.footerItem}>
            <a href="">About</a>
          </div>
          <div className={styles.footerItem}>
            <a href="">Stays</a>
          </div>
          <div className={styles.footerItem}>
            <a href="">Contact us</a>
          </div>

          {/* <div className={[styles.footerItem, styles.mailSubs].join(' ')}>
            <strong className={styles.subsLabel}>Join our community 🔥</strong>
            <form action="." method="post">
              <div className={styles.mailInput}>
                <input type="email" name="email" id="" />
                <button type="submit">
                  <img src="images/icons/arr-ri.svg" alt="" />
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;