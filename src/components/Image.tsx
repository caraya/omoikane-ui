import React from 'react';
import { cn } from '../utils/cn';
import { Caption } from './Typography';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The text description for the figure element. 
   * Providing a caption automatically wraps the image in a <figure>.
   */
  caption?: React.ReactNode;
  /**
   * Forces the image to be wrapped in a <figure> element, even without a caption.
   */
  useFigure?: boolean;
  /**
    * Class name specifically for the img element when wrapped in a figure.
    */
  imageClassName?: string;
}

/**
 * Image component that supports standalone display or semantic figure wrapping.
 */
export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  caption, 
  useFigure = false, 
  className,
  imageClassName,
  ...props 
}) => {
  const shouldRenderFigure = useFigure || !!caption;

  const validProps = { ...props };
  // React renders valid string attributes to the DOM, but if `width` or `height` are passed as numbers
  // to an img tag they work fine. However, random non-standard props might cause issues or be ignored.
  // The most common reason an image doesn't render is invalid src or display:none.
  
  // Let's ensure minimal required styles are present if not overridden.
  
  if (shouldRenderFigure) {
     return (
        <figure className={cn("m-0 inline-flex flex-col", className)}>
           <img 
              src={src} 
              alt={alt} 
              className={cn("max-w-full h-auto rounded-lg block", imageClassName)} 
              {...validProps} 
           />
           {caption && (
              <figcaption className="mt-2 text-center">
                 <Caption as="div">{caption}</Caption>
              </figcaption>
           )}
        </figure>
     );
  }

  return (
      <img 
          src={src} 
          alt={alt} 
          className={cn("max-w-full h-auto rounded-lg block", className)} 
          {...validProps} 
      />
  );
};
