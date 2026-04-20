"use client";

import { useEffect, useRef } from "react";
import { FiMail, FiVolume2 } from "react-icons/fi";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = ["Expertises", "Work", "About", "Contact"];

const SOCIAL_LINKS = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTiktok, href: "#", label: "TikTok" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);
  const stampRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.15,
          scrollTrigger: { trigger: buttonsRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        stampRef.current,
        { scale: 0, rotate: -45, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: stampRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        bottomRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: bottomRef.current, start: "top 90%" },
        }
      );

      gsap.to(".stamp-ring-text", {
        rotate: 360,
        duration: 10,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-root">

      <div className="cta-section">


        <div ref={stampRef} className="stamp">
          <svg
            className="stamp-ring-text"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <path
                id="circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text fontSize="8.5" fontWeight="700" fill="#3d1a42" letterSpacing="3">
              <textPath href="#circle">
                • GET HYPED • GET RESULTS • GET NOTICED •
              </textPath>
            </text>
          </svg>
          <span className="stamp-initials">GH</span>
        </div>

   
        <h2 ref={headingRef} className="cta-heading">
          Let&apos;s Get Hyped!
        </h2>


        <div ref={buttonsRef} className="cta-buttons">
          <button className="btn-outline">
            Mail ons direct
            <span className="btn-icon btn-icon--dark">
              <FiMail size={14} />
            </span>
          </button>
          <button className="btn-filled">
            Get Results
            <span className="btn-icon btn-icon--orange">
              <FiVolume2 size={14} />
            </span>
          </button>
        </div>
      </div>


      <div style={{ marginTop: "-140px", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <polygon points=",140 1200,0 1200,140"  />
        </svg>
      </div>

      <div ref={bottomRef} className="footer-bottom">

        <div className="footer-brand">
          <Image src="/download.svg" alt="Logo" width={270} height={80} />
        </div>

       
        <div className="footer-center">
          <nav className="footer-nav" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" className="nav-pill">
                {link}
              </a>
            ))}
          </nav>

          <div className="social-row">
            <span className="social-label">Follow us</span>
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} className="social-icon" aria-label={label}>
                <Icon size={14} />
              </a>
            ))}
          </div>

          <div className="footer-copy">
            <span>© 2025 Get Hyped</span>
            <span>© Design by Dylan</span>
            <span>Privacyvoorwaarden</span>
          </div>
        </div>

        <div className="footer-contact">
          <p className="contact-heading">Contact</p>
          <p>info@gethyped.nl</p>
          <p>+31 6 1533 7496</p>
          <p className="contact-heading" style={{ marginTop: "12px" }}>Adres</p>
          <p>Beltrumsestraat 6,</p>
          <p>7141 AL Groenlo</p>
          <p className="privacy-link">Privacyvoorwaarden</p>
        </div>
      </div>

      <style>{`
        .footer-root {
          font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
          background: #f5f0e8;
          overflow: hidden;
        }

        .cta-section {
          position: relative;
          text-align: center;
          padding: 72px 40px 180px;
          background: #f5f0e8;
        }

        .cta-heading {
          font-size: clamp(40px, 7vw, 80px);
          font-weight: 900;
          color: #0f0f0f;
          letter-spacing: -2.5px;
          line-height: 1;
          margin-bottom: 36px;
        }

        
        .stamp {
          position: absolute;

          top: 350px;
          z-index:1;
          right: 28px;
          width: 90px;
          height: 90px;
          background: #e8b8e8;
          border-radius: 50%;
          border: 2px solid #c990c9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stamp-ring-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 90px;
          height: 90px;
        }

        .stamp-initials {
          font-size: 18px;
          font-weight: 900;
          color: #2a1a2e;
          letter-spacing: -1px;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-outline,
        .btn-filled {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
          border: none;
        }

        .btn-outline {
          background: transparent;
          border: 1.5px solid #111;
          color: #111;
        }

        .btn-filled {
          background: #e05a2b;
          border: 1.5px solid #e05a2b;
          color: #fff;
        }

        .btn-outline:hover,
        .btn-filled:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        .btn-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-icon--dark { background: #111; color: #fff; }
        .btn-icon--orange { background: #bf4920; color: #fff; }

        .footer-bottom {
          background: #e8e0d4;
          padding: 32px 40px 40px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 32px;
          align-items: start;
        }

        .footer-brand {
          font-size: 26px;
          font-weight: 900;
          color: #111;
          letter-spacing: -1px;
          white-space: nowrap;
        }

  
        .footer-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .footer-nav {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-pill {
          padding: 7px 16px;
          border: 1.5px solid #aaa89e;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          color: #333;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
        }

        .nav-pill:hover {
          background: #111;
          color: #f5f0e8;
          border-color: #111;
        }

        .social-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .social-label {
          font-size: 13px;
          color: #555;
          margin-right: 4px;
        }

        .social-icon {
          width: 32px;
          height: 32px;
          background: #111;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: background 0.15s ease, transform 0.15s ease;
        }

        .social-icon:hover {
          background: #e05a2b;
          transform: translateY(-2px);
        }

        .footer-copy {
          display: flex;
          gap: 32px;
          font-size: 11px;
          color: #888;
        }

        .footer-contact {
          text-align: right;
          font-size: 13px;
          color: #444;
          line-height: 1.8;
        }

        .contact-heading {
          font-weight: 700;
          color: #111;
          font-size: 13px;
          margin: 0;
        }

        .privacy-link {
          font-size: 11px;
          color: #888;
          margin-top: 8px;
          cursor: pointer;
          text-decoration: underline;
        }

  
        @media (max-width: 768px) {
          .cta-section {
            padding: 48px 24px 160px;
          }

          .stamp {
            width: 70px;
            height: 70px;
            top: 16px;
            right: 16px;
          }

          .stamp-ring-text {
            width: 70px;
            height: 70px;
          }

          .stamp-initials {
            font-size: 14px;
          }

          .footer-bottom {
            grid-template-columns: 1fr;
            padding: 28px 24px 40px;
            gap: 24px;
          }

          .footer-contact {
            text-align: left;
          }

          .footer-copy {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </footer>
  );
}