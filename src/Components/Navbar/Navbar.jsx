import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/inter';

const styles = `
  :root {
    --color-cyan: rgba(0, 212, 255, 1);
    --color-gray: rgba(163, 163, 163, 1);
  }

  .text-rgba-cyan {
    color: var(--color-cyan);
  }

  .text-rgba-gray {
    color: var(--color-gray);
  }

  .bg-rgba-cyan {
    background-color: var(--color-cyan);
  }

  .border-rgba-cyan {
    border-color: var(--color-cyan);
  }

  .border-rgba-gray {
    border-color: var(--color-gray);
  }

  .after\\:bg-rgba-cyan::after {
    background-color: var(--color-cyan);
  }

  .hover\\:text-rgba-cyan:hover {
    color: var(--color-cyan);
  }

  .hover\\:bg-rgba-cyan:hover {
    background-color: var(--color-cyan);
  }

  .focus\\:ring-rgba-cyan\\/50:focus {
    --tw-ring-color: rgba(0, 212, 255, 0.5);
  }

  * {
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    -webkit-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    -moz-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    -ms-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    -o-transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    font-family: 'Inter', sans-serif;
  }

  /* Dark Mode (Default) */
  body, body.dark {
    background-color: #000;
    color: #fff;
  }

  body.dark nav {
    border-bottom-color: rgba(0, 212, 255, 0.3) !important;
  }

  /* Light Mode */
  body.light {
    background-color: #f5f7fa;
    color: #1a1a1a;
  }

  body.light nav {
    background-color: #ffffff;
    border-bottom-color: rgba(0, 212, 255, 0.15);
    box-shadow: 0 2px 8px rgba(0, 212, 255, 0.08);
  }

  body.light .text-rgba-gray {
    color: #5a6b7a;
  }

  body.light .hover\\:text-rgba-gray:hover {
    color: #2c3e50;
  }

  body.light .text-rgba-cyan {
    color: rgba(0, 180, 220, 1);
  }

  body.light .hover\\:text-rgba-cyan:hover {
    color: rgba(0, 150, 190, 1);
  }

  body.light .bg-black\\/90 {
    background-color: rgba(255, 255, 255, 0.95);
  }

  body.light .bg-white\\/10 {
    background-color: rgba(0, 212, 255, 0.05);
  }

  body.light .bg-white\\/10:hover {
    background-color: rgba(0, 212, 255, 0.12);
  }

  body.light .border-rgba-gray\\/30 {
    border-color: rgba(0, 0, 0, 0.08);
  }

  body.light .hover\\:border-rgba-cyan\\/50:hover {
    border-color: rgba(0, 212, 255, 0.3);
  }

  body.light .focus\\:ring-rgba-cyan\\/50:focus {
    --tw-ring-color: rgba(0, 212, 255, 0.4);
  }

  body.light .shadow-rgba-cyan\\/20 {
    box-shadow: 0 4px 6px rgba(0, 212, 255, 0.1);
  }

  body.light .shadow-lg {
    box-shadow: 0 8px 16px rgba(0, 212, 255, 0.08);
  }

  body.light i.fas {
    color: inherit;
  }

  body.light .fa-sun {
    color: #f39c12;
  }

  body.light .fa-moon {
    color: #3498db;
  }

  body.light .text-white {
    color: #000;
  }

  body.light .fa-home,
  body.light .fa-briefcase,
  body.light .fa-cogs,
  body.light .fa-users,
  body.light .fa-paper-plane {
    color: rgba(0, 180, 220, 1);
  }

  body.light .fa-bars,
  body.light .fa-times {
    color: #5a6b7a;
  }

  body.light li.mt-2 button {
    background-color: rgba(0, 212, 255, 0.08);
    border-color: rgba(0, 180, 220, 0.2);
    color: #5a6b7a;
  }

  body.light li.mt-2 button:hover {
    background-color: rgba(0, 212, 255, 0.15);
    border-color: rgba(0, 180, 220, 0.4);
    color: rgba(0, 180, 220, 1);
  }

  body.light li.mt-2 button i {
    color: inherit;
  }

  /* Fixed Contact Us gradient for both modes */
  .bg-gradient-to-br {
    background: linear-gradient(135deg, #00d4ff 0%, #0066ff 100%);
  }

  body.light .bg-gradient-to-br {
    background: linear-gradient(135deg, #00a8e8 0%, #0099ff 100%);
  }

  .logo-dark {
    display: block;
  }

  .logo-light {
    display: none;
  }

  body.light .logo-dark {
    display: none;
  }

  body.light .logo-light {
    display: block;
  }

  .logo-img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
  }

  /* Dark Mode Icon Colors */
  body.dark .fa-home,
  body.dark .fa-briefcase,
  body.dark .fa-cogs,
  body.dark .fa-users,
  body.dark .fa-paper-plane,
  body.dark .fa-sun,
  body.dark .fa-moon {
    color: var(--color-gray);
  }

  body.dark a:has(.fa-home):active .fa-home,
  body.dark a:has(.fa-briefcase):active .fa-briefcase,
  body.dark a:has(.fa-cogs):active .fa-cogs,
  body.dark a:has(.fa-users):active .fa-users,
  body.dark a:has(.fa-paper-plane):active .fa-paper-plane,
  body.dark li span .text-rgba-cyan .fa-home,
  body.dark li span .text-rgba-cyan .fa-briefcase,
  body.dark li span .text-rgba-cyan .fa-cogs,
  body.dark li span .text-rgba-cyan .fa-users,
  body.dark li span .text-rgba-cyan .fa-paper-plane {
    color: var(--color-cyan);
  }

  /* Team logo font styling */
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

  body.light .team-logo-text {
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

  /* Mobile Responsive Design */
  @media (max-width: 768px) {
    nav {
      padding: 0.75rem 1rem !important;
    }

    .max-w-screen-xl {
      padding: 0 !important;
      max-width: 100% !important;
    }

    .logo-img {
      width: 2rem;
      height: 2rem;
    }

    .team-logo-text {
      font-size: 1.75rem;
    }

    .flex.items-center.space-x-3 {
      gap: 0.5rem !important;
    }

    .text-2xl.font-bold {
      font-size: 1.25rem;
      line-height: 1.3;
    }

    .text-xs {
      font-size: 0.65rem;
      line-height: 1.2;
    }

    ul.flex {
      gap: 0 !important;
      padding: 1rem !important;
      margin-top: 1rem !important;
    }

    .block.py-2.px-3 {
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
    }

    .block.py-2\\.5.px-5 {
      padding: 0.75rem 1.25rem;
      font-size: 0.95rem;
    }

    .inline-flex.items-center.p-2 {
      padding: 0.5rem !important;
      width: 2.5rem !important;
      height: 2.5rem !important;
    }

    .fa-home,
    .fa-briefcase,
    .fa-cogs,
    .fa-users,
    .fa-paper-plane {
      margin-right: 0.5rem !important;
      font-size: 0.9rem !important;
    }

    .fa-bars,
    .fa-times {
      font-size: 1.1rem !important;
    }

    .fa-sun,
    .fa-moon {
      font-size: 1rem !important;
    }

    button.block.w-full {
      padding: 0.75rem 1rem !important;
      text-align: center;
    }

    /* Theme Toggle Button Mobile Styling */
    li.mt-2 button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1rem !important;
      gap: 0.5rem;
    }

    li.mt-2 button i {
      font-size: 1.25rem !important;
    }

    .bg-black\\/90 {
      margin-top: 0;
      border-radius: 0.75rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    li {
      margin-bottom: 0.25rem;
    }

    li.mt-2 {
      margin-top: 0.75rem !important;
    }

    span.flex.items-center {
      gap: 0.5rem;
      justify-content: flex-start;
    }

    /* Better spacing for mobile menu */
    .w-full.md\\:block.md\\:w-auto {
      width: 100%;
    }

    /* Mobile menu overlay positioning */
    .md\\:hidden.fixed.inset-0 {
      top: 0;
      margin-top: 0;
    }

    /* Improve readability */
    .flex.flex-col > span:first-child {
      line-height: 1.3;
    }

    .flex.flex-col > span:last-child {
      line-height: 1.2;
      margin-top: -0.125rem;
    }

    /* Ensure proper touch targets */
    a, button {
      min-height: 44px;
      display: flex;
      align-items: center;
    }
  }

  /* Extra small screens optimization */
  @media (max-width: 480px) {
    nav {
      padding: 0.625rem 0.75rem !important;
    }

    .text-2xl.font-bold {
      font-size: 1.125rem;
    }

    .team-logo-text {
      font-size: 1.5rem;
    }

    .text-xs {
      font-size: 0.625rem;
    }

    .block.py-2.px-3 {
      padding: 0.625rem 0.875rem;
      font-size: 0.875rem;
    }

    .block.py-2\\.5.px-5 {
      padding: 0.625rem 1rem;
      font-size: 0.875rem;
    }

    .inline-flex.items-center.p-2 {
      padding: 0.4rem !important;
      width: 2.25rem !important;
      height: 2.25rem !important;
    }

    .logo-img {
      width: 1.875rem;
      height: 1.875rem;
    }

    .fa-sun,
    .fa-moon {
      font-size: 0.95rem !important;
    }

    .fa-bars,
    .fa-times {
      font-size: 1rem !important;
    }

    ul.flex {
      padding: 0.875rem !important;
    }

    button.block.w-full {
      padding: 0.625rem 0.875rem !important;
    }

    li.mt-2 button i {
      font-size: 1.1rem !important;
    }
  }
`;

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const closeMobileMenu = () => setIsMenuOpen(false);

    const toggleTheme = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (newDarkMode) {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }

        // Dispatch custom event for theme change if needed
        const event = new CustomEvent('themeChange', { detail: { theme: newDarkMode ? 'dark' : 'light' } });
        window.dispatchEvent(event);
    };

    const linkBaseClass = 'block py-2 px-3 relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 font-medium';
    const activeLinkClass = 'after:w-full text-rgba-cyan';
    const inactiveLinkClass = 'after:w-0 hover:after:w-full hover:after:left-0 text-rgba-gray hover:text-rgba-cyan';

    return (
        <>
            <style>{styles}</style>
            <nav className="bg-black fixed top-0 left-0 w-full z-50 border-b border-rgba-gray/30 shadow-lg">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo with Team X */}
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <NavLink
                            to="/"
                            className="flex items-center hover:opacity-90 transition-opacity duration-300"
                            onClick={closeMobileMenu}
                        >
                            <div className="flex items-center justify-center">
                                <img src="/darklogo.png" className="logo-img logo-dark" alt="Team X logo dark mode" />
                                <img src="/lightlogo.png" className="logo-img logo-light" alt="Team X logo light mode" />
                                <span className="team-logo-text ml-1 whitespace-nowrap">
                                    Team
                                </span>
                            </div>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(prev => !prev)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-rgba-cyan/50 transition-all duration-300"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <i className="fas fa-times text-xl text-rgba-cyan"></i>
                        ) : (
                            <i className="fas fa-bars text-xl text-rgba-gray"></i>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 relative z-50`}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-xl md:rounded-none md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:items-center bg-black/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">

                            {/* Home Tab - Active when on home page */}
                            <li>
                                <NavLink
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} after:bg-rgba-cyan rounded-lg md:rounded-none`
                                    }
                                    end
                                >
                                    <span className="flex items-center">
                                        <i className="fas fa-home mr-2 text-sm"></i>
                                        Home
                                    </span>
                                </NavLink>
                            </li>

                            {/* Work Tab - Individual Page */}
                            <li>
                                <NavLink
                                    to="/work"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} after:bg-rgba-cyan rounded-lg md:rounded-none`
                                    }
                                >
                                    <span className="flex items-center">
                                        <i className="fa-solid fa-wrench mr-2 text-sm"></i>
                                        Solutions
                                    </span>
                                </NavLink>
                            </li>

                            {/* Services Tab - Individual Page */}
                            <li>
                                <NavLink
                                    to="/services"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} after:bg-rgba-cyan rounded-lg md:rounded-none`
                                    }
                                >
                                    <span className="flex items-center">
                                        <i className="fas fa-cogs mr-2 text-sm"></i>
                                        Services
                                    </span>
                                </NavLink>
                            </li>

                            {/* Team Tab - Individual Page */}
                            <li>
                                <NavLink
                                    to="/team"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `${linkBaseClass} ${isActive ? activeLinkClass : inactiveLinkClass} after:bg-rgba-cyan rounded-lg md:rounded-none`
                                    }
                                >
                                    <span className="flex items-center">
                                        <i className="fas fa-users mr-2 text-sm"></i>
                                        Team
                                    </span>
                                </NavLink>
                            </li>

                            {/* Theme Toggle */}
                            <li className="mt-2 md:mt-0">
                                <button
                                    onClick={() => {
                                        toggleTheme();
                                        closeMobileMenu();
                                    }}
                                    className="block w-full md:w-auto py-2 px-4 rounded-lg transition-all duration-300 hover:bg-white/10 text-rgba-gray hover:text-rgba-cyan focus:outline-none border border-rgba-gray/30 hover:border-rgba-cyan/50"
                                    aria-label="Toggle theme"
                                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                                >
                                    {isDarkMode ? (
                                        <i className="fas fa-sun text-lg"></i>
                                    ) : (
                                        <i className="fas fa-moon text-lg"></i>
                                    )}
                                </button>
                            </li>

                            {/* Contact Tab - Individual Page */}
                            <li className="mt-2 md:mt-0">
                                <NavLink
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        `block py-2.5 px-5 rounded-lg transition-all duration-300 font-semibold shadow-lg hover:shadow-rgba-cyan/20 ${isActive
                                            ? 'bg-gradient-to-br text-white shadow-rgba-cyan/30'
                                            : 'bg-gradient-to-br text-white hover:scale-105 shadow-rgba-cyan/20'
                                        }`
                                    }
                                >
                                    <span className="flex items-center">
                                        <i className="fas fa-paper-plane mr-2"></i>
                                        Contact Us
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}