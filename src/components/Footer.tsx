import logo from "../assets/logo-text.png";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Dev Stack" className="h-8 w-30" />
            </a>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-700 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-700 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-gray-700 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-700 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-700 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;