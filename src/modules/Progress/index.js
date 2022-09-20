export default function Progress() {
  return (
    <>
      <h1>Progress</h1>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "25%" }}></div>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "75%" }}></div>
          </div>
          <div className="progress">
            <div className="progress-bar" style={{ width: "100%" }}></div>
          </div>
        </div>
        <div className="content-all progress-bt">
          <div className="progress">
            <div className="progress-bar width-75"></div>
          </div>
        </div>
      </div>

      <h2>Labels</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div className="progress-bar width-25 text-progress">25 %</div>
          </div>
        </div>
      </div>

      <h2>Height</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress" style={{ height: "1px" }}>
            <div className="progress-bar width-25"></div>
          </div>
          <div className="progress" style={{ height: "20px" }}>
            <div className="progress-bar width-25"></div>
          </div>
        </div>
      </div>

      <h2>Color</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div
              className="progress-bar bs-success"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="progress">
            <div className="progress-bar bs-info" style={{ width: "50%" }}></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bs-warning"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bs-danger"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>

      <h2>Multiple Bars</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div
              className="progress-bar bs-primary"
              style={{ width: "15%" }}
            ></div>
            <div
              className="progress-bar bs-success"
              style={{ width: "30%" }}
            ></div>
            <div
              className="progress-bar bs-info"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
      </div>

      <h2>Stripes</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div
              className="progress-bar progress-bar-stripes bs-primary"
              style={{ width: "10%" }}
            ></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-stripes bs-success"
              style={{ width: "25%" }}
            ></div>
          </div>
          <div className="progress">
            <div className="progress-bar progress-bar-stripes bs-info" style={{ width: "50%" }}></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar  progress-bar-stripes bs-warning"
              style={{ width: "75%" }}
            ></div>
          </div>
          <div className="progress">
            <div
              className="progress-bar progress-bar-stripes  bs-danger"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      </div>

      <h2>Stripes</h2>
      <div className="container">
        <div className="content-all">
          <div className="progress">
            <div
              className="progress-bar progress-bar-stripes progress-bar-animated bs-primary"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}