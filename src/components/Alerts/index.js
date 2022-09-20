import React from 'react';

export default function AlertCP({colors, children, hide = "unset" }) {
  const removeAlert = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <div className={`alert bs-bland-${colors} `}>
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
