import React from "react";

const BackgroundVideo = ({ videoSource, children }) => {
  return (
    <>
      <div className="video-container">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          id="video-id"
          className="video"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {children}
      </div>
      {/* <span id="video-bottom"></span> */}
    </>
  );
};

export default BackgroundVideo;
