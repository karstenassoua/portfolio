'use client';

import React, { useState } from 'react';

/**
 * VideoBlock - Renders embedded or hosted video with optional caption
 * @param {object} props
 * @param {string} props.src - Video source URL
 * @param {string} [props.caption] - Optional caption below the video
 * @param {boolean} [props.autoplay] - Whether to autoplay (default: false)
 * @param {boolean} [props.controls] - Whether to show controls (default: true)
 * @returns {JSX.Element}
 */
export default function VideoBlock({ src, caption, autoplay = false, controls = true }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) {
    console.warn('VideoBlock: src prop is required');
    return null;
  }

  const handleLoadStart = () => {
    setIsLoaded(true);
  };

  return (
    <div className="video-block block">
      <div className="video-block__wrapper">
        {!isLoaded && <div className="video-block__loading" aria-hidden="true"></div>}
        <video
          src={src}
          className="video-block__video"
          data-loaded={isLoaded}
          autoPlay={autoplay}
          muted={autoplay}
          loop={autoplay}
          controls={controls}
          onLoadStart={handleLoadStart}
          preload="metadata"
          playsInline
        />
      </div>
      {caption && <p className="video-block__caption">{caption}</p>}
    </div>
  );
}
