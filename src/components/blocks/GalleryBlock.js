import React from 'react';
import Image from 'next/image';

/**
 * GalleryBlock - Renders an ordered set of images in a responsive grid
 * @param {object} props
 * @param {Array} props.images - Array of image objects with src, alt, and optional caption
 * @returns {JSX.Element}
 */
export default function GalleryBlock({ images }) {
  if (!images || !Array.isArray(images) || images.length === 0) {
    console.warn('GalleryBlock: images prop must be a non-empty array');
    return null;
  }

  // Validate each image has required props
  const validImages = images.filter((img) => {
    if (!img.src || !img.alt) {
      console.warn('GalleryBlock: each image must have src and alt properties');
      return false;
    }
    return true;
  });

  if (validImages.length === 0) {
    return null;
  }

  return (
    <div className="gallery-block block">
      <div className="gallery-block__grid">
        {validImages.map((image, index) => (
          <div key={index} className="gallery-block__item">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="gallery-block__img"
              sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 23vw, 280px"
              priority={false}
            />
            {image.caption && (
              <p className="gallery-block__caption">{image.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
