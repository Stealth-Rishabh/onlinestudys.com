import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    id: 1,
    question:
      "What is the Centre for Distance and Online Education (CDOE) at Galgotias University?",
    answer:
      "The CDOE is the dedicated wing of Galgotias University that offers undergraduate and postgraduate programs through online and distance learning modes, approved by the UGC.",
  },
  {
    id: 2,
    question: "Are the online degrees from Galgotias University recognized?",
    answer:
      "Yes, all our online degrees are entitled by the University Grants Commission (UGC) and are recognized globally, holding the same value as on-campus degrees.",
  },
  {
    id: 3,
    question:
      "What are the benefits of studying online at Galgotias University?",
    answer:
      "Online learning at Galgotias offers flexibility to study anytime, anywhere, access to expert faculty, an industry-relevant curriculum, networking opportunities, and comprehensive student support.",
  },
  {
    id: 4,
    question: "How are examinations conducted for online programs?",
    answer:
      "Examinations are conducted through a secure and reliable online proctoring system, allowing you to take exams from the comfort of your home.",
  },
  {
    id: 5,
    question: "What kind of support can I expect as an online student?",
    answer:
      "We provide end-to-end student support, including academic advising, technical assistance, career counseling, and access to a vibrant online community of peers and faculty.",
  },
];

const FAQ = () => {
  const [openAccordionId, setOpenAccordionId] = useState(
    faqData[0]?.id || null
  );
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
              "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-manrope font-bold text-gray-900 leading-[3.25rem]">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="accordion-group" data-accordion="default-accordion">
          {faqData.map((item) => {
            const isOpen = openAccordionId === item.id;
            return (
              <div
                key={item.id}
                className={`accordion hover:-translate-y-1 transition-all bg-white relative z-10 shadow-md border border-solid border-gray-200 p-4 rounded-xl duration-300 mb-6 lg:p-5 ${
                  isOpen ? "active bg-blue-50 border-blue-600" : ""
                }`}
                id={`basic-heading-${item.id}-with-icon`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-blue-600"
                  aria-controls={`basic-collapse-${item.id}-with-icon`}
                  onClick={() => toggleAccordion(item.id)}
                >
                  <h5 className="font-semibold">{item.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  ref={(el) => (contentRefs.current[item.id] = el)}
                  id={`basic-collapse-${item.id}-with-icon`}
                  className="accordion-content w-full overflow-hidden transition-max-height duration-500 ease-in-out"
                  aria-labelledby={`basic-heading-${item.id}`}
                  style={{
                    maxHeight: isOpen
                      ? `${contentRefs.current[item.id]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <p className="text-base text-gray-700 font-normal leading-6 pt-4">
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
