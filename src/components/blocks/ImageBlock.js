import React from 'react';
import Image from 'next/image';

/**
 * ImageBlock - Renders a single image with optional caption and alt text
 * @param {object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} [props.caption] - Optional caption below the image
 * @returns {JSX.Element}
 */
export default function ImageBlock({ src, alt, caption }) {
  if (!src || !alt) {
    console.warn('ImageBlock: src and alt props are required');
    return null;
  }

  return (
    <div className="image-block block">
      <div className="image-block__wrapper">
        <Image
          src={src}
          alt={alt}
          fill
          className="image-block__img"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 1200px"
          priority={false}
        />
      </div>
      {caption && <p className="image-block__caption">{caption}</p>}
    </div>
  );
}
