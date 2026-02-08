import { useEffect, useState } from "react";

const useCustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const handleMouseMove = event => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = event => {
      const target = event.target.closest("[data-cursor='hover']");
      if (target) {
        setCursorVariant("hover");
      }
    };

    const handleMouseOut = event => {
      const relatedTarget = event.relatedTarget;
      const stillHovering = relatedTarget?.closest?.("[data-cursor='hover']");
      if (!stillHovering) {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return { cursorPosition, cursorVariant };
};

export default useCustomCursor;
