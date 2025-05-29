import React, { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll by clicking the 'Enroll' button on any course card."
    },
    {
      question: "Can I track assignment deadlines?",
      answer: "Yes! Your dashboard shows all tasks and due dates."
    },
    {
      question: "Is StudySpace free to use?",
      answer: "Absolutely. You can start using StudySpace for free today."
    },
    {
      question: "Can I use StudySpace on my phone?",
      answer: "Yes, StudySpace is mobile-friendly and works on all devices."
    },
  ];

  const sectionStyle = {
    padding: "4rem 1.5rem",
    backgroundColor: "#fff",
    textAlign: "center",
  };

  const titleStyle = {
    display: "inline-block",
    backgroundColor: "#FEF08A",
    fontWeight: "bold",
    padding: "0.25rem 1rem",
    marginBottom: "2rem",
    fontSize: "1.5rem",
    borderRadius: "0.375rem",
  };

  const cardStyle = {
    backgroundColor: "#BAE6FD",
    borderRadius: "0.75rem",
    padding: "1rem 1.5rem",
    marginBottom: "1rem",
    textAlign: "left",
    cursor: "pointer",
    fontWeight: "500",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
  };

  const answerStyle = {
    padding: "1rem 1.5rem",
    backgroundColor: "#E0F2FE",
    borderRadius: "0.75rem",
    marginTop: "-0.5rem",
    marginBottom: "1.5rem",
    textAlign: "left",
    fontWeight: "400",
    fontSize: "0.95rem",
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={sectionStyle}>
      <div style={titleStyle}>FAQ</div>
      <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        {faqs.map((faq, index) => (
          <div key={index}>
            <div style={cardStyle} onClick={() => toggle(index)}>
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <div style={answerStyle}>{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
