import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        top: "93%",
        transform: visible ? "translateY(-50%) scale(1)" : "translateY(-50%) scale(0.85)",
        right: "40px",
        zIndex: 9999,
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "none",
        background: "linear-gradient(135deg, #6c63ff, #3b82f6)",
        color: "white",
        fontSize: "22px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(108,99,255,0.4)",
        transition: "transform 0.3s, opacity 0.3s",
        opacity: visible ? 1 : 0.0,
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-50%) scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = `translateY(-50%) scale(${visible ? 1 : 0.85})`)}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;