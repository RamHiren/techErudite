import React from "react";
import { imgMHRA, imgGoogle, imgShield } from "../constants";

const badges = [
  { icon: imgMHRA, title: "Regulated by MHRA and a verified licensed broker" },
  { icon: imgGoogle, title: "Rated 5.0 stars on Google and 4.9 on Trustpilot" },
  { icon: imgShield, title: "Designed to help you run your aesthetics business efficiently" },
];

const TrustBadges = () => {
  return (
    <section className="bg-black px-5 md:px-10 pb-10 md:pb-20 flex justify-center">
      <div className="flex flex-wrap justify-between items-start gap-10 w-full max-w-[1156px]">
        {badges.map((b, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-5 flex-1 basis-[220px] max-w-[340px] text-center mx-auto"
          >
            <div className="w-[88px] h-[88px] rounded-full bg-[#e8e9eb] flex items-center justify-center shrink-0">
              <img
                src={b.icon}
                alt=""
                className="w-[44px] h-[44px] object-contain"
              />
            </div>
            <p className="font-['Inter'] font-semibold text-[16px] md:text-[18px] text-white m-0 leading-[1.4]">
              {b.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadges;