export default function List() {
  return (
    <>
      <h1>List group</h1>
      <h2>Basic example</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>

      <h2>Active</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group">
            <li className="list-group-item active">An Active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>

      <h2>Disabled items</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item disabled">A disable item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>

      <h2>Links and Buttons</h2>
      <div className="container">
        <div className="content-all">
          <div className="list-group list-group-link">
            <a href="/#" className="list-group-item list-group-item-action active">
              The current link item
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              A second link item
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              A third link item
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              A fourth link item
            </a>
            <a
              href="."
              className="list-group-item list-group-item-action disabled"
            >
              A disabled link item
            </a>
          </div>
        </div>
        <div className="content-all">
          <div className="list-group list-group-link">
            <button
              type="button"
              className="list-group-item list-group-item-action active"
            >
              The current button
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              A second item
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              A third button item
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              A fourth button item
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
              disabled
            >
              A disabled button item
            </button>
          </div>
        </div>
      </div>


      <h2>Flush</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>

      <h2>Numbered</h2>
      <div className="container">
        <div className="content-all">
          <ol className="list-group list-group-numbered">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
          </ol>
        </div>
        <div className="content-all">
          <ol className="list-group list-group-numbered">
            <li className="list-group-item flex justify-content-between align-items-start">
              <div className="ml-1 mr-auto">
                <div className="text-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item flex justify-content-between align-items-start">
              <div className="ml-1 mr-auto">
                <div className="text-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item flex justify-content-between align-items-start">
              <div className="ml-1 mr-auto">
                <div className="text-bold">Subheading</div>
                Content for list item
              </div>
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
          </ol>
        </div>
      </div>

      <h2>Horizontal</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group list-group-horizontal flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-sm flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-md flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-lg flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-xl flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <ul className="list-group list-group-horizontal-xxl flex">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>

      <h2>Contextual classes</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group contextual-classes">
            <li className="list-group-item">A simple default list group item</li>

            <li className="list-group-item list-group-item-primary bs-bland-primary">
              A simple primary list group item
            </li>
            <li className="list-group-item list-group-item-secondary bs-bland-secondary">
              A simple secondary list group item
            </li>
            <li className="list-group-item list-group-item-success bs-bland-success">
              A simple success list group item
            </li>
            <li className="list-group-item list-group-item-danger bs-bland-danger">
              A simple danger list group item
            </li>
            <li className="list-group-item list-group-item-warning bs-bland-warning">
              A simple warning list group item
            </li>
            <li className="list-group-item list-group-item-info bs-bland-info">
              A simple info list group item
            </li>
            <li className="list-group-item list-group-item-light bs-bland-light">
              A simple light list group item
            </li>
            <li className="list-group-item list-group-item-dark bs-bland-dark">
              A simple dark list group item
            </li>
          </ul>
        </div>
      </div>

      <h2>Action</h2>
      <div className="container">
        <div className="content-all">
          <div class="list-group contextual-classes-action">
            <a href="/#" class="list-group-item list-group-item-action list-group-item-action-none-bg  ">A simple default list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-primary-hover">A simple primary list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-secondary-hover">A simple secondary list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-success-hover">A simple success list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-danger-hover">A simple danger list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-warning-hover">A simple warning list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-info-hover">A simple info list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-light-hover">A simple light list group item</a>
            <a href="/#" class="list-group-item list-group-item-action bs-bland-dark-hover">A simple dark list group item</a>
          </div>
        </div>
      </div>

      <h2>With badges</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group with-badges">
            <li className="list-group-item flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item flex justify-content-between align-items-center">
              A second list item
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
            <li className="list-group-item flex justify-content-between align-items-center">
              A third list item
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
          </ul>
        </div>
      </div>

      <h2>Custom content</h2>
      <div className="container">
        <div className="content-all">
          <div className="list-group custom-content flex">
            <a href="/#" className="list-group-item list-group-item-action active">
              <div className="flex justify-content-between">
                <h5 className="text-custom-content">List group item heading</h5>
                <span className="text-mute">3 days ago</span>
              </div>
              <p className="text-custom-content">Some placeholder content in a paragraph.</p>
              <span>And some span print.</span>
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              <div className="flex justify-content-between">
                <h5 className="text-custom-content">List group item heading</h5>
                <span className="text-muted">3 days ago</span>
              </div>
              <p className="text-custom-content">Some placeholder content in a paragraph.</p>
              <span className="text-muted">And some muted span print.</span>
            </a>
            <a href="/#" className="list-group-item list-group-item-action">
              <div className="flex justify-content-between">
                <h5 className="text-custom-content">List group item heading</h5>
                <span className="text-muted">3 days ago</span>
              </div>
              <p className="text-custom-content">Some placeholder content in a paragraph.</p>
              <span className="text-muted">And some muted span print.</span>
            </a>
          </div>
        </div>
      </div>

      <h2>Checkboxes and radios</h2>
      <div className="container">
        <div className="content-all">
          <ul className="list-group checkbox-radio">
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              First checkbox
            </li>
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Second checkbox
            </li>
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Third checkbox
            </li>
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Fourth checkbox
            </li>
            <li className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Fifth checkbox
            </li>
          </ul>
        </div>
        <div className="content-all">
          <div className="list-group checkbox-radio">
            <label className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              First checkbox
            </label>
            <label className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Second checkbox
            </label>
            <label className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Third checkbox
            </label>
            <label className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Fourth checkbox
            </label>
            <label className="list-group-item">
              <input className="form-check-input" type="checkbox" />
              Fifth checkbox
            </label>
          </div>
        </div>
      </div>

    </>
  );
}