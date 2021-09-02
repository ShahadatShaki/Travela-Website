import styles from "../../styles/Common.module.scss";

const DownloadButton = ({styleObjects}) => {
  return (
    <a href="" style={styleObjects} className={[styles.button, styles.downloadApps].join(" ")}>
      Download Apps
    </a>
  );
};

export default DownloadButton;
