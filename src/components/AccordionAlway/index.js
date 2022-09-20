import React from 'react'

export default function AccordionAlway({ children, heading, active }) {
  const addActive = (e) => {
    e.target.parentElement.classList.toggle("active");
  };
  return (
    <div className={`accordion-item ${active}`}>
      <h2 onClick={addActive} className="accordion-header" id="heading-first">
        {heading}
      </h2>
      <div className="accordion-body">{children}</div>
    </div>
  )
}