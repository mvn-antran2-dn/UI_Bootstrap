import { useState } from "react";

export default function SplitDropdown({
  itemDrops = ["link"],
  itemMore,
  bgColorSplit,
  contentDrop,
  dark,
  dropUp = false,
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
       <div className={`dropdown`}>
        <div className="btn-group">
          <button
            className={`btn-all bg-${bgColorSplit} dropdown-toggle`}
            type="button"
          >
            {contentDrop}
          </button>
          <button
            type="button"
            className={`btn-all bg-${bgColorSplit} dropdown-toggle dropdown-toggle-split ${
              dropUp ? dropUp : "down"
            } `}
            onClick = { () => setIsShow(!isShow)}
          ></button>
        </div>
       {isShow && <ul
          className={`dropdown-split-menu${
            dropUp ? `-${dropUp}` : ""
          } dropdown-menu-${dark ? "dark" : ""} ${isShow ? "" : "hide"}`}
        >
          {itemDrops.map((itemDropSplit, index) => {
            return (
              <li className="dropdown-item" key={index}>
                <a href=".">{itemDropSplit}</a>
              </li>
            );
          })}
          {itemMore}
        </ul>}
      </div>
    </>
  );
}