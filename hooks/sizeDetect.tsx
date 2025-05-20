import { sizeDetectionProps } from '@/@types/types_d';
import { useState, useEffect } from 'react';

const useSizeDetection = ({ limit = 756 }: sizeDetectionProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    // Initial position
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth < limit;
};

export default useSizeDetection;
