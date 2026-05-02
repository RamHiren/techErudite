import React from 'react';
import logo from '../assets/logo.png';
import appleLogoCTA from '../assets/Apple logo - CTA.png';
import googlePlayLogoCTA from '../assets/Google Play logo - CTA.png';
import imgPhone from '../assets/imgPhone.png';
import imgWhatapp from '../assets/imgWhatapp.png';
import imgEmail from '../assets/imgEmail.png';
import imgAddress from '../assets/imgAddress.png';
import imgFaceBook from '../assets/imgFaceBook.png';
import imgInstra from '../assets/imgInstra.png';
import imgLink from '../assets/imgLink.png';
import imgYT from '../assets/imgYT.png';
import imgTikTok from '../assets/imgTikTok.png';


function ContactRow({ icon, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
      <div style={{
        width: 28, height: 28,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0, marginTop: 2,
      }}>
        {icon}
      </div>
      <span style={{ fontSize: 16, fontWeight: 600, color: '#ffffff', lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}


function AppBtn({ logo: src, topLabel, mainLabel }) {
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center', gap: 10,
      background: '#1654f3', color: '#fff',
      padding: '11px 20px', borderRadius: 10,
      textDecoration: 'none',
      transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = '#0040cc'}
      onMouseLeave={e => e.currentTarget.style.background = '#1654f3'}
    >
      <img src={src} alt={mainLabel} style={{ width: 26, height: 26, objectFit: 'contain', flexShrink: 0 }} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>{topLabel}</span>
        <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.3px' }}>{mainLabel}</span>
      </div>
    </a>
  );
}


function FooterCol({ title, links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 120 }}>
      <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(link => (
          <a key={link} href="#" style={{
            fontSize: 13, color: '#8d95a6', textDecoration: 'none', lineHeight: 1,
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = '#8d95a6'}
          >{link}</a>
        ))}
      </div>
    </div>
  );
}


function SocialIcon({ icon }) {
  return (
    <div style={{
      width: 36, height: 36,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', transition: 'transform 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={icon} alt="social" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  );
}


const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      background: '#242d3e',
      paddingTop: 257,
      marginTop: -177,
      position: 'relative',
      zIndex: 0,
    }}>
      <div style={{ maxWidth: 1168, margin: '0 auto', padding: '0 16px' }}>


        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-stretch pb-12 md:pb-[60px]">


          <div className="w-full lg:w-[300px] flex-shrink-0 flex flex-col">


            <img src={logo} alt="Faces Business" style={{ height: 44, objectFit: 'contain', objectPosition: 'left', marginBottom: 8 }} />


            <p style={{
              fontSize: 13, color: '#8d95a6', marginTop: 4,
              paddingBottom: 20,
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              margin: '4px 0 0',
            }}>
              We're an MHRA Licensed Broker
            </p>


            <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '24px 0 16px' }}>Contact</h4>


            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <ContactRow icon={<img src={imgPhone} alt="phone" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}>
                01785 558018
              </ContactRow>
              <ContactRow icon={<img src={imgWhatapp} alt="whatsapp" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}>
                01785 558018
              </ContactRow>
              <ContactRow icon={<img src={imgEmail} alt="email" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}>
                support@facesconsent.com
              </ContactRow>
              <ContactRow icon={<img src={imgAddress} alt="address" style={{ width: "100%", height: "100%", objectFit: "contain" }} />}>
                Faces Consent Ltd.,<br />
                Staffordshire Technology Park,<br />
                Centaurion House, 27 Anson Ct,<br />
                Stafford ST18 0GB, UK
              </ContactRow>
            </div>


            <div style={{
              marginTop: 32,
              background: '#1e2736',
              borderRadius: 16,
              padding: 24,
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <h4 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>
                Get 7 Clients in 7 days!
              </h4>
              <p style={{ fontSize: 13, color: '#8d95a6', margin: '0 0 24px', lineHeight: 1.6 }}>
                Sign-up to our hints and tips of how to get more clients
              </p>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.18)', paddingBottom: 8, marginBottom: 20 }}>
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    width: '100%', background: 'transparent',
                    border: 'none', outline: 'none',
                    color: '#fff', fontSize: 14,
                  }}
                />
              </div>
              <button style={{
                width: '100%', background: '#fff', color: '#000',
                fontWeight: 700, fontSize: 14,
                padding: '13px 0', borderRadius: 8,
                border: 'none', cursor: 'pointer',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.9)'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                Count me in!
              </button>
            </div>
          </div>


          <div className="flex-1 w-full flex flex-col justify-between min-h-full">


            <div className="flex flex-wrap gap-8 md:gap-12">


              <FooterCol title="Services" links={[
                'Search Clinics', 'Search Treatments', 'Training Courses',
                'Card Machine Companies', 'Insurance Companies', 'Waste Management Services',
                'CPD Services', 'Complications Consultant', 'Free Website Builder',
                'Finance Options', 'Get Aesthetics Insurance', 'Get Medical Malpractice Insurance',
                'Accountancy Services', 'Find A Prescriber',
              ]} />


              <div style={{ flex: 1, minWidth: 120, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>About Us</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                  {['Consent Forms', 'Aftercare Forms', 'GDPR', 'HIPAA Compliance', 'Advice, Tips & News'].map(link => (
                    <a key={link} href="#" style={{ fontSize: 13, color: '#8d95a6', textDecoration: 'none', lineHeight: 1 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8d95a6'}
                    >{link}</a>
                  ))}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', margin: '0 0 20px' }}>Help</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {['Shipping & Returns', 'Help & Support', 'General FAQs', "Seller's FAQs", 'Say Hello'].map(link => (
                    <a key={link} href="#" style={{ fontSize: 13, color: '#8d95a6', textDecoration: 'none', lineHeight: 1 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = '#8d95a6'}
                    >{link}</a>
                  ))}
                </div>
              </div>


              <FooterCol title="Sell" links={['Sell on Faces', 'Seller Registration', 'Seller List']} />

            </div>


            <div className="flex justify-center lg:justify-end gap-3 md:gap-4 mt-10 md:mt-12">
              <AppBtn logo={appleLogoCTA} topLabel="Download on the" mainLabel="App Store" />
              <AppBtn logo={googlePlayLogoCTA} topLabel="GET IT ON" mainLabel="Google Play" />
            </div>

          </div>
        </div>


        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <SocialIcon icon={imgFaceBook} />
              <SocialIcon icon={imgInstra} />
              <SocialIcon icon={imgLink} />
              <SocialIcon icon={imgYT} />
              <SocialIcon icon={imgTikTok} />
            </div>
            <span style={{ fontSize: 13, color: '#8d95a6' }}>© 2024 Faces Consent. All rights reserved.</span>
          </div>


          <div style={{ display: 'flex', gap: 32 }}>
            {['Privacy Policy', 'Terms & Conditions'].map(link => (
              <a key={link} href="#" style={{
                fontSize: 13, fontWeight: 600, color: '#fff',
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >{link}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;