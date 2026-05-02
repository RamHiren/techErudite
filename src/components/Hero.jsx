import React from "react";
import {
  imgFrame7,
  imgFrame8,
  imgFrame9,
  imgHomeTreat2,
  imgTpStars,
  imgTpText,
  imgStarFilled,
} from "../constants";

export function Stars({ count = 5, size = 20 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={imgStarFilled}
          alt="★"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}

const Hero = () => {
  return (
    <section className="bg-black pt-12 pb-16 px-5 md:pt-20 md:pb-[100px] md:px-10 flex flex-col items-center gap-12 md:gap-14 overflow-hidden">

      <div className="flex flex-col items-center gap-5 max-w-[860px] text-center">
        <h1 className="font-['Nokora'] font-[900] text-[clamp(42px,6.5vw,80px)] text-white uppercase tracking-[-1.6px] leading-tight md:leading-[0.94] m-0">
          All-in-one
          <br />
          Aesthetics solution
        </h1>
        <p className="font-['Inter'] font-medium text-[16px] md:text-[20px] text-white/80 leading-[1.4] max-w-[720px] m-0">
          Faces helps you attract more clients, streamline bookings, manage
          consent forms, and purchase products to supercharge your business.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button
          className="bg-[#1654f3] text-white border-none rounded-full py-[16px] px-[32px] md:py-[22px] md:px-[40px] text-[18px] md:text-[20px] font-medium font-['Inter'] cursor-pointer shadow-[0_6px_0_#001752] transition-transform transition-shadow duration-100 hover:brightness-110 active:translate-y-[3px] active:shadow-[0_3px_0_#001752]"
        >
          Get Faces for Free
        </button>

        <div className="text-white font-['Inter'] text-[14px] md:text-[15px] font-medium text-center leading-[1.5] mt-2">
          <p className="m-0">✌️ No credit card needed. Completely free!</p>
          <p className="m-0">
            Start using Faces today and receive £50 to spend in the marketplace.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 max-w-[1156px] w-full mt-4 md:mt-0">

        <div className="flex flex-col gap-8 flex-1 min-w-[280px] w-full md:max-w-[520px]">
          <p className="font-['Nokora'] font-bold text-[clamp(24px,3vw,36px)] text-white leading-[1.12] m-0 text-center md:text-left">
            Join 1137+ professionals managing their business with Faces.
          </p>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex gap-4 md:gap-6 items-center flex-wrap justify-center md:justify-start">
              <div className="flex items-center">
                {[imgFrame7, imgFrame7, imgFrame7, imgFrame8, imgFrame9].map(
                  (src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-2 border-white object-cover relative bg-[#ccc]"
                      style={{
                        marginLeft: i > 0 ? -10 : 0,
                        zIndex: 5 - i,
                      }}
                    />
                  )
                )}
              </div>

              <div className="flex gap-2.5 items-center">
                <Stars count={5} size={24} />
                <span className="text-white font-bold text-[16px] md:text-[17px] font-['Inter']">
                  4.8
                </span>
                <span className="text-white text-[14px] md:text-[15px] font-['Inter'] underline font-semibold cursor-pointer">
                  "Excellent"
                </span>
              </div>
            </div>

            <div className="bg-white rounded-full py-2.5 px-4 md:py-[11px] md:px-[20px] inline-flex items-center gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.15)] mt-2">
              <span className="font-['Inter'] font-bold text-[12px] md:text-[13px] text-[#373c35] whitespace-normal sm:whitespace-nowrap text-center sm:text-left">
                854 customer reviews on their experiences on
              </span>
              <div className="flex flex-col gap-[3px] shrink-0">
                <img
                  src={imgTpStars}
                  alt="Trustpilot stars"
                  className="w-[50px] md:w-[64px] h-[12px] md:h-[16px] object-contain"
                />
                <img
                  src={imgTpText}
                  alt="Trustpilot"
                  className="w-[50px] md:w-[64px] h-[10px] md:h-[12px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[560px] md:w-[45%] shrink-0 aspect-[1/0.95] rounded-[30px] md:rounded-[56px] overflow-hidden bg-[#f0f0f0] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative px-[110px] pt-[82px]">
          <img
            src={imgHomeTreat2}
            alt="Faces App screenshot"
            className="w-full h-full object-contain object-[center_top] block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;