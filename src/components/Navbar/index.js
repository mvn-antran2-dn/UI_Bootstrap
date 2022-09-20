import DropdownCP from "../Dropdowns";

export default function NavbarCP({ color = "light", hideBrand }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
        <div className="navbar-fluid flex">
          <a className={`navbar-brand ${hideBrand}`} href="/#">
            Navbar
          </a>
          <div className="collapse navbar-collapse flex">
            <ul className="navbar-nav flex">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
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
                  bgColor="light"
                  itemDrops={["link1", "Link2", "Link3"]}
                ></DropdownCP>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/#">
                  Disabled
                </a>
              </li>
            </ul>
            <form className=" form-navbar flex">
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
      </nav>
    </>
  );
}