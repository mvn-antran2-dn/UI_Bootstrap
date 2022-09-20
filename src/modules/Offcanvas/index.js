import OffCanvasCP from "../../components/Offcanvas";

export default function OffCanvas() {
  return (
    <>
      <h1>Off Canvas</h1>
      <h2>Live Demo</h2>
      <h2>Start</h2>
      <div className="container">
        <div className="content-all">
          <OffCanvasCP>...</OffCanvasCP>
        </div>
      </div>
      <h2>Placement</h2>
      <h2>Top</h2>
      <div className="container">
        <div className="content-all">
          <OffCanvasCP direction="top">...</OffCanvasCP>
        </div>
      </div>
      <h2>Right</h2>
      <div className="container">
        <div className="content-all">
          <OffCanvasCP direction="end">...</OffCanvasCP>
        </div>
      </div>
      <h2> Bottom</h2>
      <div className="container">
        <div className="content-all">
          <OffCanvasCP direction="bottom">...</OffCanvasCP>
        </div>
      </div>
    </>
  );
}