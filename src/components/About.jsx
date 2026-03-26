// components/About.jsx
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import { LuUnplug } from "react-icons/lu";
import { PiTerminalWindow } from "react-icons/pi";

const About = () => {
  const sections = [
    {
      title: "Documentation",
      icon: <FiBookOpen className="text-lg" />,
      path: "~/docs",
      desc: "Explore governance policies, architecture blueprints, and compliance workflows designed to keep automation secure, auditable, and production ready.",
    },
    {
      title: "CLI & SDK",
      icon: <PiTerminalWindow className="text-2xl" />,
      path: "~/cli",
      desc: "Deploy, monitor, and control automation pipelines using powerful command-line tools and SDKs built for engineering teams.",
    },
    {
      title: "Integrations",
      icon: <LuUnplug className="text-lg" />,
      path: "~/integrations",
      desc: "Connect seamlessly with existing systems, cloud services, and enterprise platforms while maintaining centralized governance.",
    },
  ];

  return (
    <section id="about" className="py-4 bg-black inter-regular">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <div className="text-sm tracking-normal text-white">ABOUT US</div>
        </div>

        <p className="text-3xl mb-10 z-50 text-white leading-5 text-center tracking-tight inter-medium">
          A Complete Ecosystem for Intelligent Automation
        </p>

        {/* Terminal Wrapper */}
        <div className="relative">
          {/* Gradient Blob Behind Terminal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div
              className="absolute -top-5 right-10 w-[900px] h-[400px]
              bg-gradient-to-r from-[#FF3300] via-[#FFCB83] to-[#0077FF]
              opacity-80 blur-[60px]"
            />
          </div>

          {/* ⭐ Gradient Border Wrapper - Now With Specific Top & Transparent Bottom */}
          <div
            className="relative z-10 rounded-2xl p-[1px] 
  bg-gradient-to-b from-transparent via-transparent to-transparent"
            style={{
              background: `linear-gradient(to bottom, #FFCB83 0%, transparent 100%)`,
            }}
          >
            {/* Inner Terminal Window */}
            <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="h-10 bg-white/5 flex items-center px-4 border-b border-white/10">
                {/* Circles */}
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                </div>

                {/* Title */}
                <div className="flex-1 text-center text-sm basier-mono tracking-tighter text-white/50">
                  inferago — zsh
                </div>
              </div>

              {/* Content */}
              <div className="p-10 space-y-10">
                {/* Terminal Commands */}
                <div className="space-y-3 basier-mono tracking-tighter text-sm text-white/30">
                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span> initialize
                    governance-core
                  </div>

                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span> deploy
                    automation-policy --secure
                  </div>

                  <div>
                    <span className="text-white">user@inferago</span>
                    <span className="text-white/30">:~$</span> monitor agents
                    --audit-log
                  </div>
                </div>

                {/* Three Feature Boxes */}
                <div className="grid md:grid-cols-3 gap-4">
                  {sections.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col  rounded-xl p-6 glass-badge hover:border-white/3 transition-all"
                    >
                      {/* Top Bar */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="text-xs basier-mono tracking-tighter text-white/30">
                          {item.path}
                        </div>

                        <div className="text-white/80">{item.icon}</div>
                      </div>

                      {/* Heading */}
                      <div className="text-sm text-white mb-3">
                        {item.title}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/40 inter-light tracking-normal">
                        {item.desc}
                      </p>

                      {/* Bottom Link */}
                      <div className="mt-auto pt-6">
                        <p className="text-sm text-orange-200 underline hover:text-orange-100 transition-colors cursor-pointer">
                          View Docs →
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
