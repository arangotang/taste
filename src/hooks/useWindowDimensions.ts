import { useState, useEffect } from 'react';

function getWidth() {
  const { innerWidth: width } = window;
  return width;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWidth());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
