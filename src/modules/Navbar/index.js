import DropdownCP from "../../components/Dropdowns";
import NavbarCP from "../../components/Navbar";
import NavbarExternal from "../../components/NavbarExternal";
import NavbarOffCanvas from "../../components/NavbarOffCanvas";

export default function Navbar() {
  return (
    <>
      <h1>Navbar</h1>
      <div className="container">
        <div className="content-all">
          <NavbarCP></NavbarCP>
        </div>
      </div>
      <h2>Brand</h2>
      <div className="container">
        <div className="content-all navbar-total">
          <nav className="navbar navbar-light bg-light mb-1">
            <div className="flex">
              <a className="navbar-brand" href=".">
                Navbar
              </a>
            </div>
          </nav>
          <nav className="navbar navbar-light bg-light">
            <div className="flex">
              <span className="navbar-brand">Navbar</span>
            </div>
          </nav>
        </div>
      </div>
      <h2>Image</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="flex">
              <a className="flex align-items-center navbar-brand" href=".">
                <img
                  src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="24"
                />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <h2>Image and text</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="flex">
              <a className="flex align-items-center navbar-brand" href=".">
                <img
                  src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="24"
                  className="mr-1"
                />
                Bootstrap
              </a>
            </div>
          </nav>
        </div>
      </div>
      <h2> Nav</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-nav">
            <div className="container-fluid flex">
              <a className="navbar-brand" href="/#">
                Navbar
              </a>
              <div className="collapse navbar-collapse flex align-items-center">
                <ul className="navbar-nav flex align-items-center">
                  <li className="nav-item">
                    <a className="nav-link active" href="/#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="/#">
                      Disabled
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all flex">
          <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-nav   ">
            <div className="container-fluid flex">
              <a className="navbar-brand" href="/#">
                Navbar
              </a>
              <div className="collapse navbar-collapse">
                <div className="navbar-nav-div">
                  <a className="nav-link active" href="/#">
                    Home
                  </a>
                  <a className="nav-link" href="/#">
                    Features
                  </a>
                  <a className="nav-link" href="/#">
                    Pricing
                  </a>
                  <a className="nav-link disabled" href="/#">
                    Disabled
                  </a>
                  <DropdownCP  contentDrop="Dropdown"
                  bgColor="light"
                  itemDrops={["link1", "Link2", "Link3"]}
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <h2>Forms</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <form className="flex form-navbar">
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn-all bg-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid width-full justify-content-between flex">
              <a className="navbar-brand" href="/#">
                {" "}
                Navbar
              </a>
              <form className="flex form-navbar">
                <input
                  className="form-control mr-2"
                  type="search"
                  placeholder="Search"
                />
                <button className="btn-all bg-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <form className="flex width-full form-navbar">
              <div className="input-group width-full flex">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  id="inputNav"
                  className="form-control width-full"
                  placeholder="Username"
                />
              </div>
            </form>
          </nav>
        </div>
      </div>
      <h2>button</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <form className="form-navbar flex justify-content-start">
              <button className="btn-all bg-outline-success mr-1" type="button">
                Main button
              </button>
              <button className="btn-all bg-sm bg-outline-secondary btn-navbar-sm" type="button">
                Smaller button
              </button>
            </form>
          </nav>
        </div>
      </div>
      <h2>Text</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="navbar-text flex ">
              <a className="navbar-brand navbar-brand-text" href="/#">
                Navbar w/ text
              </a>
              <div className="collapse navbar-collapse flex">
                <ul className="navbar-nav flex">
                  <li className="nav-item">
                    <a className="nav-link active" href="/#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      Pricing
                    </a>
                  </li>
                </ul>
                <span className="navbar-text">
                  Navbar text with an inline element
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <h2>Color schemes</h2>
      <div className="container">
        <div className="content-all navbar-color-schemes color-dark">
          <NavbarCP color="dark"></NavbarCP>
        </div>
        <div className="content-all navbar-color-schemes color-primary">
          <NavbarCP color="primary"></NavbarCP>
        </div>
        <div className="content-all navbar-color-schemes color-info">
          <NavbarCP color="info"></NavbarCP>
        </div>
      </div>
      <h2>Placement</h2>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
                Default
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all position-relative">
          <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
                Fixed top
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all position-relative">
          <nav className="navbar fixed-bottom navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
                Fixed bottom
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="content-all position-relative">
          <nav className="navbar sticky-top navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/#">
                Sticky Top
              </a>
            </div>
          </nav>
        </div>
      </div>
      <h2>External content</h2>
      <div className="container">
        <div className="content-all">
          <NavbarExternal></NavbarExternal>
        </div>
      </div>
      <h2>Open OffCanvas</h2>
      <div className="container">
        <div className="content-all navbar-offcanvas">
          <NavbarOffCanvas></NavbarOffCanvas>
        </div>
      </div>
    </>
  );
}