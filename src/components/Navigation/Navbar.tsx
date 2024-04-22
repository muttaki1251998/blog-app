import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 text-white shadow-lg">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/add" className="hover:text-gray-300">
            Create
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:text-gray-300">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
