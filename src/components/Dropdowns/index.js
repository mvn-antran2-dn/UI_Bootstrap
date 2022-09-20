import { useRef } from "react";

export default function DropdownCP({
  itemDrops = [],
  itemMore,
  bgColor,
  contentDrop,
  dark,
  dropUp = false,
  end = false,
}) {
  const menu = useRef();
  const showDropdown = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("hide");
  };
  return (
    <>
      <div className={`dropdown `}>
        <button
          className={`btn-all bg-${bgColor} dropdown-toggle ${
            dropUp ? dropUp : "down"
          }`}
          onClick={showDropdown}
          type="button"
        >
          {contentDrop}
        </button>
        <ul
          ref={menu}
          className={`dropdown-menu${
            dropUp ? `-${dropUp}` : ""
          } hide dropdown-menu-${dark ? "dark" : ""} ${
            end ? "dropdown-menu-end" : ""
          } `}
        >
          {itemDrops.map((itemDropdown, index) => {
            return (
              <li className="dropdown-item" key={index}>
                <a href="/#">{itemDropdown}</a>
              </li>
            );
          })}
          {itemMore}
        </ul>
      </div>
    </>
  );
}