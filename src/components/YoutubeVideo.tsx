import React from 'react';
import { cn } from '../utils/cn';

export interface YoutubeVideoProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * The YouTube Video ID (e.g., "kZBO4l4ww5A")
   */
  videoId: string;
  /**
   * Title for accessibility
   */
  title?: string;
}

/**
 * A component to embed YouTube videos using the standard iframe method.
 */
export const YoutubeVideo: React.FC<YoutubeVideoProps> = ({
  videoId,
  title = "YouTube video player",
  width = 560,
  height = 315,
  className,
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  ...props
}) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow={allow}
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className={cn("rounded-lg", className)}
      {...props}
    />
  );
};
