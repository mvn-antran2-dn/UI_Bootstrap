export default function Placeholders() {
  return (
    <>
      <h1>Placeholders</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all ">
          <div className="placeholder-example flex justify-content-around width-75">
            <div className="card">
              <img
                src="https://images.hdqwalls.com/download/leo-messi-image-1600x900.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="btn-all bg-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="card">
              <img
                src="https://images.hdqwalls.com/download/leo-messi-image-1600x900.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow ">
                  <span className="placeholder col-7 mr-1"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4 mr-1"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a href="/#" className="btn-all bg-primary disabled  col-6 btn-pla-ex">
                  &nbsp;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2> How it works</h2>
      <div className="container">
        <div className="content-all">
          <p>
            <span className="placeholder col-6 bg-secondary"></span>
          </p>
          <a href="/#" className="btn-all bg-primary disabled  col-4 btn-pla-work">
          </a>
        </div>
      </div>

      <h2>Width</h2>
      <div className="container">
        <div className="content-all">
          <span className="placeholder col-6"></span>
          <span className="placeholder width-75"></span>
          <span className="placeholder" style={{ width: "26%" }}></span>
        </div>
      </div>

      <h2>Color</h2>
      <div className="container">
        <div className="content-all">
          <span className="placeholder col-12"></span>
          <span className="placeholder col-12 bs-primary"></span>
          <span className="placeholder col-12 bs-secondary"></span>
          <span className="placeholder col-12 bs-success"></span>
          <span className="placeholder col-12 bs-danger"></span>
          <span className="placeholder col-12 bs-warning"></span>
          <span className="placeholder col-12 bs-info"></span>
          <span className="placeholder col-12 bs-light"></span>
          <span className="placeholder col-12 bs-dark"></span>
        </div>
      </div>

      <h2> Sizing</h2>
      <div className="container">
        <div className="content-all">
          <span className="placeholder col-12 placeholder-lg"></span>
          <span className="placeholder col-12"></span>
          <span className="placeholder col-12 placeholder-sm"></span>
          <span className="placeholder col-12 placeholder-xs"></span>
        </div>
      </div>

      <h2>Animation</h2>
      <div className="container">
        <div className="content-all">
          <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
          </p>
          <p className="placeholder-wave">
            <span className="placeholder col-12"></span>
          </p>
        </div>
      </div>

    </>
  );
}