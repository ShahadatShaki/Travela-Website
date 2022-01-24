import styles from "../../styles/Home.module.scss";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.containerFluid}>
        <div className={styles.footerGrid}>
          <div className={styles.footerLogo}>
            <img src="images/travela-logo.png" alt="Travela" />
          </div>
          <div className={styles.footerItem}>
              <Link href="/about">
                <a>About Us</a>
              </Link>
          </div>

          <div className={styles.footerItem}>
              <Link href="/terms-conditions">
                <a>Terms & Conditions</a>
              </Link>
          </div>

          <div className={styles.footerItem}>
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
          </div>

          <div className={styles.footerItem}>
              <Link href="/refund-policy">
                <a>Refund Policy</a>
              </Link>
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