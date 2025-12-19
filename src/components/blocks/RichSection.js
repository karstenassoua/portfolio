import React from 'react';
import ReactMarkdown from 'react-markdown';
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

  // Determine section class based on mediaPosition (only applies to main media field)
  let sectionClass = 'rich-section';
  if (mediaPosition === 'beside' && media) {
    sectionClass = 'rich-section--beside';
  }

  // Render the text content (heading + paragraph)
  const textContent = (
    <div className="rich-section__text-wrapper">
      {heading && <h2 className="rich-section__heading">{heading}</h2>}
      <div className="rich-section__text">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );

  // Render imageAfter if it should be placed
  let imageAfterSection = null;
  if (imageAfter && imageAfter.src) {
    imageAfterSection = (
      <div className="rich-section__image-after">
        <ImageBlock
          src={imageAfter.src}
          alt={imageAfter.alt || 'Section image'}
          caption={imageAfter.caption}
        />
      </div>
    );
  }

  // Determine layout for content based on mediaPosition
  let contentSection;

  if (mediaPosition === 'beside' && imageAfterSection) {
    // Side-by-side layout for text and imageAfter
    contentSection = (
      <div className="rich-section__content rich-section__content--beside">
        {textContent}
        {imageAfterSection}
      </div>
    );
  } else if (mediaPosition === 'top' && imageAfterSection) {
    // ImageAfter above text
    contentSection = (
      <div className="rich-section__content">
        {imageAfterSection}
        {textContent}
      </div>
    );
  } else {
    // Default: imageAfter below text
    contentSection = (
      <div className="rich-section__content">
        {textContent}
        {imageAfterSection}
      </div>
    );
  }

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
