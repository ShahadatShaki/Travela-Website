import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import Menu from "../common/components/Menu";
import { BASE_URL } from "../utils/api";
import Footer from "./home/Footer";
import { downloadRefScroll } from "../utils/scrollers";
import styles from "../styles/Common.module.scss";
import CommonStringParser from '../common/components/CommonStringParser'

export default function AboutUs() {
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
    <div>
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
  {
  }
      <div className={styles.containerFluid}>
        <div className = {styles.base_wrapper}>
           <CommonStringParser dangerHtml={aboutUs} />
        </div>
       
      </div>

      <Footer />
    </div>
  );
}
