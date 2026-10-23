import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target;

      if (
        target.tagName === "A" &&
        target.getAttribute("href") === window.location.pathname
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    };

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, [pathname]);

  return null;
};

export default ScrollTop;
