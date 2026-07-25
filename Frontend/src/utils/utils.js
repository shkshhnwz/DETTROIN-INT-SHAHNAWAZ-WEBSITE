const CLOUD_NAME = "dc9xarlgi"; 

/**
 * Generates an optimized Cloudinary URL
 * @param {string} publicId - The folder/filename in Cloudinary
 * @param {number} width - Desired width for resizing
 */
export const getOptimizedImg = (publicId, width = 1000) => {
  if (!publicId) return "";

  // Transformations: 
  // f_auto = Best format (WebP/AVIF)
  // q_auto = Best compression
  // w_ = dynamic width
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/v1/${publicId}`;
};

/**
 * Merges class names together
 * @param {...string} classes - Class names to merge
 */
export const cn = (...classes) => classes.filter(Boolean).join(" ");