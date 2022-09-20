import { useRef, useState } from "react";

export default function VaryingModal() {
  const input = useRef();
  const [isShow, setIsShow] = useState(false);
  const BtnClose = (e) => {
    setIsShow(!isShow)
  };
  return (
    <>
      <button
        type="button"
        className="btn-all bg-primary"
        onClick = { () => setIsShow(!isShow)}
      >
        Open modal htmlFor @mdo
      </button>
      {isShow && <div className={`modal ${isShow ? "show-modal" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-closed mr-4"
              onClick={BtnClose}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Recipient:
                </label>
                <input
                  ref={input}
                  type="text"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea className="form-control" id="message-text"></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={BtnClose}
              className="btn-all bg-secondary mr-4"
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
  );
}