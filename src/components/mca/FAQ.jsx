import React, { useState, useRef, useEffect } from "react";

const faqData = [
  {
    id: 1,
    question: "What are the advantages of enrolling in an online MCA program?",
    answer:
      "An online MCA (Master of Computer Applications) program provides the flexibility to study at your convenience, making it ideal for working professionals and students with busy schedules. It is a cost-effective learning path that equips learners with industry-relevant knowledge, practical skills, and certification-based learning. The program also fosters better time management, encourages professional networking, and includes hands-on projects that prepare students for real-world IT roles.",
  },
  {
    id: 2,
    question: "Is an online MCA degree recognized and valid?",
    answer:
      "Yes, an online MCA degree is fully valid when offered by a university that is approved by the University Grants Commission (UGC) and recognized by the All India Council for Technical Education (AICTE). Accredited institutions, such as GLA University, Parul University, Manipal University, etc. provide programs that are widely accepted across India. These degrees are considered equivalent to regular on-campus MCA programs by major IT firms and multinational companies, especially when the curriculum includes relevant specializations and practical exposure.",
  },
  {
    id: 3,
    question: "Is GLA University Online programs accredited?",
    answer:
      "Yes, GLA University Online offers programs that are duly accredited by the appropriate academic and regulatory bodies. These online degrees are globally recognized and accepted by both employers and higher education institutions.",
  },
  {
    id: 4,
    question: "What is the eligibility criteria for admission to an online MCA program?",
    answer:
      "To be eligible for admission into an online MCA program, candidates must have completed a bachelor's degree such as BCA, B.Sc. (Computer Science), B.Sc., B.Com., or B.A., with Mathematics as a subject at either the 10+2 level or during graduation.",
  },
  {
    id: 5,
    question: "What is the examination mode for online MCA programs in India?",
    answer:
      "The examination mode varies by university. While some institutions conduct exams at designated offline centers, many online universities conduct exams through online proctored systems. These enable students to appear for their assessments remotely under secure and monitored conditions.",
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
