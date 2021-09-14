import React, { useEffect } from "react";
import Router from "next/router";
import { urlPaths } from "../utils/constants";

export default function Custom404() {
  const [showPage, setShowPage] = React.useState();
  useEffect(() => {
    const { pathname } = Router;
    if (!urlPaths.includes(pathname)) {
      Router.push("/downloads");
    }
  });

  return showPage ? <h1>404 - Page Not Found</h1> : ''
}
