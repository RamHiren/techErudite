import React from "react";

const Feature = () => {
  return (
    <section className="bg-black p-5 md:p-10 flex justify-center">
      <div
        className="w-full max-w-[1400px] h-[500px] md:h-[780px] rounded-[40px] md:rounded-[70px] overflow-hidden relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(./feature_bg.png)` }}
      >
        <div className="absolute top-8 right-8 md:top-10 md:right-[120px] z-10 max-w-[85%] md:max-w-[520px]">
          <h4 className="text-[32px] md:text-[45px] font-[800] leading-tight md:leading-none tracking-tight md:tracking-[-1px] uppercase m-0 text-black">
            BOOKINGS, CONSENT AND PRODUCTS MADE EASY
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Feature;