"use client";

import React from "react";
import companyData from "../data_models/company_details.json";
import Image from "next/image";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const CompanyDetails = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-green-50 to-white sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 text-center mt-[8rem]">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-16 h-1 bg-green-600 rounded"></div>
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              Past Recruiters
            </h2>
            <div className="w-16 h-1 bg-green-600 rounded"></div>
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {companyData.map((company, index) => (
            <div
              key={index}
              className="flex transition-all duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg hover:border-green-200 border-green-50"
            >
              {/* Image Container */}
              <div className="relative w-1/3 min-w-[100px]">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-center w-2/3 p-4">
                <h3 className="mb-1 text-lg font-semibold text-gray-800">
                  {company.name}
                </h3>
                <div className="flex items-center text-sm text-green-600">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    {company.location.city}, {company.location.state}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CompanyDetails;
