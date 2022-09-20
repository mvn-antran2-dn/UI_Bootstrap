import { useRef, useState } from "react";

export default function NavbarExternal() {
  const collapse = useRef();
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      {isShow && <div ref={collapse} className={`collapse external ${isShow ? "show-collapse" : ""}`}>
        <div className="bg-dark content-top-external">
          <h5 className="text-white">Collapsed content</h5>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid external">
          <button
            className="navbar-toggler"
            onClick={ () =>  setIsShow(!isShow)}
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}