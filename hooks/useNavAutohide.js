import { useEffect, useState } from "react";

export default function useNavAutohide() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // You can adjust the threshold value to control when the button appears
    const threshold = 100;

    setIsVisible(
      currentScrollPos < prevScrollPos || currentScrollPos < threshold
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos]);

  return { isVisible };
}
