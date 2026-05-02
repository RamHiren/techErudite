import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full" style={{ background: "#1a2130", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <nav className="w-full max-w-[1168px] mx-auto flex justify-between items-center py-[30px] px-[24px]">


        <img src={logo} alt="Faces Business Logo" className="h-[44px] object-contain" />


        <div className="hidden md:flex items-center gap-[40px]">
          <a
            href="#book"
            className="text-[15px] font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-tight whitespace-nowrap"
          >
            Book a treatment
          </a>
          <a
            href="#purchase"
            className="text-[15px] font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-tight whitespace-nowrap"
          >
            Purchase product
          </a>
        </div>


        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#ffffff",
              borderRadius: 2,
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#ffffff",
              borderRadius: 2,
              transition: "opacity 0.25s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: "#ffffff",
              borderRadius: 2,
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>


      <div
        style={{
          maxHeight: menuOpen ? 200 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="flex flex-col px-[24px] pb-[20px] gap-[20px] md:hidden">
          <a
            href="#book"
            className="text-[15px] font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            Book a treatment
          </a>
          <a
            href="#purchase"
            className="text-[15px] font-bold text-white hover:text-white/70 transition-colors duration-200 tracking-tight"
            onClick={() => setMenuOpen(false)}
          >
            Purchase product
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;