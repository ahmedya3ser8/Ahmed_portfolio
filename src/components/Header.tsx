import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`text-neutral-300 fixed top-0 left-0 w-full z-[999] ${isScrolled ? "bg-neutral-900" : "bg-transparent"}`}>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center h-[90px] px-12">
        <a className="logo w-14 lg:text-[30px] uppercase cursor-pointer">
          <h2>portfolio</h2>
        </a>
        <nav className="hidden lg:block">
          <ul className="flex space-x-4">
            <li>
              <Link to="hero" smooth={true} duration={700} offset={-100} className="hover:text-blue-700 transition duration-300 cursor-pointer uppercase">Home</Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={700} offset={-100} className="hover:text-blue-700 transition duration-300 cursor-pointer uppercase">About</Link>
            </li>
            <li>
              <Link to="technologies" smooth={true} duration={700} offset={-100} className="hover:text-blue-700 transition duration-300 cursor-pointer uppercase">Technologies</Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={700} offset={-100} className="hover:text-blue-700 transition duration-300 cursor-pointer uppercase">Projects</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={700} offset={-100} className="hover:text-blue-700 transition duration-300 cursor-pointer uppercase">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="social_icons">
          <ul className="flex space-x-4 text-xl lg:text-2xl">
            <li>
              <a href="https://www.linkedin.com/in/ahmed-yasser-21382a267/" target="_blank" className="hover:text-blue-700 transition duration-300 cursor-pointer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/ahmedya3ser8" target="_blank" className="hover:text-blue-700 transition duration-300 cursor-pointer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://x.com/ahmed_ya3ser_8" target="_blank" className="hover:text-blue-700 transition duration-300 cursor-pointer">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="https://wa.me/01008242154" target="_blank" className="hover:text-green-700 transition duration-300 cursor-pointer">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
