/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";


const Lees = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const imageRef    = useRef(null);
  const bodyRef     = useRef(null);
  const btnRef      = useRef(null);
  const btnTextRef  = useRef(null);
  const arrowBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const words = headingRef.current?.querySelectorAll(".word");
      if (words?.length) {
        tl.fromTo(
          words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.7 },
          0
        );
      }

      tl.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0.4
      );

      const lines = bodyRef.current?.querySelectorAll(".line");
      if (lines?.length) {
        tl.fromTo(
          lines,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
          0.65
        );
      }

      tl.fromTo(
        btnRef.current,
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        0.95
      );

      tl.fromTo(
        arrowBtnRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "bounce.out" },
        1.1
      );

      gsap.to(arrowBtnRef.current, {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 1.4,
        ease: "sine.inOut",
        delay: 1.9,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBtnEnter = () => {
    gsap.to(btnRef.current, {
      skewX: -12,
      rotate: -3,
      scale: 1.04,
      duration: 0.25,
      ease: "power2.out",
    });
 
    gsap.to(btnTextRef.current, {
      x: -4,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleBtnLeave = () => {
    gsap.to(btnRef.current, {
      skewX: 0,
      rotate: 0,
      scale: 1,
      duration: 0.45,
      ease: "elastic.out(1, 0.5)",
    });
    gsap.to(btnTextRef.current, {
      x: 0,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    const tl = gsap.timeline();
    tl.to(btnRef.current, {
      rotate: 60,
      skewX: -22,
      scaleX: 0.65,
      scaleY: 0.8,
      duration: 0.16,
      ease: "power4.in",
    });
    tl.to(btnRef.current, {
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
      duration: 0.65,
      ease: "elastic.out(1.1, 0.45)",
    });
  };

  const headingText =
    "Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.";

  return (
    <>
      <style>{`
        .content-section {
          min-height: 100vh;
          width: 100%;
          background-color: #faf4ec;
          position: relative;
          overflow: hidden;
          padding: 20vh 10vw 5vh;
          box-sizing: border-box;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .content-heading {
          font-size: clamp(2rem, 4.5vw, 3.75rem);
          font-weight: 600;
          line-height: 1.2;
          color: #111;
          max-width: 90%;
          margin-left: 40px;
          margin-bottom: 5vh;
        }

        .word {
          display: inline-block;
          margin-right: 0.25em;
          will-change: transform, opacity;
        }

        .lower-block {
          display: flex;
          gap: 5vw;
          max-width: 1400px;
        }

        .image-wrap {
          width: clamp(140px, 20vw, 260px);
          border-radius: 20px;
          overflow: hidden;
          transform: translateX(-90px);
          will-change: transform, opacity;
        }

        .image-wrap img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        @media (min-width: 1024px) {
          .image-wrap {
            position: sticky;
            top: 20vh;
          }
        }

        .right-col {
          flex: 1;
          display: flex;
          margin-left:120px;
          font-weight: 600;
          flex-direction: column;
        }

        .body-text {
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          line-height: 1.4;
          margin-bottom: 3vh;
        }

        .line {
          display: block;
          will-change: transform, opacity;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid #111;
          border-radius: 12px;
          background: transparent;
          padding: 8px 9px 8px 18px;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: 600;
          color: #111;
          cursor: pointer;
          align-self: flex-start;
          will-change: transform;
          transform-origin: 40% 60%;
          text-decoration: none;
          outline: none;
          user-select: none;
        }

        .cta-btn-text {
          will-change: transform;
          white-space: nowrap;
        }

        .cta-btn-icon {
          background: #111;
          color: #fff;
          border-radius: 8px;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          will-change: transform;
        }

        /* ── Arrow corner ── */
        .arrow-corner {
          position: absolute;
          bottom: 5vh;
          right: 5vw;
          will-change: transform, opacity;
        }

        .arrow-btn {
          border: 1.5px solid #fa6134;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #fa6134;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }

        .arrow-btn:hover {
          background: #fa6134;
          color: #fff;
        }

        @media (max-width: 768px) {
          .lower-block { flex-direction: column; }
          .image-wrap { transform: translateX(0); }
        }
      `}</style>

      <div className="content-section" ref={sectionRef}>

        <div className="content-heading" ref={headingRef}>
          {headingText.split(" ").map((word, i) => (
            <span key={i} className="word">{word}</span>
          ))}
        </div>

        <div className="lower-block mt-56">

          <div className="image-wrap" ref={imageRef}>
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
              alt="img"
            />
          </div>

          <div className="right-col">
            <p className="body-text" ref={bodyRef}>
              <span className="line">We stoppen niet bij mooie plaatjes en </span>
              <span className="line">vette beelden.We maken het meetbaar. </span>
              <span className="line">Zo weet je precies wat werkt en wat niet.</span>
              <span className="line">Nooit meer content zonder strategie</span>
              <span className="line">Nooit meer content zonder resultaat.</span>
            </p>

            <a
              className="cta-btn"
              ref={btnRef}
              onMouseEnter={handleBtnEnter}
              onMouseLeave={handleBtnLeave}
              onClick={handleBtnClick}
            >
              <span className="cta-btn-text" ref={btnTextRef}>
                Leer ons kennen
              </span>
              <span className="cta-btn-icon">
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>

  
        <div className="arrow-corner" ref={arrowBtnRef}>
          <div className="arrow-btn">
            <FaArrowDown />
          </div>
        </div>

      </div>
    </>
  );
};

export default Lees;