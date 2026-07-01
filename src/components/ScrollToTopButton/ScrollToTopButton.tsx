import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVoisible] = useState(false);

  useEffect(() => {
    const hnadleScroll = () => {
      setVoisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", hnadleScroll);

    return () => {
      window.removeEventListener("scroll", hnadleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        w-12 h-12
        flex items-center justify-center
        rounded-full
        bg-white/20 backdrop-blur-md
        border border-white/30
        text-white
        shadow-lg
        hover:bg-white/30
        transition-all duration-300
        ${visible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-90 pointer-events-none"
        }
      `}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
