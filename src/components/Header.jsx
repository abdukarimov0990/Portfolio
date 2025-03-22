import React, { use, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Github, Menu, Moon, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const ref = useRef(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header ref={ref} className='z-10  p-5 fixed w-full dark:bg-second dark:text-main bg-main text-white'>
      <div className="container flex justify-between items-center">
        <Link to='/' className='dark:text-main text-white font-bebas text-4xl lg:text-6xl font-bold'>Abdukarimov</Link>
        <nav>
          <ul className='lg:flex hidden gap-5 font-work text-xl'>
            <li><NavLink to="/" onClick={scrollToTop} className="ease-in-out duration-300 hover:font-bold">Home</NavLink></li>
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="ease-in-out duration-300 hover:font-bold">About</a></li>
            <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="ease-in-out duration-300 hover:font-bold">Portfolio</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="ease-in-out duration-300 hover:font-bold">Contact</a></li>
          </ul>
        </nav>
        <div className="flex gap-10">
          <a href="https://github.com/abdukarimov0990" className='hidden lg:inline-block'><Github size="35" className=" dark:text-main text-white transition-all duration-300"
          /></a>
          <button className='hidden lg:inline-block'>  <Moon
            size="35"
            className="cursor-pointer dark:text-main text-white dark:fill-none fill-white transition-all duration-300"
            onClick={() => setDarkMode(!darkMode)}
          />
          </button>
        </div>
        <button onClick={() => setIsOpen(true)} className='block lg:hidden '>
          <Menu size={35}></Menu>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-main dark:bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <ul className='flex flex-col gap-5 font-work text-xl'>
            <li><NavLink to="/" onClick={() => { scrollToTop(); setIsOpen(false); }} className="ease-in-out duration-300 hover:font-bold">Home</NavLink></li>
            <li><a href="#about" onClick={(e) => { handleScroll(e, "about"); setIsOpen(false); }} className="ease-in-out duration-300 hover:font-bold">About</a></li>
            <li><a href="#projects" onClick={(e) => { handleScroll(e, "projects"); setIsOpen(false) }} className="ease-in-out duration-300 hover:font-bold">Portfolio</a></li>
            <li><a href="#contact" onClick={(e) => { handleScroll(e, "contact"); setIsOpen(false) }} className="ease-in-out duration-300 hover:font-bold">Contact</a></li>

          </ul>
          <div className="py-4 border-t flex justify-between items-center">
            <span className='font-work text-xl'>Dark Mode</span>
            <button onClick={() => setDarkMode(!darkMode)}>
              <Moon className="cursor-pointer dark:text-main text-white dark:fill-none fill-white transition-all duration-300"
                size={30} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
