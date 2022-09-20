import { useRef } from "react";

export default function ToastCP({ children, hideHeader = false, show, time}) {
  const toast = useRef();
  const closeToast = () => {
    toast.current.remove();
  };
  return (
    <>
      <div ref={toast} className={`toast ${show} `}>
        <div className={`toast-header flex justify-content-between ${hideHeader ? "hide" : ""}`}>
          <div className="toast-header-left">
            <img
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
              className="toast-header-img mr-1"
              alt="logo"
            />
            <strong className="me-auto">Bootstrap</strong>
          </div>
          <div className="toast-header-right">
            <span className="ml-auto toast-time">{time}</span>
            <button
              type="button"
              onClick={closeToast}
              className="btn-close ml-1"
            ></button>
          </div>
        </div>
        <div className="toast-body">{children}</div>
      </div>
    </>
  );
}