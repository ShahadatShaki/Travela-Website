import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Menu from "../common/components/Menu";
import DownloadSection from "./home/DownloadSection";
import { downloadRefScroll } from "../utils/scrollers";
import { BASE_URL } from "../utils/api";

import Router from "next/router";
// import { urlPaths } from "../utils/constants";

export default function Custom404() {
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

  // console.log(path);
  // const [showPage, setShowPage] = React.useState();
  // useEffect(() => {
  //   const { pathname } = Router;
  //   if (!urlPaths.includes(pathname)) {
  //     Router.push("/downloads");
  //   }
  // });

  // return showPage ? <h1>404 - Page Not Found</h1> : "";
  // console.log(Router.router.asPath);
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Travela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu
        aboutContent={aboutUs}
        stays={stays}
        downloadRefScroll={downloadRefScroll}
        downloadRef={downloadRef}
      />
      <DownloadSection
        fullPage
        downloadRefScroll={downloadRefScroll}
        downloadRef={downloadRef}
      />
    </>
  );
}
