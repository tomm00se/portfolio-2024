import React from "react";
import Styles from "./DownloadPdf.module.scss";
import Container from "../container/Container";

import Image from "next/image";
import download from "../../../public/download.svg";

const DownloadPdf = () => {
  return (
    <Container className={Styles["downloadPdf__container"]}>
      <a
        className={Styles["downloadPdf__link"]}
        href="/CV_TomMoose.pdf"
        download="CV_TomMoose.pdf"
      >
        <Image src={download} alt="download icon" height={400} width={400} />
      </a>
    </Container>
  );
};

export default DownloadPdf;
