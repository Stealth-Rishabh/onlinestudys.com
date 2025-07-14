import React, { useState, useRef } from "react";

const faqData = [
  {
    id: 1,
    question: "What makes Chandigarh University's Online MBA program unique?",
    answer:
      "Chandigarh University's Online MBA is NAAC A+ accredited, UGC approved, and designed with an industry-focused curriculum. The program features live interactive classes, flexible learning, and a strong alumni network. Students can choose from 8+ specializations tailored to current market needs.",
  },
  {
    id: 2,
    question: "What are the accreditations and recognitions of Chandigarh's Online MBA?",
    answer:
      "Chandigarh University is NAAC A+ accredited and UGC approved, ensuring high-quality education standards. The university is recognized for its innovation and global outlook, making its MBA degree highly valued by employers.",
  },
  {
    id: 3,
    question: "What is the duration and fee structure of the program?",
    answer:
      "The Online MBA program is of 2 years duration (4 semesters). The program offers an affordable fee structure with flexible payment options, making it accessible to both working professionals and fresh graduates.",
  },
  {
    id: 4,
    question: "What is the eligibility criteria for Chandigarh's Online MBA?",
    answer:
      "Candidates must have completed graduation in any discipline from a recognized university. Both fresh graduates and working professionals are eligible to apply.",
  },
  {
    id: 5,
    question: "What specializations are available in the Online MBA program?",
    answer:
      "Chandigarh University offers specializations including Finance, Marketing, Human Resources, Operations, International Business, Information Technology, Banking & Insurance, and more. Each specialization is designed to meet industry demands.",
  },
  {
    id: 6,
    question: "How are the online classes conducted at Chandigarh University?",
    answer:
      "Live interactive classes are conducted by experienced faculty using advanced digital platforms. Students also have access to recorded sessions for flexible learning, ensuring a seamless experience from anywhere.",
  },
];

const FAQ = () => {
  const [openAccordionId, setOpenAccordionId] = useState(faqData[0]?.id || null);
  const contentRefs = useRef({});

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <section className="py-20 relative">
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
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
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
                    ? "active accordion-active:bg-blue-50 accordion-active:border-blue-600"
                    : ""
                }`}
                id={`basic-heading-${item.id}-with-icon`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-blue-600 accordion-active:font-medium accordion-active:text-blue-600"
                  aria-controls={`basic-collapse-${item.id}-with-icon`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h5>{item.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 group-hover:text-blue-600 origin-center ${
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
                    className={`w-6 h-6 text-gray-900 transition duration-500 group-hover:text-blue-600 ${
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