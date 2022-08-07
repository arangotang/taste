import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';

const FadeInSection: FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setVisible] = useState<boolean>(true);

  const domRef = useRef<any>();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    const copy = domRef.current;
    observer.observe(copy);

    return () => observer.unobserve(copy);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
