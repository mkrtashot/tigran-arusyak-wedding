import { useState, useEffect, useRef } from "react";

// Custom hook for scroll detection
function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Always set visibility based on intersection
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.3,
        rootMargin: options.rootMargin || "0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isVisible];
}

export default useScrollAnimation;
