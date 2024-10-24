import React from "react";
import Programs from "../components/Programs";
import PhotoGallery from "../components/PhotoGallery";
import Differential from "../components/Differential";
import ContentInfo from "../components/ContentInfo";

const Services = () => {
  return (
    <>
      {" "}
      <div
        style={{
          height: "100px",
          backgroundColor: "#000000",
        }}
      ></div>
      <Programs />
      <PhotoGallery />
      <Differential />
      <ContentInfo />
    </>
  );
};

export default Services;
