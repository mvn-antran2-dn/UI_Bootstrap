export default function Buttons() {
  return (
    <>
      <h1>Buttons</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons">
            <button type="button" class="btn-all btn-buttons  bg-primary">Primary</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary">Secondary</button>
            <button type="button" class="btn-all btn-buttons  bg-success">Success</button>
            <button type="button" class="btn-all btn-buttons  bg-danger">Danger</button>
            <button type="button" class="btn-all btn-buttons  bg-warning">Warning</button>
            <button type="button" class="btn-all btn-buttons  bg-info">Info</button>
            <button type="button" class="btn-all btn-buttons  bg-light">Light</button>
            <button type="button" class="btn-all btn-buttons  bg-dark">Dark</button>
            <button type="button" class="btn-all btn-buttons  bg-link">Link</button>
          </div>
        </div>
      </div>
      <h2>Buttons Tags</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons">
            <button type="button" class="btn-all btn-buttons  bg-primary">Link</button>
            <button type="button" class="btn-all btn-buttons  bg-primary">Buttons</button>
            <button type="button" class="btn-all btn-buttons  bg-primary">Input</button>
            <button type="button" class="btn-all btn-buttons  bg-primary">Submit</button>
            <button type="button" class="btn-all btn-buttons  bg-primary">Reset</button>
          </div>
        </div>
      </div>
      <h2>Outline Buttons</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons">
            <button type="button" class="btn-all btn-buttons  bg-outline-primary">Primary</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-secondary">Secondary</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-success">Success</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-danger">Danger</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-warning">Warning</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-info">Info</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-light">Light</button>
            <button type="button" class="btn-all btn-buttons  bg-outline-dark">Dark</button>
          </div>
        </div>
      </div>
      <h2>Sizes</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons">
            <button type="button" class="btn-all btn-buttons  bg-primary btn-lg">Large button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-lg">Large button</button>
            <button type="button" class="btn-all btn-buttons  bg-primary btn-sm">Small button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-sm">Small button</button>
          </div>
        </div>
      </div>
      <h2>Disabled state</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons">
            <button type="button" class="btn-all btn-buttons  bg-primary btn-lg" disabled>Primary button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-lg" disabled>Primary button</button>
            <a href="/#" role="button" class="btn-all btn-buttons  bg-primary btn-lg disabled">Primary link</a>
            <a href="/#" role="button" class="btn-all btn-buttons  bg-secondary btn-lg disabled">Primary link</a>
          </div>
        </div>
      </div>
      <h2>Block Buttons</h2>
      <div className="container">
        <div className="content-all">
          <div className="buttons d-grid">
            <button type="button" class="btn-all btn-buttons  bg-primary btn-lg " >Primary button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-lg " >Primary button</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="buttons d-grid col-6 mx-auto">
            <button type="button" class="btn-all btn-buttons  bg-primary btn-lg" >Primary button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-lg" >Primary button</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content-all">
          <div className="buttons flex justify-content-flex-end">
            <button type="button" class="btn-all btn-buttons  bg-primary btn-lg" >Primary button</button>
            <button type="button" class="btn-all btn-buttons  bg-secondary btn-lg" >Primary button</button>
          </div>
        </div>
      </div>
    </>
  );
}