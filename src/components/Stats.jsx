import React from "react";
import { tokens } from "../constants";

const Stats = () => {
  const stats = [
    { value: "1.1k",  label: "Professionals trust Faces" },
    { value: "24.5k", label: "Consent forms created" },
    { value: "35.2k", label: "Treatments processed" },
  ];
  return (
    <section className="bg-black px-5 md:px-10 pb-10 md:pb-20 flex justify-center">
      <div className="bg-[#f9f9f9] rounded-[40px] md:rounded-[1000px] p-8 md:py-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full max-w-[991px]">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="font-['Nokora'] font-[900] text-[40px] md:text-[48px] text-black uppercase tracking-[-1px] leading-none">
                {s.value}
              </span>
              <span className="bg-black text-white text-[13px] font-medium font-['Inter'] rounded-[46px] py-1.5 px-3 whitespace-nowrap">
                Lifetime
              </span>
            </div>
            <span className="font-['Inter'] text-[16px] md:text-[18px] font-medium text-[#373c35] text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
