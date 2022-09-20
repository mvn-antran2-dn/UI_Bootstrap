import React, { useState } from 'react'

export default function ModalCP({
  verticalCentered = false,
  contentToggle,
  contentTitle,
  children,
  tooltips = false,
}) {
  const [isShow, setIsShow] = useState(false);
  const BtnClose = (e) => {
    setIsShow(!isShow)
  };
  const closeModal = (e) => {
    setIsShow(!isShow)
  };
  return (
    <>
      <button
        type="button"
        className={`btn-all bg-primary `}
        onClick = { () => setIsShow(!isShow)}
      >
        {contentToggle}
      </button>
    {isShow &&  <div
        className={`modal ${isShow ? "show-modal" : ""} `}
        onClick={closeModal}
      >
        <div
          className={`modal-content ${verticalCentered ? "modal-verticalcentered" : ""} ${tooltips ? "modal-tooltips" : ""
        }`}
        >
          <div className="modal-header">
            <h4 className="modal-title">{contentTitle}</h4>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={BtnClose}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={BtnClose}
              className="btn-all bg-secondary mr-3"
            >
              Close
            </button>
            <button type="button" className="btn-all bg-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>}
    </>
  )
}