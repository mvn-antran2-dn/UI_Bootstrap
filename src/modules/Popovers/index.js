import { useEffect, useRef } from "react";
import PopoverCP from "../../components/Popovers";

export default function Popovers() {
  const popoverAutoCl = useRef();
  const popover = useRef();
  useEffect(() => {
    const popoverPage = document.getElementById("popover-page");
    popoverPage.addEventListener("click", function (e) {
      const x = e.clientX;
      const y = e.clientY;
      let elementMouseIsOver = document.elementFromPoint(x, y);
      if (elementMouseIsOver.id !== "btn-popover") {
        popoverAutoCl.current.classList.remove("show-popover");
      }
    });
  });
  const showPopover = (e) => {
    if (e.target.id === "btn-popover") {
      popoverAutoCl.current.classList.toggle("show-popover");
    } else {
      popover.current.classList.toggle("show-popover");
    }
  };
  return (
    <div id="popover-page">
      <h1>Popover</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all">
          <div className=" popover">
            <button type="button" className="btn-all bg-danger" onClick={showPopover} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
              Click to toggle popover
            </button>
            <div ref={popover} className="content-popover">
              <div className="popover-header">Popover title</div>
              <div className="popover-body">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Popover Top, Left, Right,Bottom</h2>
      <div className="container">
        <div className="content-all">
          <div className=" popover flex">
            <PopoverCP direction="top" contentBtn="Popover on top">
              Popover on top
            </PopoverCP>
            <PopoverCP direction="left" contentBtn="Popover on left">
              Popover on left
            </PopoverCP>
            <PopoverCP direction="bottom" contentBtn="Popover on bottom">
              Popover on bottom
            </PopoverCP>
            <PopoverCP direction="right" contentBtn="Popover on right">
              Popover on right
            </PopoverCP>
          </div>
        </div>
      </div>
      <h2>Close click outside</h2>
      <div className="container">
        <div className="content-all">
          <div className=" popover">
            <button type="button" className="btn-all bg-danger" id="btn-popover" onClick={showPopover} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
              Click to toggle popover
            </button>
            <div ref={popoverAutoCl} className="content-popover">
              <div className="popover-header">Popover title</div>
              <div className="popover-body">
                And here's some amazing content. It's very engaging. Right?
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Disable elements</h2>
      <div className="container">
        <div className="content-all">
          <div className="d-inline-block popover-disable">
            <button className="btn-all bg-primary " type="button" disabled>
              Disabled button
            </button>
            <div className="content-popover right">
              <p className="popover-text">Disable button</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}