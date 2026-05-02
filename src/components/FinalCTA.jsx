import React from 'react';

import appleLogoCTA from '../assets/Apple logo - CTA.png';
import googlePlayLogoCTA from '../assets/Google Play logo - CTA.png';

const FinalCTA = () => {
  return (
    <section className="w-full max-w-[1168px] mx-auto p-8 relative z-10">

      <div
        className="w-full rounded-[16px] overflow-hidden relative"
        style={{
          minHeight: '354px',
          backgroundImage: `url(./cta.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      >

        <div className="absolute inset-0 flex flex-col justify-center px-6 sm:pl-[70px] py-10 sm:pt-[100px] sm:pb-[40px] z-10 w-full sm:w-[60%] md:w-[54%] bg-gradient-to-r from-[#0052FF]/80 sm:from-transparent to-transparent">
          <h2 className="text-[24px] sm:text-[28px] font-bold text-white leading-[1.2] tracking-[-0.5px] mb-[10px]">
            Spend time where it matters.<br />
            Start using Faces today.
          </h2>
          <p className="text-[14px] text-white/90 mb-[28px] font-normal leading-[1.6]">
            Start using Faces today and{' '}
            <strong className="font-bold text-white">receive £50</strong>{' '}
            to spend in the marketplace.
          </p>


          <div className="flex flex-wrap gap-[12px]">

            <a
              href="#"
              className="flex items-center gap-[10px] bg-[#0a0f1a] text-white py-[9px] px-[18px] rounded-[10px] hover:bg-black transition-colors border border-white/10"
            >
              <img
                src={appleLogoCTA}
                alt="Apple"
                className="w-[22px] h-[22px] object-contain flex-shrink-0"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-white/60 font-normal mb-[3px]">Download on the</span>
                <span className="text-[15px] font-semibold tracking-tight">App Store</span>
              </div>
            </a>


            <a
              href="#"
              className="flex items-center gap-[10px] bg-[#0a0f1a] text-white py-[9px] px-[18px] rounded-[10px] hover:bg-black transition-colors border border-white/10"
            >
              <img
                src={googlePlayLogoCTA}
                alt="Google Play"
                className="w-[20px] h-[20px] object-contain flex-shrink-0"
              />
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-white/60 font-normal mb-[3px]">GET IT ON</span>
                <span className="text-[15px] font-semibold tracking-tight">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;