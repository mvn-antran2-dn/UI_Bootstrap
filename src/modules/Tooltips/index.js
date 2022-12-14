export default function Tooltips() {
  return (
    <div id="tooltip-page">
      <h1>Tooltips</h1>
      <h2>Tooltips Top, Right, Bottom, Left</h2>
      <div className="container">
        <div className="content-all flex ">
          <div className="d-inline-block tooltip">
            <button type="button" className="btn-all bg-secondary">
              Tooltip on top
            </button>
            <div className="content-tooltip top">
              <p>Tooltip on top</p>
            </div>
          </div>
          <div className="d-inline-block tooltip  ml-2">
            <button type="button" className="btn-all bg-secondary">
              Tooltip on left
            </button>
            <div className="content-tooltip left">
              <p>Tooltip on left</p>
            </div>
          </div>
          <div className="d-inline-block tooltip ">
            <button type="button" className="btn-all bg-secondary">
              Tooltip on bottom
            </button>
            <div className="content-tooltip bottom">
              <p>Tooltip on bottom</p>
            </div>
          </div>
          <div className="d-inline-block tooltip ">
            <button type="button" className="btn-all bg-secondary">
              Tooltip on right
            </button>
            <div className="content-tooltip right">
              <p>Tooltip on right</p>
            </div>
          </div>
        </div>
      </div>
      <h2>SGV</h2>
      <div className="container">
        <div className="content-all ">
          <div className="d-inline-block tooltip ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 100 100"
            >
              <rect width="100%" height="100%" fill="#563d7c"></rect>
              <circle cx="50" cy="50" r="30" fill="#007bff"></circle>
            </svg>
            <div className="content-tooltip top svg-top">
              <p>Tooltip on top</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Disabled Tooltip</h2>
      <div className="container">
        <div className="content-all ">
          <div className="d-inline-block tooltip ">
            <button type="button" disabled className="btn-all bg-secondary">
              Tooltip Disabled
            </button>
            <div className="content-tooltip top top-disable">
              <p>Tooltip Disabled</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}