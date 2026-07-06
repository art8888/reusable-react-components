import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@/assets/icons/search.svg";

export default function ExpandingSearch() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);

      setIsExpanded(false);
    }
  };

  return (
    <div
      ref={containerRef}
      onClick={() => {
        if (!isExpanded) {
          setIsExpanded(true);
        }
      }}
      className={`flex items-center h-10 transition-all duration-300 ease-in-out ${
        isExpanded
          ? "w-64 bg-slate-100 rounded-full px-3 border border-slate-300"
          : "w-28 border border-slate-300 rounded-full px-3 hover:bg-slate-100 cursor-pointer lg:w-10 lg:border-0 lg:px-0 lg:hover:bg-slate-100 lg:rounded-full"
      }`}
    >
      <form onSubmit={handleSubmit} className="flex items-center w-full h-full">
        <button
          type="button"
          onClick={() => {
            if (!isExpanded) {
              setIsExpanded(true);
            } else if (query.trim()) {
              const submitEvent = new Event("submit", { cancelable: true });

              handleSubmit(submitEvent as unknown as React.FormEvent);
            }
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-200 transition shrink-0 outline-none"
        >
          <img src={SearchIcon} alt="Ieškoti" className="w-5 h-5" />
        </button>

        {!isExpanded && (
          <span className="text-sm font-medium text-slate-700 ml-1.5 lg:hidden select-none shrink-0">
            Ieškoti
          </span>
        )}

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ieškoti..."
          className={`bg-transparent outline-none text-sm w-full transition-all duration-300 ${
            isExpanded
              ? "opacity-100 ml-2 pointer-events-auto"
              : "w-0 opacity-0 pointer-events-none"
          }`}
        />

        {isExpanded && query.length < 1 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setIsExpanded(false);

              setQuery("");
            }}
            className="text-slate-400 hover:text-slate-600 ml-1 text-sm font-bold pr-1 shrink-0 transition"
          >
            ✕
          </button>
        )}
      </form>
    </div>
  );
}
