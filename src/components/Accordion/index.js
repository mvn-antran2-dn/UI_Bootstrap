import React from 'react'

export default function AccordionCP({ children, heading, active }) {
  const addActive = (e) => {
    const accor = document.querySelectorAll(".accordion-item");
    accor.forEach((e) => {
      e.addEventListener("click", () => {
        removeClass()
        e.classList.toggle("active")
      })
    })
    const removeClass = () => {
      accor.forEach((e) => {
        e.classList.remove("active");
      })
    }
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