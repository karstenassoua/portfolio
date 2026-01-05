import React from 'react';

/**
 * TextBlock - Renders simple prose content with optional heading
 * @param {object} props
 * @param {string} props.content - The main text content
 * @param {string} [props.heading] - Optional heading above the text
 * @returns {JSX.Element}
 */
export default function TextBlock({ content, heading }) {
  if (!content) {
    console.warn('TextBlock: content prop is required');
    return null;
  }

  return (
    <div className="text-block block">
      {heading && <h3 className="text-block__heading">{heading}</h3>}
      <p className="text-block__content">{content}</p>
    </div>
  );
}
