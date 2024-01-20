import { IoMdRocket } from "react-icons/io";
import { twMerge } from "tailwind-merge";

// eslint-disable-next-line react/prop-types
export default function ScrollTop({ className, children, icon: IconComponent = IoMdRocket, iconSize = 18 }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={scrollToTop} className={twMerge("", className)}>
      <IconComponent size={iconSize} />
      {children}
    </button>
  );
}
