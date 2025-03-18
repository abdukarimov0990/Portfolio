import { Link } from "react-router"
import about from "../img/about.svg"

const Home = () => {

  return (
    <div className="bg-second">
    {/* Hero */}
    <section className=" font-oswald uppercase text-gray-900 h-[80vh] flex flex-col items-center justify-center">
    <div className="text-center max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Hello i am  <br />  <span className="text-main">Abdukarimov Oyatbek</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600">
      I am a <span className="font-bold">frontend developer</span>, I have skills in areas such as <span className="font-bold"> "HTML, CSS, TAILWIND, JS, REACT"</span>      </p>
      <div className="mt-6">
        <Link href="/works" className="px-6 py-3 bg-main text-white font-medium text-lg rounded-lg shadow-md hover:bg-main/90 transition-all duration-300">
          My works
        </Link>
        <Link href="/contact" className="ml-4 px-6 py-3 border border-gray-500 text-lg rounded-lg hover:bg-gray-100 transition">
          contact
        </Link>
      </div>
    </div>
    </section>
    <section className="py-16">
      <h1 className="font-oswald mb-15 text-5xl font-bold text-center text-main">ABOUT ME:</h1>
    <div className="container font-work text-main flex justify-between">
      <div className="w-full max-w-2xl">
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
      <img src={about} alt="" />
    </div>


    </section>
  </div>

  )
}

export default Home
