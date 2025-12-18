import React from 'react';
import '@/styles/blocks.css';

/**
 * PageContainer - Wraps all blocks with shared layout primitives
 * Handles:
 * - Centralized width constraints
 * - Grid and spacing rules
 * - Typography scale
 * - Responsive behavior
 * - Accessibility guarantees
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content blocks to render
 * @param {string} [props.className] - Additional CSS classes
 * @returns {JSX.Element}
 */
export default function PageContainer({ children, className = '' }) {
  return (
    <div className={`blocks-container ${className}`}>
      {children}
    </div>
  );
}
