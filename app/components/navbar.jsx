"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/favicon.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = () => {
    window.location.href = "https://www.iiitkottayam.ac.in/#!/home";
  };

  return (
    <div className="w-[100vw] mb-16 flex fixed z-50 justify-between items-center px-16 py-2.5 font-semibold bg-white shadow-2xl">
      <div className="flex cursor-pointer self-stretch my-auto text-2xl leading-8 text-green-700">
        TPC | <span>IIITK</span>
      </div>
      <div className="hidden md:flex gap-12 justify-between self-stretch py-2.5 text-base font-medium leading-6 text-slate-600">
        <div className="flex-auto cursor-pointer">
          <Link href="/" className="text-inherit no-underline">
            <div>Home</div>
          </Link>
        </div>
        <div className="flex-auto cursor-pointer">
          <Link href="/why-iiitk" className="text-inherit no-underline">
            <div>Why recruit us</div>
          </Link>
        </div>
        {/*Removed for students  */}
        {/* <div className="cursor-pointer">For Students</div> */}
        <div className="flex-auto cursor-pointer">
          <Link href="/recruiter" className="text-inherit no-underline">
            <div>For Recruiters</div>
          </Link>
        </div>

        {/* <div className="cursor-pointer grow whitespace-nowrap">Contact Us</div> */}
      </div>
      <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
        <Image src={logo} alt="logo" width={100} height={100} />
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
          {/* Removed the For students page */}
          {/* <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500">
            For Students
          </div> */}
          <Link
            href="/recruiter"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500"
          >
            For Recruiters
          </Link>
          <Link
            href="/why-iiitk"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500"
          >
            Why Recruit Us
          </Link>
          <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-green-500">
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}
