import React from 'react'

export default function CheckboxGroup({
  children,
  active = false,
  idForm,
}) {
  const toggleActive = (e) => {
    if (active) {
      e.target.classList.toggle("active");
    }
  };
  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        id={`btncheck${idForm}`}
        autocomplete="off"
      />
      <label
        htmlFor={`btncheck${idForm}`}
        className={`btn-all bg-outline-primary ${active ? "active" : ""}`}
        onClick={toggleActive}
      >
        {children}
      </label>
    </>
  );
}
