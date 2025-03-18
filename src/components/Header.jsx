import React, { use, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Github, Moon } from 'lucide-react';



const Header = () => {
  const [dark, setDark] = useState(false)
  return (
    <header className='p-5 w-full bg-second text-main'>
      <div className="container flex justify-between items-center">
        <Link to='/' className='text-main font-bebas text-6xl font-bold'>Abdukarimov</Link>
        <nav>
          <ul className='flex gap-5 font-work text-xl'>
            <li><NavLink to="/" className="ease-in-out duration-300 hover:font-bold">Home</NavLink></li>
            <li><NavLink to="/works" className="ease-in-out duration-300 hover:font-bold">Portfillio</NavLink></li>
            <li><NavLink to="/about" className="ease-in-out duration-300 hover:font-bold">About</NavLink></li>
            <li><NavLink to="/contact" className="ease-in-out duration-300 hover:font-bold">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="flex gap-10">
          <a href="https://github.com/abdukarimov0990"><Github size="35" className={`${dark ? "text-white" : "text-main"} transition-all duration-300`}
            style={{ fill: dark ? "currentColor" : "transparent" }}
          /></a>
          <button>  <Moon
            size="35"
            className={`${dark ? "text-white" : "text-main"} transition-all duration-300`}            style={{ fill: dark ? "currentColor" : "transparent" }}
            onClick={() => setDark(!dark)}
          />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
