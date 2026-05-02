import React from "react";
import { imgApple, imgPlaystore } from "../constants";

const AppDownload = () => {
  return (
    <section className="bg-black py-10 px-5 md:py-[80px] md:px-[40px] flex flex-col items-center gap-8 md:gap-10 text-center">
      <h2 className="font-['Nokora'] font-[900] text-[clamp(32px,5vw,60px)] text-white uppercase tracking-[-2px] leading-tight md:leading-none m-0 max-w-[700px]">
        Manage Your Aesthetics Business on the Go
      </h2>
      <p className="font-['Inter'] font-medium text-[16px] md:text-[20px] text-[#f9f9f9] leading-[1.4] m-0 max-w-[700px]">
        Never miss an appointment and enjoy seamless booking management. Download Faces from the App Store and Google Play for free, and keep your business running smoothly from anywhere.
      </p>
      <div className="flex gap-4 md:gap-5 flex-wrap justify-center w-full">
        {[
          { icon: imgApple,    label: "Apple Store" },
          { icon: imgPlaystore, label: "Play Store" },
        ].map((btn, i) => (
          <button key={i} className="bg-[#eef0f3] text-black border-none rounded-full py-3.5 px-6 md:py-[14px] md:px-[28px] flex items-center gap-2 text-[14px] md:text-[15px] font-medium font-['Inter'] cursor-pointer min-w-[150px] md:min-w-[160px] justify-center transition-opacity hover:opacity-90">
            <img src={btn.icon} alt="" className="w-5 h-5 object-contain" />
            {btn.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AppDownload;
