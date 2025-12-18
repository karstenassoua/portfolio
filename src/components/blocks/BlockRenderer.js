import React from 'react';
import TextBlock from './TextBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';
import GalleryBlock from './GalleryBlock';
import SpecsBlock from './SpecsBlock';
import RichSection from './RichSection';

/**
 * BlockRenderer - Renders blocks based on their type
 * Supports dynamic rendering of all block types
 *
 * @param {object} props
 * @param {Array} props.blocks - Array of block objects to render
 * @returns {JSX.Element}
 */
export default function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) {
    console.warn('BlockRenderer: blocks prop must be an array');
    return null;
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (!block || !block.type) {
          console.warn(`BlockRenderer: block at index ${index} missing type property`);
          return null;
        }

        switch (block.type) {
          case 'text':
            return (
              <TextBlock
                key={index}
                content={block.content}
                heading={block.heading}
              />
            );

          case 'image':
            return (
              <ImageBlock
                key={index}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );

          case 'video':
            return (
              <VideoBlock
                key={index}
                src={block.src}
                caption={block.caption}
                autoplay={block.autoplay}
                controls={block.controls}
              />
            );

          case 'gallery':
            return (
              <GalleryBlock
                key={index}
                images={block.images}
              />
            );

          case 'specs':
            return (
              <SpecsBlock
                key={index}
                items={block.items}
              />
            );

          case 'richSection':
            return (
              <RichSection
                key={index}
                heading={block.heading}
                content={block.content}
                media={block.media}
                mediaPosition={block.mediaPosition}
              />
            );

          default:
            console.warn(`BlockRenderer: unknown block type "${block.type}" at index ${index}`);
            return null;
        }
      })}
    </>
  );
}
