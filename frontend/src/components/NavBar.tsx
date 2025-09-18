import { useState } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-charcoal font-peppermint sticky top-0 z-50 flex items-center justify-between shadow-sm px-6 2xl:px-12 py-4 bg-cream tracking-wide">
      <div className="flex-shrink-0">
        <Link to="/" onClick={() => setOpen(false)}>
          <h1 className="font-peppermint text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[36px] tracking-widest cursor-pointer whitespace-nowrap">
            nutrivision
          </h1>
        </Link>
      </div>

      <div className="font-peppermint text-lg hidden sm:flex gap-6 items-center">
        <NavButton to="/about" label="about" />
        <NavButton to="/scan" label="scan" />
        <NavButton to="/profile" label="profile" />
      </div>

      <button
        className="sm:hidden p-2 rounded-md focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8 text-laurel"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              open
                ? "M6 18L18 6M6 6l12 12" 
                : "M4 6h16M4 12h16M4 18h16" 
            }
          />
        </svg>
      </button>

      {open && (
        <div className="font-peppermint text-charcoal absolute top-full left-0 right-0 bg-cream flex flex-col items-center shadow-sm space-y-4 p-6 sm:hidden z-50">
          <NavButton to="/about" label="about" onClick={() => setOpen(false)} />
          <NavButton to="/scan" label="scan" onClick={() => setOpen(false)} />
          <NavButton to="/profile" label="profile" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
