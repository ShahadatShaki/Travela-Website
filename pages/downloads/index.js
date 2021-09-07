import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import Menu from "../../common/components/Menu";
import DownloadSection from "../home/DownloadSection";
import { downloadRefScroll } from "../../utils/scrollers";
import { BASE_URL } from "../../utils/api";

const Downloads = () => {
  const downloadRef = useRef(null);
  const [aboutUs, setAboutUs] = useState("");
  const [stays, setStays] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setAboutUs(data.about_us);
        setStays(data.stays);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Travela</title>
        <meta name="description" content="Travela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu
        aboutContent={aboutUs}
        stays={stays}
        downloadRefScroll={downloadRefScroll}
        downloadRef={downloadRef}
      />
      <DownloadSection fullPage downloadRefScroll={downloadRefScroll} downloadRef={downloadRef} />
    </>
  );
};

export default Downloads;
