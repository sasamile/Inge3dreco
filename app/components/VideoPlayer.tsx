"use client"
import React, { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  width?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, width = 600 }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleLoadedMetadata = () => {
    console.log('Video metadata loaded');
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      console.log('Current time:', videoRef.current.currentTime);
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        controls
        width={width}
        className='aspect-video object-cover object-center'
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      
    </div>
  );
};

export default VideoPlayer;
