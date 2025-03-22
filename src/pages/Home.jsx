import { Link } from "react-router"
import { projects, skills } from "../data/data"
import { Facebook, Github, Globe, Instagram, Twitter } from "lucide-react"
import { motion } from 'framer-motion';
import { BsTelegram } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";




const Home = () => {
  const [forlgata, setForlgata] = useState({ name: "", contact: "", message: "" });
  const chatId = "6276000412"; // Telegram chat ID
  const telegramBotId = "7838971341:AAE6kW-r2amzCGS4Mukh43InQoSa77y3z0I"; // Telegram bot token
  const url = `https://api.telegram.org/bot${telegramBotId}/sendMessage`;
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleChange = (e) => {
    setForlgata({ ...forlgata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `👤 Name: ${forlgata.name}\n📞 Contact: ${forlgata.contact}\n💬 Message: ${forlgata.message}`;

    try {
      await axios.post(url, { chat_id: chatId, text: message });
      alert("Message sent successfully!");
      setForlgata({ name: "", contact: "", message: "" });
    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="dark:bg-second bg-main">
      {/* Hero */}
      <section id="home" className=" font-oswald uppercase text-white dark:text-gray-900 h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center ">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Hello i am  <br />  <span className="dark:text-main text-white">Abdukarimov Oyatbek</span>
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-white dark:text-gray-600">
            I am a <span className="font-bold">frontend developer</span>, I have skills in areas such as <span className="font-bold"> "HTML, CSS, TAILWIND, JS, REACT"</span>      </p>
          <div className="mt-6">
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="px-6 py-3 bg-white dark:bg-main text-main dark:text-white font-medium text-lg rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
              My works
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="ml-4 px-6 py-3 border border-gray-500 text-lg rounded-lg hover:opacity-90 transition">
              contact
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-16">
        <h1 className="font-oswald mb-15 text-5xl font-bold text-center text-white dark:text-main">ABOUT ME:</h1>
        <div className="container text-center lg:text-start font-work text-white dark:text-main flex justify-between">
          <div className="w-full max-w-full lg:max-w-2xl">
            <h1 className="text-3xl font-bold mb-4">I AM ABDUKARIMOV OYATBEK SON OF MUZAFFAR</h1>
            <p className="text-lg mb-2">🇺🇿 REPUBLIC OF UZBEKISTAN, ANDIJAN REGION</p>
            <h2 className="text-2xl font-semibold mb-3">I AM A FRONTEND DEVELOPER!</h2>

            <p className="text-lg mb-4">
              I am interested in working with modern web technologies and strive for constant growth. Due to my interest in programming, I have studied technologies such as <strong>HTML, CSS, JavaScript, React, Bootstrap, Tailwind</strong> in depth and know how to use them effectively.
            </p>

            <p className="text-lg mb-4">
              I am a person with a creative approach, able to solve problems and open to learning. I do not have experience yet, but I have the skills to work independently and work with a team.
            </p>

            <p className="text-lg mb-4">
              My goal is to create high-quality, modern and functional web applications. I try to work on myself every day, gain new knowledge and experience. Given the rapid development of technologies, I am always ready to master new knowledge.
            </p>

            <h2 className="text-2xl font-semibold mt-4">I WANT TO BECOME A STRONG PROGRAMMER IN THE FUTURE AND IMPLEMENT GREAT PROJECTS!</h2>
          </div>
          <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="hidden lg:block dark:stroke-main stroke-second"
          >
            <circle cx="250" cy="250" r="200" strokeWidth="10" fill="none" />
            <ellipse cx="250" cy="250" rx="180" ry="200" strokeWidth="6" fill="none" />
            <ellipse cx="250" cy="250" rx="100" ry="200" strokeWidth="6" fill="none" />
            <line x1="50" y1="250" x2="450" y2="250" strokeWidth="6" />
            <line x1="70" y1="150" x2="430" y2="150" strokeWidth="4" />
            <line x1="90" y1="350" x2="410" y2="350" strokeWidth="4" />
          </svg>
        </div>
      </section>
      <section className="py-16">
        <h1 className="text-center text-5xl font-bold uppercase text-white dark:text-main font-oswald mb-10">My skills:</h1>
        <div className="container">
          <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 gap-y-7">
            {
              skills.map(function (skill) {
                return (
                  <li className="p-7  dark:bg-white border rounded-2xl  border-gray-400 transition-all ease-in-out duration-300 hover:scale-110">
                    <div className="flex justify-center">
                      <img src={skill.img} alt="skill_img" className="w-32 mb-4" />
                    </div>
                    <h3 className="text-3xl font-bold font-work text-white dark:text-main text-center">{skill.name}</h3>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <section id="projects" className="py-16 text-center text-white dark:text-main">
        <h2 className="text-5xl uppercase font-bold text-white dark:text-main font-oswald mb-10">My Projects:</h2>
        <div className="grid grid-cols-1 container sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 font-work">
          {projects.map((project, index) => (
            <div key={index} className="dark:bg-white border border-gray-600 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <img src={project.image} alt={project.title} className="rounded-lg w-full h-48 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-white dark:text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-center gap-4">
                <a href={project.liveLink} target="_blank" className="flex gap-2 text-main dark:text-second px-5 py-2 bg-white dark:bg-main rounded-full font-medium hover:opacity-40">
                  <Globe /><span>Live Demo</span>
                </a>
                <a href={project.githubLink} target="_blank" className="flex gap-2 text-white dark:text-gray-700 px-5 py-2 border-gray-500 border rounded-full font-medium hover">
                  <Github></Github> <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="py-16 text-white dark:text-main">
        <div className="w-full max-w-[1420px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center bg-main dark:bg-white border font-work border-gray-400 rounded-2xl p-10">
          <div className="">
            <div className="mb-7">
              <h1 className="text-5xl font-oswald  font-bold  mb-4">Contact</h1>
              <p className="">"Want to know more about me or just chat? Whatever it is, I’ll always be here to respond and keep the conversation going!"</p>
            </div>

            <h2 className="text-3xl font-oswald font-bold uppercase  mb-5">My social media accounts:</h2>
            <div className="grid-cols-2 grid gap-5">
              <a href="https://www.instagram.com/abdukarimov_606/?next=%2F" className="p-5 group bg-main dark:bg-white rounded-2xl border transition-all border-gray-400 ease-in-out duration-300 hover:dark:bg-main hover:bg-white hover:scale-110">
                <div className="flex justify-center">
                  <Instagram size={64} className=" ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main mb-4" />
                </div>
                <h3 className="font-oswald text-center  text-xl lg:text-3xl font-bold ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main">Instagram</h3>
              </a>
              <a href="https://x.com/nobody1540562" className="p-5 group bg-main dark:bg-white rounded-2xl border transition-all border-gray-400 ease-in-out duration-300 hover:dark:bg-main hover:bg-white hover:scale-110">
                <div className="flex justify-center">
                  <Twitter size={64} className="  ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main mb-4" />
                </div>
                <h3 className="font-oswald text-center  text-xl lg:text-3xl font-bold ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main">Twitter</h3>
              </a>
              <a href="https://t.me/Muzaffarovich10" className="p-5 group bg-main dark:bg-white rounded-2xl border transition-all border-gray-400 ease-in-out duration-300 hover:dark:bg-main hover:bg-white hover:scale-110">
                <div className="flex justify-center">
                  <BsTelegram size={64} className="  ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main mb-4" />
                </div>
                <h3 className="font-oswald text-center  text-xl lg:text-3xl font-bold ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main">Telegram</h3>
              </a>
              <a href="https://github.com/abdukarimov0990" className="p-5 group bg-main dark:bg-white rounded-2xl border transition-all border-gray-400 ease-in-out duration-300 hover:dark:bg-main hover:bg-white hover:scale-110">
                <div className="flex justify-center">
                  <Github size={64} className="  ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main mb-4" />
                </div>
                <h3 className="font-oswald text-center  text-xl lg:text-3xl font-bold ease-in-out duration-300 group-hover:dark:text-white group-hover:text-main">GitHub</h3>
              </a>
            </div>
          </div>
          <div className="w-full p-8 bg-main dark:bg-second border border-gray-400 h-full rounded-2xl font-work">
            <h2 className="font-oswald text-4xl mb-10  font-bold">You can send a message here.</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <label>
                <h3 className="font-oswald text-2xl mb-2 font-bold">Name:</h3>
                <input
                  autoComplete="none"
                  type="text"
                  name="name"
                  value={forlgata.name}
                  onChange={handleChange}
                  placeholder="Write your name..."
                  className="w-full px-5 py-2 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-blue-900"
                  required
                />
              </label>
              <label>
                <h3 className="font-oswald  text-2xl mb-2 font-bold">Phone or email:</h3>
                <input
                  autoComplete="none"
                  type="text"
                  name="contact"
                  value={forlgata.contact}
                  onChange={handleChange}
                  placeholder="Write your phone number or email..."
                  className="w-full px-5 py-2 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-blue-900"
                  required
                />
              </label>
              <label>
                <h3 className="font-oswald  text-2xl mb-2 font-bold">Message:</h3>
                <textarea
                  autoComplete="none"
                  name="message"
                  value={forlgata.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full h-[150px] px-5 py-2 border border-gray-400 rounded-lg outline-none focus:border-2 focus:border-blue-900"
                  required
                />
              </label>
              <button
                type="submit"
                className="font-oswald text-2xl tracking-wider text-main dark:text-white cursor-pointer w-full py-3 bg-white dark:bg-main rounded-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home
