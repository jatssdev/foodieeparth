import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-lg font-bold">
                    Foodiee Parth
                </div>

                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                        </svg>
                    </button>
                </div>

                {/* Links for larger screens */}
                <div className="hidden md:flex items-center space-x-4">
                    <NavLink to="/" className="text-white px-3 py-2 rounded hover:bg-gray-700">
                        Home
                    </NavLink>
                    <NavLink to="/add" className="text-white px-3 py-2 rounded hover:bg-gray-700">
                        Add Inquiry
                    </NavLink>
                    <NavLink to="/logout" className="text-white px-3 py-2 rounded hover:bg-gray-700">
                        Logout
                    </NavLink>
                </div>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isMenuOpen && (
                <div className="md:hidden mt-2">
                    <NavLink to="/" className="block text-white px-4 py-2 rounded hover:bg-gray-700">
                        Home
                    </NavLink>
                    <NavLink to="/add" className="block text-white px-4 py-2 rounded hover:bg-gray-700">
                        Add Inquiry
                    </NavLink>
                    <NavLink to="/logout" className="block text-white px-4 py-2 rounded hover:bg-gray-700">
                        Logout
                    </NavLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
