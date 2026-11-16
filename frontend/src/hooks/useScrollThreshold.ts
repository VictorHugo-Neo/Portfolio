import { useState, useEffect } from 'react';

export const useScrollThreshold = (threshold = 350) => {
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPassed(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPassed;
};
