"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[100vw] mb-16 flex justify-between items-center px-16 py-2.5 font-semibold bg-white shadow-2xl">
      <div className="flex cursor-pointer self-stretch my-auto text-2xl leading-8 text-green-700">
        SPC | <span>IIITK</span>
      </div>
      <div className="hidden md:flex gap-12 justify-between self-stretch py-2.5 text-base font-medium leading-6 text-slate-600">
        <div className="flex-auto cursor-pointer">
          <Link href="/" className="text-inherit no-underline">
            <div>Home</div>
          </Link>
        </div>
        <div className="flex-auto cursor-pointer">
          <Link href="/why-iiitk" className="text-inherit no-underline">
            <div>Why IIITK</div>
          </Link>
        </div>
        <div className="cursor-pointer">For Students</div>
        <div className="flex-auto cursor-pointer">
          <Link href="/recruiter" className="text-inherit no-underline">
            <div>For Recruiters</div>
          </Link>
        </div>
        
        {/* <div className="cursor-pointer grow whitespace-nowrap">Contact Us</div> */}
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(103, 226, 114, 1), rgba(22, 139, 27, 1))",
        }}
        className="hidden md:flex cursor-pointer justify-center px-6 py-3.5 text-sm font-semibold leading-4 whitespace-nowrap rounded-md shadow-sm text-neutral-50"
      >
        Login/Register
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-500 hover:text-green-500"
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute top-16 left-0 w-full bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500"
          >
            Home
          </Link>
          <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500">
            For Students
          </div>
          <Link
            href="/recruiter"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500"
          >
            For Recruiters
          </Link>
          <Link
            href="/recruiter"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500"
          >
            Why IIITK
          </Link>
          <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}