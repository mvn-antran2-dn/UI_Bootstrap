import { useRef } from "react";

export default function PopoverCP({ children, contentBtn, direction = "left" }) {
  const popover = useRef();
  const showPopover = () => {
    popover.current.classList.toggle("show-popover");
  };
  return (
    <>
      <div className="popover ">
        <button
          type="button"
          onClick={showPopover}
          className="btn-all bg-secondary mr-2 "
        >
          {contentBtn}
        </button>
        <div ref={popover} className={`content-popover ${direction}`}>
          <p className="popover-text">{children}</p>
        </div>
      </div>
    </>
  );
}