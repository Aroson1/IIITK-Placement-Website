"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import coordinators from "../../data_models/batch_coodinators.json";

const PointOfContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  const studentCoordinators = [
    {
      name: "Darisi Priyatham",
      email: "darisi21bcy16@iiitkottayam.ac.in",
      phone: "8885388619",
      department: "BCY"
    },
    {
      name: "Aaditi",
      email: "aaditi21bec36@iiitkottayam.ac.in",
      phone: "9152087943",
      department: "BEC"
    },
  ];

  const openModal = (batch) => {
    setSelectedBatch(batch);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBatch(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Header Section */}
      <section className="py-10 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <div className="h-1 w-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-green-600" />
          <h2 className="text-4xl font-bold">
            Points of <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">Contact</span>
          </h2>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Faculty Contact Card */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 flex items-center justify-center"> 
            <div className="p-6 text-center">
              <img 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-md" 
                src="/images/peoples_section/mathew.jpeg" 
                alt="Dr. Mathew C D" 
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Dr. Mathew C D
              </h3>
              <p className="text-gray-500 mb-4">Placement Cell Coordinator</p>
              
              <div className="space-y-2">
                <p className="text-gray-600">+91 79029 69784</p>
                <a 
                  href="mailto:mathewcd@iiitkottayam.ac.in" 
                  className="text-blue-600 hover:underline"
                >
                  mathewcd@iiitkottayam.ac.in
                </a>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/dr-mathew-c-d-77418927/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Student Coordinators and Batch Buttons Container */}
          <div>
            {/* Student Coordinators Cards */}
            <div className="space-y-4 mb-6">
              {studentCoordinators.map((coordinator, index) => (
                <div 
                  key={index}
                  className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">
                    2021
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{coordinator.name}</h4>
                    <div className="text-sm text-gray-600">
                      <p>{coordinator.email}</p>
                      <p>{coordinator.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Batch Coordinator Buttons */}
            <div className="space-y-4">
              {["2021", "2022", "2023"].map((batch) => (
                <button
                  key={batch}
                  onClick={() => openModal(batch)}
                  className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white 
                             py-3 rounded-lg font-semibold 
                             hover:from-green-500 hover:to-green-700 
                             transition-all duration-300 
                             hover:shadow-lg"
                >
                  {batch} Batch Coordinators
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Batch Coordinators */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedBatch} Batch Coordinators
                  </h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-6 h-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2">
                  {coordinators[selectedBatch]?.map((coordinator, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded-lg p-4 shadow-sm"
                    >
                      <h3 className="font-semibold text-gray-800 mb-2">
                        {coordinator.name}
                      </h3>
                      <a 
                        href={`mailto:${coordinator.email}`}
                        className="text-blue-600 hover:underline break-words"
                      >
                        {coordinator.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PointOfContact;