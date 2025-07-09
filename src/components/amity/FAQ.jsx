import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    id: 1,
    question: "What makes Amity's Online MBA program unique?",
    answer:
      "Amity's Online MBA is the only QS-ranked Online MBA in India, ranked Top 10 in Asia Pacific. It features AI-powered learning with Prof. Ami, 400+ hours of recorded lectures, global accreditations (WASC USA, QAA UK), and access to all Amity campuses worldwide. The program includes ACCA specializations with exemptions and industry certifications.",
  },
  {
    id: 2,
    question:
      "What are the accreditations and recognitions of Amity's Online MBA?",
    answer:
      "Amity's Online MBA is accredited by WASC (USA) and QAA (UK), with WES recognition for global acceptance. It's ranked by QS as Top 10 in Asia Pacific region and is the only Online MBA in India to achieve QS ranking. The program is also recognized by UGC and follows international academic standards.",
  },
  {
    id: 3,
    question: "What is the duration and fee structure of the program?",
    answer:
      "The Online MBA program is of 2 years duration (4 semesters). The total program fee is $5,000, which can be paid in installments of $1,250 per semester. This makes it an affordable option for quality international education with global recognition.",
  },
  {
    id: 4,
    question: "What is the eligibility criteria for Amity's Online MBA?",
    answer:
      "To be eligible for Amity's Online MBA, candidates must have completed graduation in any discipline with minimum 40% marks from a recognized university. The program welcomes both fresh graduates and working professionals. Entrepreneurs looking to develop business skills are also encouraged to apply.",
  },
  {
    id: 5,
    question: "What specializations are available in the Online MBA program?",
    answer:
      "Amity offers various MBA specializations including General Management, International Finance, Digital Entrepreneurship, Business Analytics, Data Science, HR Analytics, Digital Marketing Management, and exclusive ACCA specializations with exemptions. Students can choose dual specializations for enhanced career prospects.",
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
