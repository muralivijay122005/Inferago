// components/Footer.jsx
import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black inter-light pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-8 gap-y-14">
          {/* Logo & Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="./Infer_Full.png"
                alt="Infer"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-sm tracking-wide max-w-md">
              Precision in Every Decision.
            </p>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-wide text-white/50 mb-6">
              PAGES
            </div>
            <div className="space-y-1 text-xs tracking-wide text-white/70">
              <a href="#" className="block hover:text-white transition-colors">
                HOME
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                ABOUT US
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                PRODUCTS
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                DOCS
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                BLOG
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                CONTACT
              </a>
            </div>
          </div>

          {/* Resources + Connect - Right Side */}
          <div className="md:col-span-4 grid grid-cols-2 gap-x-12">
            {/* Resources */}
            <div>
              <div className="text-xs uppercase tracking-wide text-white/50 mb-6">
                RESOURCES
              </div>
              <div className="space-y-1 text-xs tracking-wide text-white/70">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  DOCUMENTATION
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  CLI & SDK
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  INTEGRATIONS
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <div className="text-xs uppercase tracking-wide text-white/50 mb-6">
                CONNECT
              </div>
              <div className="flex gap-1 text-xl text-white/60">
                <a href="#" className="hover:text-white" aria-label="Discord">
                  <FaDiscord />
                </a>
                <a href="#" className="hover:text-white" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-white"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
                <a href="#" className="hover:text-white" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Minimal & Centered */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-4 text-xs text-white/40 tracking-wide">
            <p>© {new Date().getFullYear()} INFERAGO</p>
            <p>ALL RIGHTS RESERVED</p>
            <a href="#" className="hover:text-white/70 transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              COOKIE SETTINGS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
