import React from "react";
import {
  imgThumb0,
  imgThumb1,
  imgThumb2,
  imgThumb3,
  imgTwitter,
  imgLinkedIn,
  tokens,
} from "../constants";
import { Stars } from "./Hero";


function SocialButtons() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      {[
        { icon: imgTwitter, label: "Twitter" },
        { icon: imgLinkedIn, label: "LinkedIn" },
      ].map((s, i) => (
        <div
          key={i}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        >
          <img
            src={s.icon}
            alt={s.label}
            style={{ width: 20, height: 20, objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}


function TestimonialCard({ thumb, quote, author }) {
  return (
    <div className="bg-[#2d3444] rounded-[20px] overflow-hidden flex flex-col sm:flex-row shrink-0 w-[85vw] sm:w-[clamp(480px,44vw,676px)] min-h-[360px] shadow-[0_24px_48px_-12px_rgba(45,52,68,0.5)]">

      <div className="relative w-full sm:w-[42%] shrink-0 overflow-hidden h-[200px] sm:h-auto sm:min-h-[360px]">

        <img
          src={thumb}
          alt={author}
          className="absolute inset-0 w-full h-full object-cover object-[center_top] block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,36,52,0.95)] via-[rgba(30,36,52,0.1)] to-transparent" />

        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-5 flex items-center gap-3 cursor-pointer">

          <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] rounded-[10px] sm:rounded-[14px] bg-[#1654f3] flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(22,84,243,0.5)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px]">
              <path d="M6 4.5L19.5 12L6 19.5V4.5Z" fill="#ffffff" />
            </svg>
          </div>
          <span className="text-white text-[13px] sm:text-[15px] font-bold font-['Inter'] whitespace-nowrap">
            Play Video
          </span>
        </div>
      </div>

      <div className="flex-1 p-5 sm:p-[32px_28px] flex flex-col justify-between gap-5">

        <div className="flex flex-col gap-3 sm:gap-[18px]">
          <Stars count={5} size={22} />
          <p className="font-['Inter'] italic font-bold text-[16px] sm:text-[clamp(18px,1.8vw,24px)] text-white leading-snug m-0">
            {quote}
          </p>
        </div>

        <div>
          <div className="h-[1px] bg-white/15 mb-4 sm:mb-5" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            <span className="font-['Inter'] font-bold text-[15px] sm:text-[17px] text-white">
              {author}
            </span>
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}


const testimonials = [
  {
    thumb: imgThumb0,
    quote: '"There\'s actually something quite special about Faces App"',
    author: "Dr. Hany Abi Ghosn",
  },
  {
    thumb: imgThumb1,
    quote:
      '"It\'s the only consent form I recommend to you because they have the consent form built in already"',
    author: "Dr. Razvan",
  },
  {
    thumb: imgThumb2,
    quote:
      '"Faces has an Amazing pharmacy shop where you can get anything you need for your clinical practice"',
    author: "Dr. Vincent Wong",
  },
  {
    thumb: imgThumb3,
    quote:
      '"Benefit from No Initial Fees and No Monthly Subscription with Faces Finance"',
    author: "Sam Fogerty",
  },
];


const Testimonials = () => {
  return (
    <section
      style={{
        background: tokens.bgDark,
        padding: "0 0 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 24,
          overflowX: "auto",
          padding: "0 40px",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {testimonials.map((t, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;