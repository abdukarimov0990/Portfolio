import { Link } from "react-router";

export default function NotFound() {
  // 404 not found page 
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-900">
        <h1 className="font-oswald text-[300px] tracking-widest text-main font-bold">404</h1>
        <p className="text-xl font-work">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 font-work px-4 py-2 bg-main text-3xl text-white rounded-lg shadow-md hover:bg-main/90 transition"
        >
          Go Home
        </Link>
      </div>
    );
  }