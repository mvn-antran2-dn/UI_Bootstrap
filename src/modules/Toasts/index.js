import { useRef } from "react";
import ToastCP from "../../components/Toasts";
import ToastSelect from "../../components/ToastSelect";

export default function Toasts() {
  const liveToast = useRef();
  const closeToast = () => {
    liveToast.current.classList.remove("show-toast");
  };
  const showToast = () => {
    liveToast.current.classList.add("show-toast");
  };
  const closeToastCustom = (e) => {
    e.target.parentElement.parentElement.remove();
  };
  return (
    <>
      <h1>Toasts</h1>
      <h2> Examples </h2>
      <h3> Basic</h3>
      <div className="container">
        <div className="content-all ">
          <ToastCP show="show" time="11 mins ago">Hello, world! This is a toast message.</ToastCP>
        </div>
      </div>
      <h3>Live Examples</h3>
      <div className="container">
        <div className="content-all live-ex-toast">
          <button type="button" onClick={showToast} className="btn-all bg-primary">
            Show live toast
          </button>
          <div
            className="position-fixed bottom-0 end-0 mr-2 mb-2"
            style={{ zIndex: 5 }}
          >
            <div ref={liveToast} id="live-toast" className="toast">
              <div className="toast-header flex justify-content-between">
                <div className="toast-header-left">
                  <img
                    src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                    className="toast-header-img mr-1"
                    alt="logo"
                  />
                  <strong className="me-auto">Bootstrap</strong>
                </div>
                <div className="toast-header-right">
                  <span className="ml-auto toast-time">11 mins ago</span>
                  <button
                    type="button"
                    onClick={closeToast}
                    className="btn-close ml-1"
                  ></button>
                </div>
              </div>
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3> Translucent</h3>
      <div className="container">
        <div className="content-all bg-dark">
          <ToastCP show="show" time="11 mins ago">Hello, world! This is a toast message.</ToastCP>
        </div>
      </div>
      <h3> Stacking</h3>
      <div className="container">
        <div className="content-all stacking">
          <ToastCP show="show" time="Just now">See? Just like this.</ToastCP>
          <ToastCP show="show" time="2 seconds ago">Heads up, toasts will stack automatically</ToastCP>
        </div>
      </div>
      <h3>Custom content</h3>
      <div className="container">
        <div className="content-all">
          <div className="toast show">
            <div className="flex align-items-center">
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
              <button
                type="button"
                onClick={closeToastCustom}
                className="btn-close"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="toast show">
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
            <div className="toast-footer flex justify-content-end">
              <button type="button" className="btn-all bg-primary mr-1">
                Take action
              </button>
              <button
                type="button"
                onClick={closeToastCustom}
                className="btn-all bg-secondary btn-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3>Color</h3>
      <div className="container">
        <div className="content-all color-toast">
          <div className="toast show">
            <div className="flex align-items-center bg-primary text-white">
              <div className="toast-body">
                Hello, world! This is a toast message.
              </div>
              <button
                type="button"
                onClick={closeToastCustom}
                className="btn-close bg-primary"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <h3>Placement</h3>
      <div className="container">
        <div className="content-all">
        <ToastSelect></ToastSelect>
      </div>
      </div>
    </>
  );
}