import DropdownCP from "../../components/Dropdowns";
import SplitDropdown from "../../components/SplitDropdown";

export default function Dropdowns() {
  const showDropdown = (e) => {
    e.preventDefault();
    e.target.nextElementSibling.classList.toggle("hide");
  };
  return (
    <div id="dropdown-page">
      <h1>Dropdowns</h1>
      <h2>Single button</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Dropdown button"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
          />
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="dropdown">
            <a
              className="btn-all bg-secondary dropdown-toggle down"
              onClick={showDropdown}
              href="/#"
            >
              Dropdown link
            </a>

            <ul className="dropdown-menu hide">
              <li className="dropdown-item">
                <a href="/#">Action</a>
              </li>
              <li className="dropdown-item">
                <a href="/#">Another action</a>
              </li>
              <li className="dropdown-item">
                <a href="/#">Something else here</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>Colors</h2>
      <div className="container">
        <div className="content-all flex justify-content-between">
          <DropdownCP
            contentDrop="Primary"
            bgColor="primary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <DropdownCP
            contentDrop="Secondary"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <DropdownCP
            contentDrop="Success"
            bgColor="success"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <DropdownCP
            contentDrop="Info"
            bgColor="info"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <DropdownCP
            contentDrop="Warning"
            bgColor="warning"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <DropdownCP
            contentDrop="Danger"
            bgColor="danger"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
        </div>
      </div>
      <h2>Split</h2>
      <div className="container">
        <div className="content-all flex justify-content-between">
          <SplitDropdown
            contentDrop="Primary"
            bgColorSplit="primary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Secondary"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Success"
            bgColorSplit="success"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Info"
            bgColorSplit="info"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Warning"
            bgColorSplit="warning"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Danger"
            bgColorSplit="danger"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
        </div>
      </div>
      <h2> Dropdown Sizing</h2>
      <div className="container">
        <div className="content-all dropdown-large">
          <DropdownCP
            contentDrop="Large button"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Large split button"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
        </div>
      </div>
      <div className="container">
        <div className="content-all dropdown-small">
          <DropdownCP
            contentDrop="Small button"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
          <SplitDropdown
            contentDrop="Small split button"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
        </div>
      </div>
      <h2>Dark Dropdown</h2>
      <div className="container">
        <div className="content-all">
          <SplitDropdown
            contentDrop="Dropdown button"
            dark="dark"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
          />
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <nav className="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/#">Navbar</a>
            <DropdownCP
              contentDrop="Dropdown"
              dark="dark"
              bgColor="dark"
              itemDrops={["Action", "Another action", "Something else here"]}
            />
          </nav>
        </div>
      </div>
      <h2>DropUp</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Dropdown warning"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
            dropUp="up"
          />
          <SplitDropdown
            contentDrop="Dropdown warning"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
            dropUp="up"
          />
        </div>
      </div>
      <h2>Drop Right</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Dropdown warning"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
            dropUp="right"
          />
          <SplitDropdown
            contentDrop="Dropdown warning"
            bgColorSplit="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
            dropUp="right"
          />
        </div>
      </div>
      <h2>Drop Left</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Dropdown warning"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here", "Separated link"]}
            dropUp="left"
          />
        </div>
      </div>
      <h2> Menu item</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Dropdown"
            bgColor="secondary"
            itemMore={
              <>
                <li className="dropdown-item">
                  <button type="button">Action</button>
                </li>
                <li className="dropdown-item">
                  <button type="button">Another action</button>
                </li>
                <li className="dropdown-item">
                  <button type="button">Something else here</button>
                </li>
              </>
            }
          />
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <ul className="dropdown-menu menu-item-un-dropdown un-dropdown">
            <li>
              <span className="dropdown-item-text">Dropdown item text</span>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2>Active</h2>
      <div className="container">
        <div className="content-all">
          <ul className="dropdown-menu menu-active-un-dropdown un-dropdown">
            <li>
              <a className="dropdown-item" href="/#">
                Action
              </a>
            </li>
            <li className="active">
              <a className="dropdown-item active" href="/#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h2>Disable</h2>
      <div>
        <div className="container">
          <div className="content-all">
            <ul className="dropdown-menu menu-disable-un-dropdown un-dropdown">
              <li>
                <a className="dropdown-item" href="/#">
                  Action
                </a>
              </li>
              <li className="disable">
                <a className="dropdown-item disable" href="/#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>Menu alignment</h2>
      <div className="container">
        <div className="content-all">
          <DropdownCP
            contentDrop="Right-aligned menu example"
            bgColor="secondary"
            itemDrops={["Action", "Another action", "Something else here"]}
            end={true}
          />
        </div>
      </div>
      <h2>Alignment options</h2>
      <div className="container">
        <div className="content-all ">
          <div className="alignment-option">
            <DropdownCP
              contentDrop="Dropdown"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
            />
            <DropdownCP
              contentDrop=" Dropdown right menu"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              end={true}
            />
            <DropdownCP
              contentDrop=" Left-aligned, right-aligned lg"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              end={true}
            />
            <DropdownCP
              contentDrop=" Left-aligned, right-aligned lg"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
            />
            <DropdownCP
              contentDrop=" DropEnd"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="right"
            />
            <DropdownCP
              contentDrop=" DropUp"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="up"
            />
            <DropdownCP
              contentDrop=" DropStart"
              bgColor="secondary"
              itemDrops={["Action", "Another action", "Something else here"]}
              dropUp="left"
            />
          </div>
        </div>
      </div>
      <h2>Form</h2>
      <div className="container">
        <div className="content-all dropdown-form-all">
          <div className="dropdown-menu dropdown-form un-dropdown">
            <form className="form-dropdown">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <div className="form-check flex">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdown-check1"
                />
                <label className="form-check-label" htmlFor="dropdown-check1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn-all bg-primary">
                Sign in
              </button>
            </form>
            <div className="dropdown-divider"></div>
            <div className="info-form flex">
              <a className="dropdown-item" href="/#">
                New around here? Sign up
              </a>
              <a className="dropdown-item" href="/#">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all dropdown-form-all">
          <div className="dropdown-menu dropdown-form un-dropdown">
            <form className="form-dropdown">
              <label htmlFor="email2" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email2"
                placeholder="email@example.com"
              />
              <label htmlFor="password2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password2"
                placeholder="Password"
              />
              <div className="form-check flex">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdown-check2"
                />
                <label className="form-check-label" htmlFor="dropdown-check2">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn-all bg-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}