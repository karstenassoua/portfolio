import React from 'react';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';

/**
 * RichSection - A composite storytelling block that groups heading, text, and optional media
 * Supports flexible media positioning (top, bottom, beside)
 * @param {object} props
 * @param {string} [props.heading] - Optional heading
 * @param {string} props.content - Main text content
 * @param {object} [props.media] - Optional media object (image or video)
 * @param {string} [props.media.type] - Media type: 'image' or 'video'
 * @param {string} [props.media.src] - Media source URL
 * @param {string} [props.media.alt] - Alt text for image media
 * @param {string} [props.media.caption] - Optional caption for media
 * @param {'top' | 'bottom' | 'beside'} [props.mediaPosition] - Position of media (default: 'bottom')
 * @param {object} [props.imageAfter] - Optional image to display after the text content
 * @param {string} [props.imageAfter.src] - Image source URL
 * @param {string} [props.imageAfter.alt] - Alt text for the image
 * @param {string} [props.imageAfter.caption] - Optional caption for the image
 * @returns {JSX.Element}
 */
export default function RichSection({
  heading,
  content,
  media,
  mediaPosition = 'bottom',
  imageAfter,
}) {
  if (!content) {
    console.warn('RichSection: content prop is required');
    return null;
  }

  const sectionClass = mediaPosition === 'beside' ? 'rich-section--beside' : 'rich-section';

  // Render the content section
  const contentSection = (
    <div className="rich-section__content">
      {heading && <h2 className="rich-section__heading">{heading}</h2>}
      <p className="rich-section__text">{content}</p>
      {imageAfter && imageAfter.src && (
        <div className="rich-section__image-after">
          <ImageBlock
            src={imageAfter.src}
            alt={imageAfter.alt || 'Section image'}
            caption={imageAfter.caption}
          />
        </div>
      )}
    </div>
  );

  // Render media if provided
  let mediaSection = null;
  if (media) {
    if (media.type === 'image' && media.src) {
      mediaSection = (
        <div className="rich-section__media">
          <ImageBlock
            src={media.src}
            alt={media.alt || 'Media'}
            caption={media.caption}
          />
        </div>
      );
    } else if (media.type === 'video' && media.src) {
      mediaSection = (
        <div className="rich-section__media">
          <VideoBlock
            src={media.src}
            caption={media.caption}
            autoplay={media.autoplay}
            controls={media.controls !== false}
          />
        </div>
      );
    }
  }

  // Layout based on mediaPosition
  if (mediaPosition === 'top' && mediaSection) {
    return (
      <section className={sectionClass}>
        {mediaSection}
        {contentSection}
      </section>
    );
  }

  if (mediaPosition === 'beside' && mediaSection) {
    return (
      <section className={sectionClass}>
        {contentSection}
        {mediaSection}
      </section>
    );
  }

  // Default: bottom or no media
  return (
    <section className={sectionClass}>
      {contentSection}
      {mediaSection}
    </section>
  );
}
