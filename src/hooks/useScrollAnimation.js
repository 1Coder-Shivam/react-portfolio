import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observerRef.current = observer;

    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => {
        if (el) {
          observer.observe(el);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observerRef.current.unobserve(el));
      }
    };
  }, []);

  return observerRef;
};

