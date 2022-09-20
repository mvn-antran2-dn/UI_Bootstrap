export default function Spinners() {
  return (
    <>
      <h1>Spinners</h1>
      <h2>Border Spinner</h2>
      <div className="container">
        <div className="content-all">
          <div className="spinner-border">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <h2>Colors</h2>
      <div className="container">
        <div className="content-all">
          <div className="spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-secondary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-warning">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-info">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-light">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-dark">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <h2>Growing spinner</h2>
      <div className="container">
        <div className="content-all">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="content-all growing-spinner">
          <div className="spinner-grow text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <h2>Margin</h2>
      <div className="container">
        <div className="content-all">
          <div className="spinner-border m-6">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <h2>Flex</h2>
      <div className="container">
        <div className="content-all">
          <div className="flex justify-content-center">
            <div className="spinner-border">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
        <div className="content-all flex-spinner">
          <div className="flex align-items-center">
            <span>Loading...</span>
            <div className="spinner-border ml-auto"></div>
          </div>
        </div>
      </div>

      <h2>Float</h2>
      <div className="container">
        <div className="content-all">
          <div className="clear-fix">
            <div className="flex float-end">
              <div className="spinner-border">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Size</h2>
      <div className="container">
        <div className="content-all">
          <div className="spinner-border spinner-border-sm">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className="content-all size-spinner">
          <div className="spinner-border spinner-border-lg">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-lg">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>

      <h2>Button</h2>
      <div className="container">
        <div className="content-all flex align-items-center">
          <button className="btn-all bg-primary flex  btn-spinner-small" type="button" disabled>
            <span className="spinner-border spinner-border-sm "></span>
            <span className="visually-hidden">Loading...</span>
          </button>
          <button
            className="btn-all bg-primary flex align-items-center"
            type="button"
            disabled
          >
            <span className="spinner-border spinner-border-sm mr-2"></span>
            Loading...
          </button>
        </div>
        <div className="content-all button-spinner flex align-items-center">
          <button className="btn-all bg-primary flex btn-spinner-small" type="button" disabled>
            <span className="spinner-grow spinner-grow-sm"></span>
            <span className="visually-hidden">Loading...</span>
          </button>
          <button
            className="btn-all bg-primary flex align-items-center"
            type="button"
            disabled
          >
            <span className="spinner-grow spinner-grow-sm mr-2"></span>
            Loading...
          </button>
        </div>
      </div>

    </>
  );
}