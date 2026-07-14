import React, { useState } from "react";
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

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="relative flex items-center justify-between px-6 md:px-20 py-5">
        {/* Mobile: hamburger on left */}
        <button
          className="lg:hidden text-neutral-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
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

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 bg-white/80 backdrop-blur-sm">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-base font-medium text-neutral-800 hover:text-neutral-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
