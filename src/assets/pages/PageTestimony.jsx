import React from "react";
import Testimony from "../components/Testimony";
import PhotoGallery from "../components/PhotoGallery";

import ContentInfo from "../components/ContentInfo";
import ComicSection from "../components/ComicSection";

const PageTestimony = () => {
  return (
    <>
      {" "}
      <div
        style={{
          height: "100px",
          backgroundColor: "#000000",
        }}
      ></div>
      {/* <Testimony /> */}
      <ComicSection />
      <PhotoGallery />
      <ContentInfo />
    </>
  );
};

export default PageTestimony;
