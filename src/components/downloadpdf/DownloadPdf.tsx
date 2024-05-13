import React from "react";
import Styles from "./DownloadPdf.module.scss";
import Container from "../container/Container";
import { IDownloadPdfProps } from "./DownloadPdf.types";
import Image from "next/image";
import download from "../../../public/download.svg";

const DownloadPdf = ({ link }: IDownloadPdfProps) => {
  return (
    <Container className={Styles["downloadPdf__container"]}>
      <a
        className={Styles["downloadPdf__link"]}
        href="/CV_TomMoose.pdf"
        download="CV_TomMoose.pdf"
      >
        <Image src={download} alt="download icon" height={300} width={300} />
      </a>
    </Container>
  );
};

export default DownloadPdf;
