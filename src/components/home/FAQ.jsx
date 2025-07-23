import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    id: 1,
    question: "What are the top colleges for online MBA in India?",
    answer:
      "Top colleges for online MBA in India include Amity University Online, GLA Online University, Parul University, Chandigarh University, Lovely Professional University, UPES Online, Galgotia University, Sharda University Online, MMU University, GEU University, and Uttaranchal University and many more. These institutions are recognized for their quality education, flexible learning options, and comprehensive curricula.",
  },
  {
    id: 2,
    question: "What are the fees for the GLA online MBA program?",
    answer:
      "The fees for GLA University’s online MBA program can vary based on the specialization and course duration. Generally, the fees range from INR 50,000 to INR 80,000 for the entire program. It’s recommended to visit GLA University’s official website for the most accurate and updated fee structure.",
  },
  {
    id: 3,
    question: "What are the reviews for Chandigarh University's online MBA?",
    answer:
      "Chandigarh University’s online MBA program is appreciated for its affordability, extensive course offerings, and student support services. The program is designed to cater to working professionals and offers various specializations. Reviews generally highlight the program’s practicality and value for money.",
  },
  {
    id: 4,
    question: "Which is the best online MBA program in Finance in India?",
    answer:
      "Several institutions offer highly regarded online MBA programs in Finance, including NMIMS Global Access, Symbiosis Centre for Distance Learning, and Amity University Online. These programs provide a robust curriculum focusing on financial management, investment analysis, and market operations.",
  },
  {
    id: 5,
    question: "What are the fees for UPES online MBA?",
    answer:
      "The (UPES) offers an online MBA program with fees typically ranging from INR 1,00,000 to INR 2,00,000 depending on the specialization and course duration. UPES is known for its focus on energy and infrastructure sectors, along with traditional MBA specializations.",
  },
];

const FAQ = () => {
  const [openAccordionId, setOpenAccordionId] = useState(
    faqData[0]?.id || null
  ); // Open the first item by default
  const contentRefs = useRef({});

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className="py-10 sm:py-20 relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqData.map((item) => {
            const isOpen = openAccordionId === item.id;
            return (
              <div
                key={item.id}
                className={`accordion hover:-translate-y-2 transition-all  bg-white relative z-10 shadow border border-solid border-gray-300 p-4 rounded-xl  duration-500 mb-8 lg:p-4 ${
                  isOpen
                    ? "active accordion-active:bg-indigo-50 accordion-active:border-indigo-600"
                    : ""
                }`}
                id={`basic-heading-${item.id}-with-icon`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  aria-controls={`basic-collapse-${item.id}-with-icon`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h5>{item.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 group-hover:text-indigo-600 origin-center ${
                      isOpen ? "hidden accordion-active:hidden" : "block"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 group-hover:text-indigo-600 ${
                      isOpen ? "block accordion-active:block" : "hidden"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  ref={(el) => (contentRefs.current[item.id] = el)}
                  id={`basic-collapse-${item.id}-with-icon`}
                  className="accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out"
                  aria-labelledby={`basic-heading-${item.id}`}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[item.id]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <p className="text-base text-gray-900 font-normal leading-6 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
