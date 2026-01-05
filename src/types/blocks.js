/**
 * @typedef {Object} TextBlock
 * @property {'text'} type
 * @property {string} content - Main prose content
 * @property {string} [heading] - Optional heading for this block
 */

/**
 * @typedef {Object} ImageBlockData
 * @property {'image'} type
 * @property {string} src - Image source URL
 * @property {string} alt - Alt text for accessibility
 * @property {string} [caption] - Optional image caption
 */

/**
 * @typedef {Object} VideoBlockData
 * @property {'video'} type
 * @property {string} src - Video source URL
 * @property {string} [caption] - Optional video caption
 * @property {boolean} [autoplay] - Whether to autoplay (default: false)
 * @property {boolean} [controls] - Whether to show controls (default: true)
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} src - Image source URL
 * @property {string} alt - Alt text for accessibility
 * @property {string} [caption] - Optional image caption
 */

/**
 * @typedef {Object} GalleryBlockData
 * @property {'gallery'} type
 * @property {GalleryImage[]} images - Array of images to display
 */

/**
 * @typedef {Object} SpecsItem
 * @property {string} key - The key/label for this spec
 * @property {string} value - The value/content for this spec
 */

/**
 * @typedef {Object} SpecsBlockData
 * @property {'specs'} type
 * @property {SpecsItem[]} items - Array of key-value pairs
 */

/**
 * @typedef {Object} ImageAfterData
 * @property {string} src - Image source URL
 * @property {string} alt - Alt text for accessibility
 * @property {string} [caption] - Optional caption for the image
 */

/**
 * @typedef {Object} RichSectionData
 * @property {'richSection'} type
 * @property {string} [heading] - Optional heading
 * @property {string} content - Main text content (supports Markdown: **bold**, *italic*, \n for line breaks, [link](url))
 * @property {ImageBlockData | VideoBlockData} [media] - Optional media (image or video)
 * @property {'top' | 'bottom' | 'beside'} [mediaPosition] - Position of media (default: 'bottom')
 * @property {ImageAfterData} [imageAfter] - Optional image to display after text content
 */

/**
 * Union type for all content blocks
 * @typedef {TextBlock | ImageBlockData | VideoBlockData | GalleryBlockData | SpecsBlockData | RichSectionData} ContentBlock
 */

/**
 * @typedef {Object} ProjectPageData
 * @property {string} projectName - Project name/title
 * @property {string} [description] - Short project description
 * @property {string} [heroImg] - Hero image URL
 * @property {string} [role] - User's role on the project
 * @property {string} [timeline] - Project timeline
 * @property {string[]} [team] - Team members involved
 * @property {string[]} [skills] - Skills used
 * @property {string[]} [tech] - Technologies used
 * @property {ContentBlock[]} blocks - Array of content blocks
 */

export {};
