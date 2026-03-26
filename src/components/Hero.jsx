// components/Hero.jsx
import React from "react";
import Flowchart from "./Flowchart";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden "
      >
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30" />

        {/* Bright Linear Gradient Blob */}
        <div
          className="absolute -top-20 right-60 w-[300px] h-[500px] 
                   bg-[linear-gradient(200deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                   opacity-100 
                   blur-[80px] 
                   animate-blob-linear z-10"
        />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          {/* Realistic Glass Effect Badge */}
          <div className="glass-badge inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-2xl">
            <span className="inter-regular text-xs tracking-wide text-white">
              AI AUTOMATION GOVERNANCE
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl inter-medium tracking-tight">
            Control AI Automation with
            <br />
            Precision and Confidence
          </h1>

          <p className="mt-2 max-w-xl mx-auto inter-light text-md text-white/50">
            Ensure Secure, Compliant and High-Performance <br /> AI Automation
            at Scale
          </p>
        </div>
      </section>
      <Flowchart />
    </>
  );
};

export default Hero;
