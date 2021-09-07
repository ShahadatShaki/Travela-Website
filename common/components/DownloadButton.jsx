import styles from "../../styles/Common.module.scss";

const DownloadButton = ({downloadRef, downloadRefScroll, styleObjects}) => {
  return (
    <span style={styleObjects} className={[styles.button, styles.downloadApps].join(" ")}
      onClick={() => downloadRefScroll(downloadRef)}
    >
      Download Apps
    </span>
  );
};

export default DownloadButton;
