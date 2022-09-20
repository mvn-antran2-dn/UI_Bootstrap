import React from 'react';

export default function AlertCP({ children, hide = "unset" }) {
  const removeAlert = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <div className={`alert bs-bland-success `}>
      {children}
      <button
        type="button"
        style={{ display: hide }}
        onClick={removeAlert}
        className="btn-close"
      >
       X
      </button>
    </div>
  )
}
