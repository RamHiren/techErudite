import React, { useState } from "react";
import { imgVector, tokens } from "../constants";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: tokens.bgFaq,
        borderRadius: 20,
        padding: 24,
        cursor: "pointer",
        transition: "background 0.2s",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 18, color: tokens.white, lineHeight: 1.3, flex: 1 }}>{q}</span>
        <div style={{
          width: 34, height: 34, flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.3s",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
        }}>
          <img src={imgVector} alt="" style={{ width: 34, height: 34, objectFit: "contain", filter: "invert(0)" }} />
        </div>
      </div>
      {open && (
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: 15,
          color: tokens.white,
          lineHeight: 1.5,
          margin: "12px 0 0",
        }}>{a}</p>
      )}
    </div>
  );
}

const faqs = [
  { q: "Can I create my own questions within each consent form?", a: "Absolutely! Customise your consent forms by including your own questions alongside our preset ones. Tailor them to fit your practice perfectly." },
  { q: "Can I create my own treatment listings for clients?", a: "Yes, you can. Add or remove treatments that are specific to your practice, and they'll appear in a convenient dropdown on your consent forms." },
  { q: "How do we contact Faces?", a: "We're here to help. Reach out via email at support@facesconsent.com, or use the chat icon on our app or website to send us a message." },
  { q: "Can I manage multiple clinic locations?", a: "Definitely! Faces allows you to manage multiple clinics from a single account, streamlining your operations across all locations." },
  { q: "How secure is my data with Faces?", a: "Your data security is our priority. Faces uses advanced encryption and security protocols to ensure that all your information is safe and confidential." },
];

const FAQ = () => {
  return (
    <section className="bg-black py-12 px-6 md:py-20 md:px-10 flex justify-center">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px] max-w-[1156px] w-full">
        
        <div className="flex flex-col gap-6 md:gap-8 max-w-full lg:max-w-[340px] shrink-0">
          <h2 className="font-['Nokora'] font-[900] text-[48px] md:text-[80px] text-white uppercase tracking-[-1px] md:tracking-[-2px] leading-[1] md:leading-[0.94] m-0">
            FAQs
          </h2>
          <p className="font-['Inter'] font-medium text-[18px] md:text-[20px] text-white m-0">
            All your questions answered.
          </p>
          <button className="bg-white text-black border-none rounded-full py-4 px-8 md:py-[20px] md:px-[36px] text-[18px] md:text-[20px] font-medium font-['Inter'] cursor-pointer self-start whitespace-nowrap transition-transform active:scale-95">
            View all FAQs
          </button>
        </div>

        <div className="flex-1 min-w-0 md:min-w-[300px] flex flex-col gap-4">
          {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
