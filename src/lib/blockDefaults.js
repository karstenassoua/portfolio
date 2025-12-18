/**
 * Centralized defaults for block spacing, sizing, and typography
 * These values are used consistently across all blocks and containers
 */

export const BLOCK_DEFAULTS = {
  // Container width constraints
  width: {
    mobile: '90%', // Mobile: 90% of viewport with padding
    maxWidth: '1200px', // Desktop: max 1200px
    containerPadding: {
      mobile: '1.5rem', // 24px
      tablet: '2rem', // 32px
      desktop: '2rem', // 32px
    },
  },

  // Vertical spacing (gap between blocks)
  spacing: {
    blockGap: '3rem', // 48px between major blocks
    sectionGap: '1rem', // 16px within sections
    lineHeight: 1.6, // For text blocks
  },

  // Typography scale
  typography: {
    heading: {
      h1: {
        fontSize: '2.5rem', // 40px
        lineHeight: 1.2,
        fontWeight: 700,
        marginBottom: '0.5rem',
      },
      h2: {
        fontSize: '2rem', // 32px
        lineHeight: 1.2,
        fontWeight: 700,
        marginBottom: '0.5rem',
      },
      h3: {
        fontSize: '1.5rem', // 24px
        lineHeight: 1.2,
        fontWeight: 600,
        marginBottom: '0.5rem',
      },
      h4: {
        fontSize: '1.125rem', // 18px
        lineHeight: 1.2,
        fontWeight: 600,
        marginBottom: '0.25rem',
      },
    },
    body: {
      large: {
        fontSize: '1.125rem', // 18px
        lineHeight: 1.6,
      },
      regular: {
        fontSize: '1rem', // 16px
        lineHeight: 1.6,
      },
      small: {
        fontSize: '0.875rem', // 14px
        lineHeight: 1.5,
      },
    },
    caption: {
      fontSize: '0.875rem', // 14px
      lineHeight: 1.5,
      color: 'rgba(50, 64, 79, 0.584)', // Muted gray
    },
  },

  // Aspect ratios
  aspectRatio: {
    video: '16/9',
    image: '4/3', // Default, but can be flexible per image
    gallery: '1/1', // Square for gallery items
  },

  // Responsive breakpoints (matching Tailwind)
  breakpoints: {
    mobile: '640px', // sm
    tablet: '768px', // md
    desktop: '1024px', // lg
    widescreen: '1280px', // xl
  },

  // Image/media constraints
  media: {
    maxWidth: '100%',
    borderRadius: '0.5rem', // 8px
    transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Gallery grid
  gallery: {
    gapMobile: '1rem', // 16px
    gapDesktop: '1.5rem', // 24px
    columnsMobile: 2,
    columnsTablet: 3,
    columnsDesktop: 4,
  },

  // Colors (extending Tailwind theme)
  colors: {
    text: {
      primary: 'var(--foreground)',
      secondary: 'rgba(50, 64, 79, 0.584)',
      muted: 'rgba(50, 64, 79, 0.4)',
    },
    background: {
      default: 'var(--background)',
      accent: '#fafcfd', // Light background for sections
    },
    border: {
      default: 'var(--color-neutral-800)',
      light: 'rgba(0, 0, 0, 0.1)',
    },
  },
};

/**
 * Utility function to get responsive spacing
 * @param {string} key - The spacing key (e.g., 'blockGap', 'sectionGap')
 * @returns {string} The spacing value
 */
export function getSpacing(key) {
  return BLOCK_DEFAULTS.spacing[key] || '1rem';
}

/**
 * Utility function to get typography style
 * @param {string} type - The typography type (e.g., 'h1', 'body-regular')
 * @returns {object} The typography styles
 */
export function getTypography(type) {
  const [category, variant] = type.split('-');
  
  if (BLOCK_DEFAULTS.typography[category]) {
    if (variant && BLOCK_DEFAULTS.typography[category][variant]) {
      return BLOCK_DEFAULTS.typography[category][variant];
    }
    return BLOCK_DEFAULTS.typography[category][Object.keys(BLOCK_DEFAULTS.typography[category])[0]];
  }
  
  return BLOCK_DEFAULTS.typography.body.regular;
}

export default BLOCK_DEFAULTS;
