import { useState } from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="text-charcoal font-peppermint sticky top-0 z-50 relative flex items-center justify-between shadow-sm px-6 2xl:px-12 py-4 bg-cream tracking-wide">
            {/* <div className="shrink-0">
                <NavButton to="/" label="Home" />
            </div> */}

            <div className="absolute left-1/2 transform -translate-x-1/2 2xl:static 2xl:transform-none 2xl:flex-1 2xl:ml-6">
                <Link to="/" onClick={() => setOpen(false)}>
                    <h1 className="font-peppermint text-[24px] sm:text-[28px] lg:text-[32px] 2xl:text-[36px] tracking-widest text-center 2xl:text-left cursor-pointer whitespace-nowrap">
                        nutrivision
                    </h1>
                </Link>
            </div>

            <div className="font-peppermint text-lg hidden 2xl:flex gap-4 items-center flex-shrink-0">
                <div className="text-charcoal">
                    <NavButton to="/about" label="about" />
                    <NavButton to="/scan" label="scan" />
                    <NavButton to="/profile" label="profile" />
                </div>
            </div>

            <button
                className="2xl:hidden p-2 rounded-md focus:outline-none"
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
                        d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {open && (
                <div className="font-peppermint text-charcoal absolute top-full left-0 right-0 bg-cream flex flex-col items-center shadow-sm space-y-4 p-6 2xl:hidden z-50">
                    <NavButton
                        to="/about"
                        label="about"
                        onClick={() => setOpen(false)}
                    />

                    <NavButton
                        to="/scan"
                        label="scan"
                        onClick={() => setOpen(false)}
                    />

                    <NavButton
                        to="/profile"
                        label="profile"
                        onClick={() => setOpen(false)}
                    />
                </div>
            )}
        </nav>
    );
}
