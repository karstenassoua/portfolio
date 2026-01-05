import React from 'react';

/**
 * SpecsBlock - Renders structured key-value data in a flexible responsive grid
 * @param {object} props
 * @param {Array} props.items - Array of spec items with key and value properties
 * @returns {JSX.Element}
 */
export default function SpecsBlock({ items }) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    console.warn('SpecsBlock: items prop must be a non-empty array');
    return null;
  }

  // Validate each item has required props
  const validItems = items.filter((item) => {
    if (!item.key || !item.value) {
      console.warn('SpecsBlock: each item must have key and value properties');
      return false;
    }
    return true;
  });

  if (validItems.length === 0) {
    return null;
  }

  return (
    <dl className="specs-block block">
      <div className="specs-block__grid">
        {validItems.map((item, index) => (
          <div key={index} className="specs-block__item">
            <dt className="specs-block__key">{item.key}</dt>
            <dd className="specs-block__value">{item.value}</dd>
          </div>
        ))}
      </div>
    </dl>
  );
}
