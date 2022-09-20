import { CloseOutlined } from '@ant-design/icons';
export default function Close() {
  return (
    <>
      <h1>Close Button</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all">
          <button type="button" className="btn-close">
            <CloseOutlined />
          </button>
        </div>
      </div>

      <h2>Disabled state</h2>
      <div className="container">
        <div className="content-all">
          <button type="button" className="btn-close" disabled>
            <CloseOutlined />
          </button>
        </div>
      </div>

      <h2>White variant</h2>
      <div className="container">
        <div className="content-all white-variant">
          <button type="button" className="btn-close btn-close-white">
            <CloseOutlined />
          </button>
          <button
            type="button"
            className="btn-close btn-close-white"
            disabled
          >
            <CloseOutlined />
          </button>
        </div>
      </div>

    </>
  );
}