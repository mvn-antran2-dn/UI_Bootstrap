export default function Navs() {
  return (
    <>
      <h1>Base Nav</h1>
      <div className="container">
        <div className="content-all base-nav-ul">
          <ul className="nav flex">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="content-all base-nav-div">
          <nav className="nav flex">
            <a className="nav-link active" href="/#">
              Active
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link disabled" href="/#">
              Disabled
            </a>
          </nav>
        </div>
      </div>
      <h2>Horizontal alignment</h2>
      <h2>Center</h2>
      <div className="container">
        <div className="content-all">
          <ul className="nav flex justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
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

      <h2>End</h2>
      <div className="container">
        <div className="content-all">
          <ul className="nav flex justify-content-flex-end">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
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

      <h2>Vertical</h2>
      <div className="container">
        <div className="content-all vertical vertical-div">
          <nav className="nav flex">
            <a className="nav-link active" href="/#">
              Active
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link disabled" href="/#">
              Disabled
            </a>
          </nav>
        </div>
        <div className="content-all vertical vertical-ul">
          <ul className="nav flex">
            <li className="nav-item">
              <a className="nav-link active" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/#">
                Link
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

      <h2>Tabs</h2>
      <div className="container">
        <div className="content-all">
          <ul className="nav nav-tabs flex">
            <li className="nav-item  ">
              <a className="nav-link active bg-primary" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link bg-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link bg-link" href="/#">
                Link
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

      <h2>Pills</h2>
      <div className="container">
        <div className="content-all">
          <ul className="nav nav-pills flex">
            <li className="nav-item">
              <a className="nav-link active bg-primary" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link bg-link" href="/#">
                Link
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

      <h2>Fill and justify</h2>
      <div className="container">
        <div className="content-all">
          <ul className="nav nav-pills nav-fill flex">
            <li className="nav-item">
              <a className="nav-link active bg-primary" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Much longer nav link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="content-all fill-nav">
          <nav className="nav nav-pills nav-fill flex">
            <a className="nav-link active bg-primary" href="/#">
              Active
            </a>
            <a className="nav-link" href="/#">
              Much longer nav link
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link disabled" href="/#">
              Disabled
            </a>
          </nav>
        </div>
        <div className="content-all justify">
          <ul className="nav nav-pills nav-justified flex ">
            <li className="nav-item bg-primary">
              <a className="nav-link active bg-primary" href="/#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Much longer nav link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Link
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

      <h2>Working with flex utilities</h2>
      <div className="container">
        <div className="content-all flex-utilities">
          <nav className="nav nav-pills flex">
            <a className="nav-link active bg-primary" href="/#">
              Active
            </a>
            <a className="nav-link" href="/#">
              Longer nav link
            </a>
            <a className="nav-link" href="/#">
              Link
            </a>
            <a className="nav-link disabled" href="/#">
              Disabled
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}