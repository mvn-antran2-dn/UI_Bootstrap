import { useRef } from "react";
import DropdownCP from "../Dropdowns";

export default function NavbarOffCanvas() {
  const offcanvas = useRef();
  const backdrop = useRef();
  const showOffCanvas = (e) => {
    e.preventDefault();
    offcanvas.current.classList.add("show-offcanvas");
    backdrop.current.classList.add("show-offcanvas");
  };
  const closeOffCanvas = () => {
    offcanvas.current.classList.remove("show-offcanvas");
    backdrop.current.classList.remove("show-offcanvas");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid external navbar-offcanvas-nav">
          <a className={`navbar-brand`} href="/#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button">
            <span
              className="navbar-toggler-icon"
              onClick={showOffCanvas}
            ></span>
          </button>
        </div>
      </nav>

      <div ref={offcanvas} className={`offcanvas offcanvas-end`}>
        <div className="offcanvas-header flex justify-content-between">
          <h5 className="offcanvas-title">Offcanvas</h5>
          <button
            type="button"
            className="btn-closed text-reset"
            onClick={closeOffCanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="collapse navbar-collapse external">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <DropdownCP
                  contentDrop="Dropdown"
                  bgColor="link-default"
                  itemDrops={["link1", "Link2", "Link3"]}
                ></DropdownCP>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="flex form-navbar">
              <input
                className="form-control mr-2"
                type="search"
                placeholder="search"
              />
              <button className="btn-all bg-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        ref={backdrop}
        onClick={closeOffCanvas}
        className="offcanvas-backdrop"
      ></div>
    </>
  );
}