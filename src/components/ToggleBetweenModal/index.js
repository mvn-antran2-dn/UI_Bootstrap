import { useState } from "react";

export default function ToggleBetweenModal() {
  const [isShow, setIsShow] = useState(false);
  const [isChange, setIsChange] = useState(false);
  const BtnClose = (e) => {
    setIsShow(false)
    setIsChange(false)
  };
  return (
    <>
      <button type="button" className="btn-all bg-primary" onClick = { () => setIsShow(!isShow)}>
        Open first modal
      </button>
      {isShow && <div className="modal-toggle-between">
        <div className={`modal ${isShow ? "show-modal" : ""} `}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal 1</h5>
              <button
                type="button"
                className="btn-closed mr-4"
                onClick={BtnClose}
              ></button>
            </div>
            <div className="modal-body">Modal 1</div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={ () => {setIsChange(!isChange) ;
                  setIsShow(false)}}
                className="btn-all bg-primary"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>}
      {isChange && 
        <div className={`modal ${isChange ? "show-modal" : ""} `}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal 2</h5>
              <button
                type="button"
                className="btn-closed mr-4"
                onClick={BtnClose}
              ></button>
            </div>
            <div className="modal-body">Modal 2</div>
            <div className="modal-footer">
              <button
                type="button"
                onClick={ () => {setIsChange(false) ;
                  setIsShow(true)}}
                className="btn-all bg-primary"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>}
    </>
  );
}