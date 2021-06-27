import React, { useState, useEffect } from 'react';
import LazyImage from '../lazy-load';

const videoLink = 'FjlB6H879t8';

export default () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="highlight-area" id="highlight-area">
      <div className="thumbnail-container">
        <LazyImage
          src={`https://img.youtube.com/vi/${videoLink}/maxresdefault.jpg`}
          tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wEEEAAcABwAHAAcAB0AHAAfACIAIgAfACsALgApAC4AKwBAADoANQA1ADoAQABgAEUASgBFAEoARQBgAJIAWwBrAFsAWwBrAFsAkgCBAJ0AfwB3AH8AnQCBAOgAtgCiAKIAtgDoAQwA4QDVAOEBDAFFASMBIwFFAZkBhQGZAhcCFwLPEQAcABwAHAAcAB0AHAAfACIAIgAfACsALgApAC4AKwBAADoANQA1ADoAQABgAEUASgBFAEoARQBgAJIAWwBrAFsAWwBrAFsAkgCBAJ0AfwB3AH8AnQCBAOgAtgCiAKIAtgDoAQwA4QDVAOEBDAFFASMBIwFFAZkBhQGZAhcCFwLP/8IAEQgAEQAaAwEiAAIRAQMRAf/EABgAAAMBAQAAAAAAAAAAAAAAAAECAwQF/9oACAEBAAAAAF0lOezRhvgP/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAID/9oACAECEAAAAJaP/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oACAEDEAAAADN//8QAJRAAAgEDAgUFAAAAAAAAAAAAAQIAAxEhExQEECIyYTNCUXFz/9oACAEBAAE/AA66he5tk2icSubE2UTdUjjM3NGU6hCMLgKfmFtTqVCFUZMDgrbyCIKbeY3u+4nZXlD1V/Tl/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBIx/9oACAECAQE/AMJmCPa//8QAFxEBAAMAAAAAAAAAAAAAAAAAEAEREv/aAAgBAwEBPwDVEn//2Q=="
        />
        <i
          className="fa fa-play-circle center"
          onClick={() => setPlay(!play)}
        ></i>
        <div className="impression-text">IMPRESSIONS OF REACT INDIA 2019</div>
      </div>
      <Video show={play} videoLink={videoLink} height={550}/>
    </section>
  );
};

const Video = ({ show, videoLink, onClose, height = 480, width = 100 }) => {
  const [videoWidth, setVideoWidth] = useState(width);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      const onResize = () => {
        setVideoWidth(window.innerWidth);
      };
      window.addEventListener('resize', onResize);
      onResize();
      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className="video-container">
      <div className="video-iframe" />
      <iframe
        title="ReactIndia"
        width={videoWidth}
        height={height}
        src={`https://www.youtube.com/embed/${videoLink}?autoplay=1&cc_load_policy=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button className="video-close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};
