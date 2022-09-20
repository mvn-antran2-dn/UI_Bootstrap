export default function Collapse() {
  const showCollapse = (e) => {
    e.preventDefault();
    e.target.parentElement.nextElementSibling.classList.toggle("show-collapse");
  };
  const showCollapse1 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.firstChild.firstChild.classList.toggle("show-collapse");
  };
  const showCollapse2 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.lastChild.firstChild.classList.toggle("show-collapse");
  };
  const showCollapse3 = (e) => {
    e.preventDefault();
    e.target.parentElement.lastChild.firstChild.firstChild.classList.toggle("show-collapse");
    e.target.parentElement.lastChild.lastChild.firstChild.classList.toggle("show-collapse");
  };
  return (
    <>
      <h1>Collapse</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all collapse-all">
          <div className="collapse-btn">
            <a className="btn-all bg-primary mr-4" onClick={showCollapse} href="/#">
              Link with href
            </a>
            <button class="btn-all bg-primary" onClick={showCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-bs-target
            </button>
          </div>
          <div className="collapse mv-2">
            <div className="card card-body width-full">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the relevant
              trigger.
            </div>
          </div>
        </div>
      </div>
      <h2>horizontal</h2>
      <div className="container">
        <div className="content-all">
          <div className="collapse-btn">
            <button class="btn-all bg-primary" onClick={showCollapse} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              Button with data-bs-target
            </button>
          </div>
          <div className="collapse-horizontal width-50 mv-2">
            <div className="card card-body ">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the relevant
              trigger.
            </div>
          </div>
        </div>
      </div>
      <h2>Multiple targets</h2>
      <div className="container">
        <div className="content-all collapse-all">
          <a className="btn-all bg-primary" onClick={showCollapse1} href="/#">
            Toggle first element
          </a>
          <button class="btn-all bg-primary" onClick={showCollapse2} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
          <button class="btn-all bg-primary" onClick={showCollapse3} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
          </button>
          <div className="row mv-4">
            <div className="col-6">
              <div className="collapse width-full">
                <div className="card width-full card-body">
                  Some placeholder content for the first collapse component of
                  this multi-collapse example.
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="collapse width-full">
                <div className="card width-full card-body">
                  Some placeholder content for the first collapse component of
                  this multi-collapse example.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}