"use client";
import React, { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

const curriculum = {
  semesters: [
    {
      name: "Semester I",
      subjects: [
        "Management Process and Organisational Behaviour",
        "Business Communication",
        "Financial and Management Accounting",
        "Managerial Economics",
        "Quantitative Techniques for Managers",
        "Marketing Management",
      ],
    },
    {
      name: "Semester II",
      subjects: [
        "Human Resource Management",
        "Financial Management",
        "Research Methodology",
        "Operations Management",
        "International Business",
        "Management Information System",
      ],
    },
  ],
  electives: [
    {
      name: "Core Elective 1 (Semester II)",
      specializations: {
        Marketing: ["Consumer Behaviour", "Sales and Distribution Management"],
        Finance: [
          "Working Capital Management",
          "Security Analysis and Portfolio Management",
        ],
        "Human Resource Management": [
          "Industrial Relations and Labour Laws",
          "Performance and Compensation Management",
        ],
        "Information Technology": [
          "Database Management System",
          "System Analysis and Design",
        ],
        Operations: ["Supply Chain Management", "Total Quality Management"],
        "International Business": [
          "International Marketing",
          "International Economics",
        ],
        "Healthcare Management": [
          "Introduction to Healthcare Management",
          "Operations Management in Healthcare",
        ],
      },
    },
    {
      name: "Core Elective 2 (Semester III)",
      specializations: {
        Marketing: ["Service Marketing", "Retail Marketing"],
        Finance: [
          "Management of Financial Services",
          "Derivatives and Risk Management",
        ],
        "Human Resource Management": [
          "Strategic Human Resource Management",
          "Organizational Development and Change",
        ],
        "Information Technology": [
          "E-Commerce",
          "Data Warehousing and Data Mining",
        ],
        Operations: ["Project Management", "Technology Management"],
        "International Business": [
          "International Logistics",
          "International Financial Management",
        ],
        "Healthcare Management": [
          "Healthcare Policies and Regulations",
          "Marketing in Healthcare",
        ],
      },
    },
  ],
  project: {
    name: "Semester IV",
    description:
      "In the fourth semester, students will have a course on Strategic Management and will have to complete one project.",
  },
};

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-base sm:text-lg font-semibold text-gray-800 focus:outline-none hover:text-blue-600 transition-colors"
      >
        <span className="pr-2">{title}</span>
        <ChevronDown
          className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-3 sm:pt-4 pb-2">{children}</div>
      </div>
    </div>
  );
};

export default function Curriculum() {
  const [openItem, setOpenItem] = useState("Semester I");

  const handleToggle = (title) => {
    setOpenItem(openItem === title ? null : title);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            MBA Program <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, industry-focused curriculum spread across four
            semesters.
          </p>
        </div>

        <div>
          {curriculum.semesters.map((semester) => (
            <AccordionItem
              key={semester.name}
              title={semester.name}
              isOpen={openItem === semester.name}
              onClick={() => handleToggle(semester.name)}
            >
              <ul className="space-y-2 sm:space-y-3">
                {semester.subjects.map((subject, index) => (
                  <li key={index} className="flex items-start">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{subject}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          ))}

          {curriculum.electives.map((elective) => (
            <AccordionItem
              key={elective.name}
              title={elective.name}
              isOpen={openItem === elective.name}
              onClick={() => handleToggle(elective.name)}
            >
              <div>
                {Object.entries(elective.specializations).map(
                  ([spec, subjects]) => (
                    <div key={spec} className="mb-3 sm:mb-4">
                      <h4 className="font-bold text-sm sm:text-base text-gray-800 mb-2">{spec}</h4>
                      <ul className="space-y-1.5 sm:space-y-2 pl-2 sm:pl-4">
                        {subjects.map((subject, index) => (
                          <li key={index} className="flex items-start">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{subject}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </AccordionItem>
          ))}

          <AccordionItem
            key={curriculum.project.name}
            title={curriculum.project.name}
            isOpen={openItem === curriculum.project.name}
            onClick={() => handleToggle(curriculum.project.name)}
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{curriculum.project.description}</p>
          </AccordionItem>
        </div>
      </div>
    </section>
  );
}
