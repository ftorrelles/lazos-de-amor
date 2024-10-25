import React from "react";
import ComicSection from "../components/ComicSection";
import Testimony from "../components/Testimony";
import PhotoGallery from "../components/PhotoGallery";
import ContentInfo from "../components/ContentInfo";

const AboutUs = () => {
  return (
    <>
      {" "}
      <div
        style={{
          height: "100px",
          backgroundColor: "#000000",
        }}
      ></div>
      <ComicSection />
      {/* <Testimony /> */}
      <PhotoGallery />
      <ContentInfo />
    </>
  );
};

export default AboutUs;
