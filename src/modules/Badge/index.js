export default function Badge() {
  return (
    <>
      <h1>Badges</h1>
      <h2>Headings</h2>
      <div className="container">
        <div className="content-all badge">
          <h1>Example heading <span class="badge-heading bg-secondary">New</span></h1>
          <h2>Example heading <span class="badge-heading bg-secondary">New</span></h2>
          <h3>Example heading <span class="badge-heading bg-secondary">New</span></h3>
          <h4>Example heading <span class="badge-heading bg-secondary">New</span></h4>
          <h5>Example heading <span class="badge-heading bg-secondary">New</span></h5>
          <h6>Example heading <span class="badge-heading bg-secondary">New</span></h6>
        </div>
      </div>
      <h2>Buttons</h2>
      <div className="container">
        <div className="content-all badge">
          <button type="button" class="btn-badge btn-primary">
            Notifications <span class="badge-btn bg-secondary">4</span>
          </button>
        </div>
      </div>
      <h2>Positioned</h2>
      <div className="container">
        <div className="content-all badge">
          <button type="button" class="btn-badge btn-primary ">
            Inbox
            <span class="badge-positioned">
              99+
              <span class="badge-positioned-hidden">unread messages</span>
            </span>
          </button>
        </div>
        <div className="content-all badge badge-positioned">
          <button type="button" class="btn-badge btn-primary ">
            Profile
            <span class="badge-positioned profile">
              <span class="badge-positioned-hidden">new alerts</span>
            </span>
          </button>
        </div>
      </div>
      <h2>background Colors</h2>
      <div className="container">
        <div className="content-all badge">
          <span class="badge-bg-color bs-primary">Primary</span>
          <span class="badge-bg-color bs-secondary">Secondary</span>
          <span class="badge-bg-color bs-success">Success</span>
          <span class="badge-bg-color bs-danger">Danger</span>
          <span class="badge-bg-color bs-warning ">Warning</span>
          <span class="badge-bg-color bs-info">Info</span>
          <span class="badge-bg-color bs-light">Light</span>
          <span class="badge-bg-color bs-dark">Dark</span>
        </div>
      </div>
      <h2>Pill badges</h2>
      <div className="container">
        <div className="content-all badge">
          <span class="badge-bg-color pill-badges bs-primary">Primary</span>
          <span class="badge-bg-color pill-badges bs-secondary">Secondary</span>
          <span class="badge-bg-color pill-badges bs-success">Success</span>
          <span class="badge-bg-color pill-badges bs-danger">Danger</span>
          <span class="badge-bg-color pill-badges bs-warning ">Warning</span>
          <span class="badge-bg-color pill-badges bs-info">Info</span>
          <span class="badge-bg-color pill-badges bs-light">Light</span>
          <span class="badge-bg-color pill-badges bs-dark">Dark</span>
        </div>
      </div>
    </>
  );
}