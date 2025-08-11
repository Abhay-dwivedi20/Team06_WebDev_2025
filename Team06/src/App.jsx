import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Footer from "./components/footer";
import AI from "./components/ai";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.1,
      x: "-50%",
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: -0.8,
      objectFit: "cover",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="60%"
                  fontSize="300"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="MyCustomFont"
                >
                  INDIA
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="public/images/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <>
          <div className="main w-full rotate-[-10deg] scale-[1.7]">
            <div className="landing overflow-hidden relative w-full h-screen bg-black">
              <div className="imagesdiv relative overflow-hidden w-full h-screen">
                <img
                  className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                  src="public/images/sky.png"
                  alt=""
                />
                <img
                  className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full"
                  src="public/images/bg.jpg"
                  alt=""
                />
                <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                  <h1 className="text-[5rem] font-bold mt-3 -ml-40">Independence Day</h1>
                </div>
                <img
                  className="absolute h-full w-[30%] character -bottom-[200%] left-[64%] -translate-x-1/2 rotate-[-20deg] z-[5]"
                  src="public/images/character.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Page3 />
          <Page2 />
          <Page5 />
          <Page4 />
          <AI />
          <Footer />
          
        </>
      )}
    </>
  );
}

export default App;
