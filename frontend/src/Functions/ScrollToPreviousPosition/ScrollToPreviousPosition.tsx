import { useEffect, useState } from "react";

interface ScrollToPreviousPositionProps {
  object: HTMLElement | null;
}

const ScrollToPreviousPosition: React.FC<ScrollToPreviousPositionProps> = ({
  object,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log(scrollPosition);
  };
  //   window.addEventListener("scroll", handleScroll);
  object?.addEventListener("scroll", handleScroll);

  useEffect(() => {
    // window.scrollTo(0, scrollPosition);
    window.scrollTo(0, scrollPosition);
  }, []);

  return null;
};

export default ScrollToPreviousPosition;
