import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Essential links only
  const essentialLinks = [
    { name: 'Home', path: '/', icon: 'fas fa-home' },
    { name: 'Solutions', path: '/work', icon: 'fas fa-wrench' },
    { name: 'Services', path: '/services', icon: 'fas fa-cogs' },
    { name: 'Team', path: '/team', icon: 'fas fa-users' },
    { name: 'Contact', path: '/contact', icon: 'fas fa-paper-plane' }
  ];

  // Essential contact info
  const contactInfo = [
    { icon: 'fas fa-envelope', text: 'yousef.hatem.developer@gmail.com', link: 'mailto:yousef.hatem.developer@gmail.com' },
    { icon: 'fas fa-phone', text: '+021 14082 1819', link: 'tel:+021140821819' }
  ];

  // Essential social links
  const socialLinks = [
    { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/yousef-hatem-16530024b/', label: 'LinkedIn' },
    { icon: 'fab fa-github', url: 'https://github.com/YousefHatem4', label: 'GitHub' }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Simple background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black light:from-gray-50 light:via-blue-50 light:to-gray-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Logo and Description - Keeping EXACT navbar logo */}
            <div className="lg:col-span-5">
              <div className="flex flex-col h-full">
                {/* Logo - EXACTLY from navbar */}
                <div className="flex items-center space-x-3 mb-6">
                  <Link
                    to="/"
                    className="flex items-center hover:opacity-90 transition-opacity duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <img src="/darklogo.png" className="logo-img logo-dark" alt="Team X logo dark mode" />
                      <img src="/lightlogo.png" className="logo-img logo-light" alt="Team X logo light mode" />
                      <span className="team-logo-text ml-1 whitespace-nowrap">
                        Team
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Simple description */}
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 mb-6">
                  Building intelligent software solutions with AI, web development, and custom software.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <i className={`${info.icon} text-cyan-400 mr-3 text-sm`}></i>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-cyan-400 transition-colors duration-300 text-sm"
                        >
                          {info.text}
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">
                          {info.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50
                               transition-all duration-300"
                      aria-label={social.label}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links - Simplified */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Essential Navigation */}
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-4">
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    {essentialLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-gray-400 dark:text-gray-400 light:text-gray-600
                                   hover:text-cyan-400 transition-colors duration-300
                                   flex items-center group text-sm"
                        >
                          <i className={`${link.icon} mr-2 text-xs`}></i>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Simple Newsletter */}
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white light:text-white mb-4">
                    Stay Updated
                  </h3>
                  <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm mb-4">
                    Get updates on our latest projects and solutions.
                  </p>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg
                               bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-800/30
                               border border-gray-700/50 dark:border-gray-700/50 light:border-gray-600/50
                               text-white dark:text-white light:text-white
                               placeholder-gray-500 text-sm
                               focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-400"
                    />
                    <button
                      type="submit"
                      className="mt-3 w-full py-2 rounded-lg
                               bg-gradient-to-r from-cyan-500 to-blue-600
                               hover:from-cyan-600 hover:to-blue-700
                               text-white font-medium text-sm
                               transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Bottom Bar */}
        <div className="border-t border-gray-800/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-center sm:text-left">
                <p className="text-gray-500 dark:text-gray-500 light:text-gray-500 text-xs">
                  © {currentYear} Team X. All rights reserved.
                </p>
              </div>

              {/* Simple Legal Links */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/privacy"
                  className="text-gray-500 dark:text-gray-500 light:text-gray-500
                           hover:text-cyan-400 transition-colors duration-300 text-xs"
                >
                  Privacy
                </Link>
                <span className="text-gray-500">•</span>
                <Link
                  to="/terms"
                  className="text-gray-500 dark:text-gray-500 light:text-gray-500
                           hover:text-cyan-400 transition-colors duration-300 text-xs"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal custom styles */}
      <style>{`
        .light .bg-gradient-to-t {
          background: linear-gradient(to top, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%);
        }
        
        .light .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 180, 220, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 220, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .dark .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        /* EXACT Logo styling from navbar - DON'T CHANGE */
        .logo-img {
          width: 2.5rem;
          height: 2.5rem;
          object-fit: contain;
        }
        
        .logo-dark {
          display: block;
        }
        
        .logo-light {
          display: none;
        }
        
        .light .logo-dark {
          display: none;
        }
        
        .light .logo-light {
          display: block;
        }
        
        /* EXACT Team logo text styling from navbar */
        .team-logo-text {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 2.5rem;
          letter-spacing: -0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }
        
        .light .team-logo-text {
          background: linear-gradient(135deg, #0099cc 0%, #0066cc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .team-logo-text::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.5), transparent);
          border-radius: 1px;
        }
        
        /* Light mode adjustments */
        .light .text-white {
          color: #1a1a1a !important;
        }
        
        .light .bg-gray-800\\/30 {
          background-color: rgba(30, 41, 59, 0.3) !important;
        }
        
        .light .border-gray-600\\/50 {
          border-color: rgba(71, 85, 105, 0.3) !important;
        }
        
        .light .border-gray-700\\/50 {
          border-color: rgba(51, 65, 85, 0.3) !important;
        }
        
        .light .text-cyan-400 {
          color: #0891b2;
        }
        
        .light .hover\\:text-cyan-400:hover {
          color: #0e7490 !important;
        }
        
        /* Mobile responsive */
        @media (max-width: 768px) {
          .py-12 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .container.mx-auto.px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          /* Mobile logo adjustments - same as navbar */
          .logo-img {
            width: 2rem;
            height: 2rem;
          }
          
          .team-logo-text {
            font-size: 1.75rem;
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small screens - same as navbar */
          .logo-img {
            width: 1.875rem;
            height: 1.875rem;
          }
          
          .team-logo-text {
            font-size: 1.5rem;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
      `}</style>
    </footer>
  );
}