import React, { useRef, useEffect } from 'react';

const VideoHero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
      video.addEventListener('canplay', () => {
        video.play();
      }, { once: true });
  
      return () => {
        video.removeEventListener('canplay', () => {
          video.play();
        });
      };
    }, []);
  return (
    <div className="hero-section">
    <video ref={videoRef} className="hero-video" autoPlay muted loop={true}>
      <source src={require("./videoHero.mp4")} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* <div className="hero-content">
      <h1>Hero section title</h1>
      <p>Hero section description</p>
    </div> */}
  </div>
  );
};

export default VideoHero;
