// components/Flowchart.jsx
import React from "react";
import { FiLock } from "react-icons/fi";
import { LuChartLine, LuScanEye } from "react-icons/lu";
import { BsPlusLg } from "react-icons/bs";
import { RiGitBranchLine } from "react-icons/ri";

const Flowchart = () => {
  return (
    <section className="relative inter-regular bg-transparent overflow-hidden flex items-center justify-center -mt-px">
      {/* Grid Background - Aligned with Hero */}
      <div
        className="absolute inset-0 bg-grid pointer-events-none z-0 opacity-30"
        style={{ top: "-55px" }}
      />

      {/* Gradient Blob at the Bottom */}
      <div
        className="absolute -bottom-130 left-1/2 -translate-x-1/2 w-[800px] h-[600px]
                   bg-[linear-gradient(90deg,#FF3300_0%,#FFCB83_40%,#0077FF_85%)]
                   opacity-70
                   blur-[90px]
                   z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="relative h-[600px] max-w-[1100px] mx-auto">
          {/* SVG CONNECTIONS */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 1100 600"
            fill="none"
          >
            <defs>
              <linearGradient
                id="lineFadeLeft"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="lineFadeRight"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Left Lines */}
            <g>
              <circle cx="320" cy="190" r="2.5" fill="white" fillOpacity="1" />
              <path
                d="M 320 190 H 380 C 440 190, 420 285, 460 285 H 534"
                stroke="url(#lineFadeLeft)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>
            <g>
              <circle cx="320" cy="410" r="2.5" fill="white" fillOpacity="1" />
              <path
                d="M 320 410 H 380 C 440 410, 420 315, 460 315 H 534"
                stroke="url(#lineFadeLeft)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>

            {/* Right Lines */}
            <g>
              <circle cx="780" cy="190" r="2.5" fill="white" fillOpacity="1" />
              <path
                d="M 780 190 H 720 C 660 190, 680 285, 640 285 H 566"
                stroke="url(#lineFadeRight)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>
            <g>
              <circle cx="780" cy="410" r="2.5" fill="white" fillOpacity="1" />
              <path
                d="M 780 410 H 720 C 660 410, 680 315, 640 315 H 566"
                stroke="url(#lineFadeRight)"
                strokeWidth={2}
                strokeDasharray="2 3"
                fill="none"
              />
            </g>
          </svg>

          {/* CENTER CORE */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div
              className="absolute w-[160px] h-[160px] rounded-xl blur-[30px] opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, #FF3300 0%, #FFCB83 45%, #0077FF 100%)",
              }}
            />
            <div className="absolute w-[130px] h-[130px] rounded-4xl bg-white/5 border border-white/10 backdrop-blur-xl" />

            <div className="relative w-26 h-26 bg-black rounded-3xl flex items-center justify-center border border-white/5">
              <img src="./Infer_White.png" className="w-14 h-14" alt="Infer" />
              <div className="absolute -top-8 -left-8 text-white text-lg">
                <BsPlusLg />
              </div>
              <div className="absolute -top-8 -right-8 text-white text-lg">
                <BsPlusLg />
              </div>
              <div className="absolute -bottom-8 -left-8 text-white text-lg">
                <BsPlusLg />
              </div>
              <div className="absolute -bottom-8 -right-8 text-white text-lg">
                <BsPlusLg />
              </div>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="absolute inset-0 pointer-events-none">
            {/* LEFT SIDE - Closer to center */}
            <div className="absolute left-[70px] top-0 bottom-0 w-[240px] pointer-events-auto">
              {" "}
              {/* Reduced left spacing */}
              <div
                className="absolute"
                style={{ top: "190px", transform: "translateY(-50%)" }}
              >
                <FeatureCard
                  Icon={FiLock}
                  title="Security"
                  desc="Protect AI agents with trusted safeguards"
                  isStrokeOnly={true}
                  iconSize={21}
                  strokeWidth={2.2}
                />
              </div>
              <div
                className="absolute"
                style={{ top: "410px", transform: "translateY(-50%)" }}
              >
                <FeatureCard
                  Icon={RiGitBranchLine}
                  title="Automation"
                  desc="Streamline tasks with intelligent agent workflows"
                  isStrokeOnly={false}
                  iconSize={24} // ← Smaller size
                  strokeWidth={1.5} // ← Reduced weight
                />
              </div>
            </div>

            {/* RIGHT SIDE - Closer to center */}
            <div className="absolute right-[70px] top-0 bottom-0 w-[240px] pointer-events-auto">
              {" "}
              {/* Reduced right spacing */}
              <div
                className="absolute right-0"
                style={{ top: "190px", transform: "translateY(-50%)" }}
              >
                <FeatureCard
                  Icon={LuChartLine}
                  title="Analytics"
                  desc="Gain actionable insights from agent performance."
                  isStrokeOnly={true}
                  iconSize={22} // ← Smaller size
                  strokeWidth={2.5} // ← Increased weight
                />
              </div>
              <div
                className="absolute right-0"
                style={{ top: "410px", transform: "translateY(-50%)" }}
              >
                <FeatureCard
                  Icon={LuScanEye}
                  title="Real-time Monitoring"
                  desc="Track activities instantly with transparent oversight."
                  isStrokeOnly={true}
                  iconSize={24} // ← Slightly larger
                  strokeWidth={2.3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  Icon,
  title,
  desc,
  isStrokeOnly = false,
  iconSize = 21,
  strokeWidth = 2.2,
}) => {
  const gradientId = `feature-grad-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="group w-full glass-badge p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center gap-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all overflow-hidden relative">
          {/* Hidden SVG Gradient Definition */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>

          {/* Icon with Gradient */}
          <Icon
            size={iconSize}
            className="relative z-10 transition-all"
            style={{
              ...(isStrokeOnly
                ? {
                    stroke: `url(#${gradientId})`,
                    strokeWidth: strokeWidth,
                  }
                : {
                    fill: `url(#${gradientId})`,
                    stroke: `url(#${gradientId})`,
                  }),
            }}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-white text-sm tracking-tight leading-none">
            {title}
          </h3>
          <p className="text-white/50 text-xs leading-tight mt-1 inter-light">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;
