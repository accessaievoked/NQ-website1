import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../../assets/logos/Logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Services", to: "/services" },
    { label: "Our Work", to: "/our-work" },
    { label: "Blogs", to: "/blogs" },
    { label: "About Us", to: "/about" },
  ];

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="relative flex items-center justify-between px-6 md:px-20 py-5">
        {/* Mobile: hamburger on left - hidden once the overlay is open, overlay has its own close button */}
        <button
          className={`lg:hidden text-neutral-900 relative transition-opacity ${
            open ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={26} />
        </button>

        {/* Logo */}
        <div className="text-2xl font-semibold tracking-wide text-neutral-900 absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0">
          <Link to="/">
          <img src={logo} alt="Logo" className = "w-20 h-auto"/>
          </Link>
        </div>

        {/* Desktop nav links - centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-4 sm:px-5 py-2.5 sm:py-3 rounded-full hover:bg-neutral-800 transition-colors whitespace-nowrap"
        >
          <span className="hidden sm:inline">Contact Us</span>
          <span className="sm:hidden">Contact</span>
          <ArrowUpRight size={16} />
        </Link>
      </nav>

      {/* Mobile full-height menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="h-full w-full flex flex-col">
          {/* Top bar inside overlay: close button on left, logo centered */}
          <div className="relative flex items-center px-6 py-5">
            <button
              className="text-neutral-900 z-10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={26} />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src={logo} alt="Logo" className="w-20 h-auto" />
              </Link>
            </div>
          </div>

          {/* Left-aligned links, stacked one after another */}
          <div className="flex flex-col items-start px-6 pt-4 gap-6">
            {links.map((link, i) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium text-neutral-800 hover:text-neutral-500 transition-all duration-300 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}

            {/* Contact Us follows right after the links, same left alignment */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-neutral-800 transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: open ? `${links.length * 60 + 100}ms` : "0ms" }}
            >
              <span>Contact Us</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}