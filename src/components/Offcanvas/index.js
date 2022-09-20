import React, { useRef } from 'react'

export default function OffCanvasCP({ direction = "start", children }) {
  const offcanvas = useRef();
  const backcanvas = useRef();
  const showOffCanvas = (e) => {
    e.preventDefault();
    offcanvas.current.classList.add("show-canvas");
    backcanvas.current.classList.add("show-canvas");
  };
  const closeOffCanvas = () => {
    offcanvas.current.classList.remove("show-canvas");
    backcanvas.current.classList.remove("show-canvas");
  };
  return (
    <>
    <button className="btn-all bg-primary" onClick={showOffCanvas} type="button">
      Button with data-bs-target
    </button>

    <div ref={offcanvas} className={`offcanvas offcanvas-${direction}`}>
      <div className="offcanvas-header flex justify-content-between align-items-center">
        <h5 className="offcanvas-title">Offcanvas</h5>
        <button
          type="button"
          className="btn-close text-reset"
          onClick={closeOffCanvas}
        ></button>
      </div>
      <div className="offcanvas-body">{children}</div>
    </div>
    <div
      ref={backcanvas}
      onClick={closeOffCanvas}
      className="offcanvas-backcanvas"
    ></div>
  </>
  )
}