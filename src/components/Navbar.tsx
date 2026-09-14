import { useState } from "react";
import logo from "../assets/logo-text.png";
import hamburgerIcon from "../assets/hamburger.png";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">

      <div className="container mx-auto px-6 h-16 hidden md:flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack Logo" className="h-8 w-30" />
        </a>

        <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              
                <a href={link.href}
                onClick={() => setActive(link.label)}
                className={`text-sm font-medium transition-colors ${
                  active === link.label
                    ? "text-pink-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
            Sign In
          </button>
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>
      </div>


      <div className="md:hidden h-14 flex items-center justify-between px-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-1">
          <img src={hamburgerIcon} alt="menu" className="w-6 h-6" />
        </button>

        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack Logo" className="h-7 w-7" />
          <span className="font-bold text-lg text-gray-900">Dev Stack</span>
        </a>

        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-gray-700 px-2 py-1">
            Sign In
          </button>
          <button className="text-xs font-semibold text-white px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500">
            Sign Up
          </button>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                
                  <a href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    setMenuOpen(false);
                  }}
                  className={`block py-2 text-sm font-medium ${
                    active === link.label ? "text-pink-500" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;